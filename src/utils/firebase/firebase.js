import * as firebase from 'firebase';
import * as fbDevConfig from '../../constants/firebaseDevConfig';
import * as fbProdConfig from '../../constants/firebaseProdConfig';

const devConfig = {
  apiKey: fbDevConfig.FIREBASE_API_KEY,
  authDomain: fbDevConfig.FIREBASE_AUTH_DOMAIN,
  databaseURL: fbDevConfig.FIREBASE_DATABASE_URL,
  projectId: fbDevConfig.FIREBASE_PROJECT_ID,
  storageBucket: fbDevConfig.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: fbDevConfig.FIREBASE_MESSAGING_SENDER_ID,
};

const prodConfig = {
  apiKey: fbProdConfig.FIREBASE_API_KEY,
  authDomain: fbProdConfig.FIREBASE_AUTH_DOMAIN,
  databaseURL: fbProdConfig.FIREBASE_DATABASE_URL,
  projectId: fbProdConfig.FIREBASE_PROJECT_ID,
  storageBucket: fbProdConfig.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: fbProdConfig.FIREBASE_MESSAGING_SENDER_ID,
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
