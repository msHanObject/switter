import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REEACT_APP_AUTH_DOMAIN,
  projectId: process.env.REEACT_APP_PROJECT_ID,
  storageBucket: process.env.REEACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REEACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REEACT_APP_APP_ID,
  measurementId: process.env.REEACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();