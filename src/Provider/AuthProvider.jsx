import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { set } from "react-hook-form";
import Swal from "sweetalert2";

export const AuthContest = createContext(null);
const auth = getAuth(app);

// google Provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // loading
  const [loading, setLoading] = useState(true);

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

  // Sigin With Goole
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // user Profile update
  const profileUpdate = (user, name, photoUrl) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  // Logout user
  const logOut = () => {
    signOut(auth);
  };

  // notify alert
  const notify = () => {
    if (!user) {
      Swal.fire({
        title: "Please login",
        text: "You Can See Afeter Login",
        icon: "info",
        confirmButtonText: "ok",
      });
    }
  };

  // Current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [loading]);

  // Auth Value
  const authInfo = {
    user,
    loading,
    signUpUser,
    LogIn,
    profileUpdate,
    logOut,
    googleLogin,
    notify,
  };
  return (
    <AuthContest.Provider value={authInfo}>{children}</AuthContest.Provider>
  );
};

export default AuthProvider;
