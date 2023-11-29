import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyDUIYC6PkaWSo_vxad5RPBqQuWVbsYC9kI',
  authDomain: 'trends-lec8-demo-295c9.firebaseapp.com',
  projectId: 'trends-lec8-demo-295c9',
  storageBucket: 'trends-lec8-demo-295c9.appspot.com',
  messagingSenderId: '1031796234190',
  appId: '1:1031796234190:web:b9ce13de2c208402983d9f',
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
