import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'; // Ajuste o caminho conforme necessário

const ProtectedRoute = ({ children }) => {
  const { user, loadingAuth } = useAuth(); // Pega o usuário e o estado de carregamento da autenticação

  if (loadingAuth) {
    // Enquanto a autenticação está sendo verificada (ex: na primeira carga da página),
    // você pode mostrar um spinner de carregamento ou nada.
    // Isso evita que o usuário seja redirecionado para o login antes que o Firebase
    // tenha tido a chance de verificar a sessão existente.
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-xl text-gray-600">Carregando...</p>
      </div>
    );
  }

  if (!user) {
    // Se não há usuário logado e não está mais carregando, redireciona para a página de login.
    return <Navigate to="/login" replace />;
  }

  // Se há um usuário logado, renderiza os componentes filhos (a rota protegida).
  // 'children' é usado quando o ProtectedRoute é um wrapper (ex: <ProtectedRoute><MyComponent /></ProtectedRoute>)
  // 'Outlet' é usado quando o ProtectedRoute é um elemento em uma rota pai (menos comum para essa finalidade)
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
