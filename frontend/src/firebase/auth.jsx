import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";


export const doCreateUserWithEmailAndPassword = async (email, password, username) => {
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      if (user) {
        await updateProfile(user, {
          displayName: username, 
        });
      }
  
      return userCredential; 
    } catch (error) {
      console.error("Error creating user:", error.message);
      throw error;  
    }
  };


export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    console.error("Error signing in:", error.message);
    throw error;
  }
};


export const doSignInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;  
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
    throw error;
  }
};

// Sign Out
export const doSignOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error("Error signing out:", error.message);
    throw error;
  }
};

// Send Password Reset Email
export const doPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error("Error sending password reset email:", error.message);
    throw error;
  }
};

// Change User Password
export const doPasswordChange = async (password) => {
  if (!auth.currentUser) {
    throw new Error("No authenticated user found");
  }
  try {
    await updatePassword(auth.currentUser, password);
  } catch (error) {
    console.error("Error updating password:", error.message);
    throw error;
  }
};

// Send Email Verification
export const doSendEmailVerification = async () => {
  if (!auth.currentUser) {
    throw new Error("No authenticated user to send verification email");
  }
  try {
    await sendEmailVerification(auth.currentUser, {
      url: `${window.location.origin}/home`,
    });
  } catch (error) {
    console.error("Error sending email verification:", error.message);
    throw error;
  }
};