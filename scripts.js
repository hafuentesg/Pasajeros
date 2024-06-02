// Configurar Firebase
const firebaseConfig = {
    apiKey: const firebaseConfig = {
  apiKey: "AIzaSyA8vuEdZV2fl7euN6LKA8nTWMhQVZucjv0",
  authDomain: "cambios-de-guardia.firebaseapp.com",
  projectId: "cambios-de-guardia",
  storageBucket: "cambios-de-guardia.appspot.com",
  messagingSenderId: "337623504961",
  appId: "1:337623504961:web:28d38360b1d87c32a78ec0",
  measurementId: "G-4ERYW7KBJQ"
};,
    authDomain: const firebaseConfig = {
  apiKey: "AIzaSyA8vuEdZV2fl7euN6LKA8nTWMhQVZucjv0",
  authDomain: "cambios-de-guardia.firebaseapp.com",
  projectId: "cambios-de-guardia",
  storageBucket: "cambios-de-guardia.appspot.com",
  messagingSenderId: "337623504961",
  appId: "1:337623504961:web:28d38360b1d87c32a78ec0",
  measurementId: "G-4ERYW7KBJQ"
};,
    projectId: const firebaseConfig = {
  apiKey: "AIzaSyA8vuEdZV2fl7euN6LKA8nTWMhQVZucjv0",
  authDomain: "cambios-de-guardia.firebaseapp.com",
  projectId: "cambios-de-guardia",
  storageBucket: "cambios-de-guardia.appspot.com",
  messagingSenderId: "337623504961",
  appId: "1:337623504961:web:28d38360b1d87c32a78ec0",
  measurementId: "G-4ERYW7KBJQ"
};,
    storageBucket: const firebaseConfig = {
  apiKey: "AIzaSyA8vuEdZV2fl7euN6LKA8nTWMhQVZucjv0",
  authDomain: "cambios-de-guardia.firebaseapp.com",
  projectId: "cambios-de-guardia",
  storageBucket: "cambios-de-guardia.appspot.com",
  messagingSenderId: "337623504961",
  appId: "1:337623504961:web:28d38360b1d87c32a78ec0",
  measurementId: "G-4ERYW7KBJQ"
};,
    messagingSenderId: const firebaseConfig = {
  apiKey: "AIzaSyA8vuEdZV2fl7euN6LKA8nTWMhQVZucjv0",
  authDomain: "cambios-de-guardia.firebaseapp.com",
  projectId: "cambios-de-guardia",
  storageBucket: "cambios-de-guardia.appspot.com",
  messagingSenderId: "337623504961",
  appId: "1:337623504961:web:28d38360b1d87c32a78ec0",
  measurementId: "G-4ERYW7KBJQ"
};,
    appId: const firebaseConfig = {
  apiKey: "AIzaSyA8vuEdZV2fl7euN6LKA8nTWMhQVZucjv0",
  authDomain: "cambios-de-guardia.firebaseapp.com",
  projectId: "cambios-de-guardia",
  storageBucket: "cambios-de-guardia.appspot.com",
  messagingSenderId: "337623504961",
  appId: "1:337623504961:web:28d38360b1d87c32a78ec0",
  measurementId: "G-4ERYW7KBJQ"
};
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Referencias a los elementos del DOM
const passengerForm = document.getElementById('passenger-form');
const passengersDiv = document.getElementById('passengers');

// Función para agregar pasajero
passengerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const fechaIda = document.getElementById('fechaIda').value;
    const rutaIda = document.getElementById('rutaIda').value;
    const fechaRegreso = document.getElementById('fechaRegreso').value;
    const rutaRegreso = document.getElementById('rutaRegreso').value;
    const clave = document.getElementById('clave').value;

    await db.collection('passengers').add({
        nombre,
        fechaIda,
        rutaIda,
        fechaRegreso,
        rutaRegreso,
        clave
    });

    passengerForm.reset();
    fetchPassengers();
});

// Función para obtener y mostrar pasajeros
const fetchPassengers = async () => {
    passengersDiv.innerHTML = '';
    const snapshot = await db.collection('passengers').get();
    snapshot.forEach((doc) => {
        const data = doc.data();
        const passengerElement = document.createElement('div');
        passengerElement.textContent = `${data.nombre} - ${data.fechaIda} - ${data.rutaIda} - ${data.fechaRegreso} - ${data.rutaRegreso} - ${data.clave}`;
        passengersDiv.appendChild(passengerElement);
    });
};

// Inicializar la obtención de pasajeros
fetchPassengers();
