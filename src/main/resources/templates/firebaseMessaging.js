
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js")

const firebaseConfig = {
    apiKey: "AIzaSyAJ5_3y7cH9cVwDSNiuPFfFNZ-qbgd82qs",
    authDomain: "notificationtest-f0e2f.firebaseapp.com",
    projectId: "notificationtest-f0e2f",
    storageBucket: "notificationtest-f0e2f.firebasestorage.app",
    messagingSenderId: "866056695770",
    appId: "1:866056695770:web:a77038925351014ffe5ae3",
    measurementId: "G-NNR7PP58WJ"
};
firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.onBackgroundMessage(payLoad=>{
    console.log(payLoad);
    const notificationTitle={
        body:payLoad.notification.body
    }
    self.registration.showNotification(payLoad.notification.title,notificationTitle)
})
