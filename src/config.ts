import { FirebaseOptions } from "firebase/app";
import keys from "./keys";

type Config = {
  [key: string]: any;
  primaryColor: string;
  accentColor: string;
  darkModeWindow?: {
    start: number;
    end: number;
  };
  firebaseOptions: FirebaseOptions;
};

const config: Config = {
  primaryColor: "#00bcd4",
  accentColor: "#ff9800",
  darkModeWindow: {
    start: 19,
    end: 7,
  },
  firebaseOptions: keys.firebase,
};

export default config;
