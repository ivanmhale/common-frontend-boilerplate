import { initializeApp } from "firebase/app";
import config from "./config";

const app = initializeApp(config.firebaseOptions);

export default app;
