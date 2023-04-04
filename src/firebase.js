import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBv4weU27RcAKfkWyV8Pz7XBY_l2TWS-xM",
  authDomain: "uploadimg-a9a88.firebaseapp.com",
  projectId: "uploadimg-a9a88",
  storageBucket: "uploadimg-a9a88.appspot.com",
  messagingSenderId: "864585380712",
  appId: "1:864585380712:web:08ce4e54eb3673f604dcdd"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)