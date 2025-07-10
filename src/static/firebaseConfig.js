import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: "procms-65453.firebaseapp.com",
  projectId: "procms-65453",
  storageBucket: "procms-65453.firebasestorage.app",
  messagingSenderId: process.env.FB_MSG_SENDER_ID,
  appId: process.env.FB_APP_ID
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export { storage };