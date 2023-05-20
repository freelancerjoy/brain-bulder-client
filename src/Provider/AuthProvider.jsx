import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { set } from "react-hook-form";

export const AuthContest = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(user);

  // Create user
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // LogIn User
  const LogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user Profile update
  const profileUpdate = (user, name, photoUrl) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  // Current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe();
  }, []);

  const authInfo = {
    user,
    signUpUser,
    LogIn,
    profileUpdate,
  };
  return (
    <AuthContest.Provider value={authInfo}>{children}</AuthContest.Provider>
  );
};

export default AuthProvider;
