// src/firebase/auth.js
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  // currentUser // currentUser é uma propriedade, não uma função, mas é acessível via getAuth()
} from 'firebase/auth';
import { auth } from './config'; // Importa a instância 'auth' do seu config.js

/**
 * Cria um novo usuário com email e senha.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<UserCredential>}
 */
export async function registerUser(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

/**
 * Autentica um usuário com email e senha.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<UserCredential>}
 */
export async function loginUser(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

/**
 * Faz logout do usuário atual.
 * @returns {Promise<void>}
 */
export async function logoutUser() {
  return await signOut(auth);
}

/**
 * Subscreve a um observador do estado de autenticação.
 * @param {(user: User | null) => void} callback
 * @returns {firebase.Unsubscribe} Função para cancelar a subscrição.
 */
export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}

/**
 * Obtém o usuário atualmente logado.
 * @returns {User | null}
 */
export function getCurrentUser() {
  return auth.currentUser;
}