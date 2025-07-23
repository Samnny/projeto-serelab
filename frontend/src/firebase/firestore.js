// src/firebase/firestore.js
import { collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from './config';

/**
 * Salva os dados de um novo usuário na coleção 'usuarios' do Firestore.
 * @param {string} uid O UID do usuário vindo da autenticação.
 * @param {object} userData Os dados do usuário a serem salvos (email, apelido, genero, pronome).
 * @returns {Promise<void>}
 */
export async function saveUserData(uid, { email, apelido, genero, pronome }) {
  const userRef = doc(db, 'usuarios', uid); // Cria uma referência ao documento com o UID como ID
  await setDoc(userRef, {
    id: uid,
    email,
    apelido,
    genero,
    pronome,
    premium: false,
    criadoEm: Timestamp.now(), // Usa o Timestamp importado
  });
}

// Você pode adicionar mais funções aqui para outras operações Firestore, por exemplo:
// export async function getUserProfile(uid) { ... }
// export async function updateCard(cardId, data) { ... }