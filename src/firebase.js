import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REEACT_APP_AUTH_DOMAIN,
    projectId: process.env.REEACT_APP_PROJECT_ID,
    storageBucket: process.env.REEACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REEACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REEACT_APP_APP_ID,
    measurementId: process.env.REEACT_APP_MEASUREMENT_ID,
};

export default firebase.initializeApp(firebaseConfig);