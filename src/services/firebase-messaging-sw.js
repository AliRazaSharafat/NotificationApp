import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyADRJaXFYxC-XUtgVe22OXjtKbD9w7WTCs",
    authDomain: "notificationapp-232d8.firebaseapp.com",
    projectId: "notificationapp-232d8",
    storageBucket: "notificationapp-232d8.appspot.com",
    messagingSenderId: "583919134260",
    appId: "1:583919134260:web:6058a10679064da9658c61"
};

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

export function configureNotification() {
    Notification.requestPermission().then(permission => {
        console.log(permission);
        if (permission) {
            messaging.getToken().then(currentToken => {
                if (currentToken) {
                    console.log('Current Token=>')
                    console.log(currentToken)
                }
                else {
                    console.log('No instance ID token available. Request permission to generate token')
                }
            }).catch(err => {
                console.log('An error occured while retrieving token', err)
            })
        }
    })
}