// Menú responsive
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
});

// Importar Firebase
import { db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Formulario de contacto
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Obtener datos del formulario
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Mostrar mensaje de carga
    formMessage.textContent = 'Enviando mensaje...';
    formMessage.className = 'form-message loading';

    try {
        // Guardar en Firebase
        const docRef = await addDoc(collection(db, 'contactos'), {
            nombre: name,
            email: email,
            asunto: subject,
            mensaje: message,
            fecha: serverTimestamp()
        });

        // Mensaje de éxito
        formMessage.textContent = '¡Mensaje enviado con éxito! Te responderé pronto.';
        formMessage.className = 'form-message success';

        // Limpiar formulario
        contactForm.reset();

    } catch (error) {
        console.error('Error al enviar mensaje:', error);
        formMessage.textContent = 'Error al enviar el mensaje. Por favor, intenta de nuevo.';
        formMessage.className = 'form-message error';
    }
});

// Scroll suave para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});