# Página Personal - Sebastian Arredondo

Una página web personal con formulario de contacto conectado a Firebase.

## Características

-   ✅ Diseño responsive y moderno
-   ✅ Formulario de contacto funcional
-   ✅ Base de datos Firebase para almacenar mensajes
-   ✅ Navegación suave
-   ✅ Menú hamburguesa para móviles

## Configuración de Firebase

### 1. Crear proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en "Crear proyecto"
3. Dale un nombre a tu proyecto (ej: "sebastian-arredondo-portfolio")
4. Sigue los pasos de configuración

### 2. Habilitar Firestore Database

1. En el panel de Firebase, ve a "Firestore Database"
2. Haz clic en "Crear base de datos"
3. Selecciona "Comenzar en modo de prueba"
4. Elige la ubicación más cercana a ti

### 3. Configurar reglas de seguridad

En Firestore Database > Reglas, usa estas reglas:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contactos/{document} {
      allow write: if true;  // Permite escribir (enviar mensajes)
      allow read: if false;  // No permite leer (solo tú desde la consola)
    }
  }
}
```

### 4. Obtener credenciales

1. Ve a Configuración del proyecto > Configuración general
2. En "Tus apps", haz clic en el ícono web (</>)
3. Registra tu app con un nombre
4. Copia la configuración que aparece

### 5. Actualizar firebase-config.js

Reemplaza los valores en `firebase-config.js` con los de tu proyecto:

```javascript
const firebaseConfig = {
    apiKey: "tu-api-key-real",
    authDomain: "tu-proyecto.firebaseapp.com",
    projectId: "tu-proyecto-id",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "123456789",
    appId: "tu-app-id",
};
```

## Estructura de archivos

```
Pagina Personal/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript principal
├── firebase-config.js  # Configuración de Firebase
├── foto-perfil.jpg     # Imagen de perfil
└── README.md           # Este archivo
```

## Cómo funciona

1. **Formulario de contacto**: Los visitantes pueden enviar mensajes
2. **Firebase Firestore**: Almacena los mensajes en la base de datos
3. **Estructura de datos**: Cada mensaje incluye:
    - Nombre del remitente
    - Email
    - Asunto
    - Mensaje
    - Fecha y hora

## Ver mensajes recibidos

1. Ve a Firebase Console > Firestore Database
2. Verás la colección "contactos"
3. Cada documento es un mensaje recibido

## Personalización

-   **Colores**: Modifica las variables CSS en `:root`
-   **Contenido**: Edita el HTML según tus necesidades
-   **Estilos**: Personaliza los estilos en `styles.css`

## Despliegue

Puedes subir estos archivos a cualquier hosting web:

-   GitHub Pages
-   Netlify
-   Vercel
-   Firebase Hosting

## Soporte

Si tienes problemas:

1. Verifica que Firebase esté configurado correctamente
2. Revisa la consola del navegador para errores
3. Asegúrate de que las reglas de Firestore permitan escritura
