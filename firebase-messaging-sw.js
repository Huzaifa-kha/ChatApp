// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCwW0-Nj-LiGvPiZVF-43-nB4ehEyJbVfM",
    authDomain: "appp-7e581.firebaseapp.com",
    databaseURL: "https://appp-7e581-default-rtdb.firebaseio.com",
    projectId: "appp-7e581",
    storageBucket: "appp-7e581.appspot.com",
    messagingSenderId: "279196786581",
    appId: "1:279196786581:web:0029c5362497722685209c",
    measurementId: "G-PN667GGXNS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



