const firebaseConfig = {
  apiKey: "AIzaSyCaUjHrUjlpdN3umRWLE7OSb2txbguDocA",
  authDomain: "jsproject-6e3ef.firebaseapp.com",
  projectId: "jsproject-6e3ef",
  storageBucket: "jsproject-6e3ef.firebasestorage.app",
  messagingSenderId: "614554766364",
  appId: "1:614554766364:web:a7d11edd640b3857b363d9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore()