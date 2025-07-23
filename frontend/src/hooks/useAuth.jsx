// src/hooks/useAuth.js
import { useState, useEffect, createContext, useContext } from 'react';
import { onAuthChange, loginUser, logoutUser, registerUser } from '../firebase/auth';
import { saveUserData } from '../firebase/firestore';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthChange((firebaseUser) => {
            setUser(firebaseUser);
            setLoadingAuth(false);
        });
        return () => unsubscribe();
    }, []);

    const handleRegister = async ({ email, password, apelido, genero, pronome }) => {
        try {
            setLoadingAuth(true);
            const cred = await registerUser(email, password);
            const uid = cred.user.uid;

            console.log("Usuário criado no Auth, UID:", uid);
            await saveUserData(uid, { email, apelido, genero, pronome });
            console.log("Usuário salvo no Firestore com sucesso.");

            setUser(cred.user);
            return { success: true, message: "Registro bem-sucedido!" };
        } catch (error) {
            console.error("Erro no registro:", error);
            let errorMessage = "Ocorreu um erro no registro.";
            if (error.code === 'auth/email-already-in-use') {
                errorMessage = 'Este e-mail já está em uso.';
            } else if (error.code === 'auth/weak-password') {
                errorMessage = 'A senha deve ter pelo menos 6 caracteres.';
            }
            return { success: false, message: errorMessage };
        } finally {
            setLoadingAuth(false);
        }
    };

    const handleLogin = async (email, password) => {
        try {
            setLoadingAuth(true);
            const cred = await loginUser(email, password);
            setUser(cred.user);
            return { success: true, message: "Login bem-sucedido!" };
        } catch (error) {
            console.error("Erro no login:", error);
            let errorMessage = "Credenciais inválidas. Verifique seu e-mail e senha.";
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                errorMessage = 'E-mail ou senha incorretos.';
            }
            return { success: false, message: errorMessage };
        } finally {
            setLoadingAuth(false);
        }
    };

    const handleLogout = async () => {
        try {
            setLoadingAuth(true);
            await logoutUser();
            setUser(null);
            return { success: true, message: "Logout bem-sucedido!" };
        } catch (error) {
            console.error("Erro no logout:", error);
            return { success: false, message: "Ocorreu um erro ao fazer logout." };
        } finally {
            setLoadingAuth(false);
        }
    };

    const value = {
        user,
        loadingAuth,
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook personalizado para consumir o contexto de autenticação
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}