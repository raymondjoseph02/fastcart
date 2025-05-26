import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/fireBaseConfig";
import React from "react";
export const signUp = async (email: string, password: string, setToken: React.Dispatch<string>) => {
    console.log("Signing up with email:", email, " and password:", password); 
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (!userCredential.user) {
      throw new Error("User credential is null")}
      const token = await userCredential.user.getIdToken();
      setToken(token)
      alert("User signed up successfully");
      console.log("User signed up successfully:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
}