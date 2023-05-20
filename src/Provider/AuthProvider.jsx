import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContest = createContext(null);
const auth = getAuth(app);

// Create user
const signUpUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const authInfo = {
    user,
    signUpUser,
  };
  return (
    <AuthContest.Provider value={authInfo}>{children}</AuthContest.Provider>
  );
};

export default AuthProvider;
