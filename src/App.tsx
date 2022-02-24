import React, { useState } from "react";
import { getAuth, User as FirebaseUser } from "firebase/auth";
import { authState } from "rxfire/auth";
import app from "./firebase";

export default () => {
  const [FBUser, setFBUser] = useState<FirebaseUser | null>(null);
  const auth = getAuth(app);

  authState(auth).subscribe(setFBUser);

  if (!FBUser) return <h1>Not signed in</h1>;

  return <h1>Hello there</h1>;
};
