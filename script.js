// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCDSntvIYiBVSkDHqlNtQGPzIramhp0yk",
    authDomain: "registration-100b4.firebaseapp.com",
    databaseURL: "https://registration-100b4-default-rtdb.firebaseio.com",
    projectId: "registration-100b4",
    storageBucket: "registration-100b4.appspot.com",
    messagingSenderId: "284107537942",
    appId: "1:284107537942:web:5aa9ae67c861133dc67f37",
    measurementId: "G-67FBSBE5XL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Capture form data
    const childName = document.getElementById('childName').value;
    const age = document.getElementById('age').value;
    const parentName = document.getElementById('parentName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const comments = document.getElementById('comments').value;

    // Push the data to Firebase Realtime Database
    push(ref(database, 'registrations'), {
        childName: childName,
        age: age,
        parentName: parentName,
        email: email,
        phone: phone,
        comments: comments
    })
    .then(() => {
        alert('Registration successful!');
        form.reset();  // Clear the form
    })
    .catch(error => {
        console.error('Error:', error); // Log the error
        alert('Registration failed, please try again.');
    });
});
