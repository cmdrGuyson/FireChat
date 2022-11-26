import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import config from "./config.json";

export const app = initializeApp(config);
export const firestore = getFirestore();
export const auth = getAuth();
