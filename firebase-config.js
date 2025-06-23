// Configuración de Firebase
// IMPORTANTE: Reemplaza estos valores con los de tu proyecto Firebase

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyDKyK5LFIlgQuwBovBaPBVNfMyNc-FJFCk",
    authDomain: "landing-page-cv-58460.firebaseapp.com",
    projectId: "landing-page-cv-58460",
    storageBucket: "landing-page-cv-58460.firebasestorage.app",
    messagingSenderId: "439410557855",
    appId: "1:439410557855:web:1ae515bc866fcc373773aa",
    measurementId: "G-X8HM8G38KD"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 