// import { auth } from "./firebase";
// import {
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   sendEmailVerification,
//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   updatePassword,
// } from "firebase/auth";

// export const doCreateUserWithEmailAndPassword = async (email, password) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// };

// export const doSignInWithEmailAndPassword = (email, password) => {
//   return signInWithEmailAndPassword(auth, email, password);
// };

// export const doSignInWithGoogle = async () => {
//   const provider = new GoogleAuthProvider();
//   const result = await signInWithPopup(auth, provider);
//   // result.user
//   return result;
// };

// export const doSignOut = () => {
//   return auth.signOut();
// };

// export const doPasswordReset = (email) => {
//   return sendPasswordResetEmail(auth, email);
// };

// export const doPasswordChange = (password) => {
//   return updatePassword(auth.currentUser, password);
// };

// export const doSendEmailVerification = () => {
//     return sendEmailVerification(auth.currentUser, {
//         url: `${window.location.origin}/home`,
//     })
// }



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


// Create User with Email and Password
// export const doCreateUserWithEmailAndPassword = async (email, password) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     return userCredential;
//   } catch (error) {
//     console.error("Error creating user:", error.message);
//     throw error;  // Optional: Propagate the error for further handling in UI
//   }
// };

// export const doCreateUserWithEmailAndPassword = async (email, password) => {
//     try {
//       // Create user with email and password
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     //   const user = userCredential.user;
  
//       // Update user profile to include the username (displayName)
//     //  if (user){
//     //     await updateProfile(user, {
//     //     displayName: username,
//     //   });
//     //  }
           
  
//     //   return userCredential;  // Return user credential after successful signup and profile update
//     } catch (error) {
//       console.error("Error creating user:", error.message);
//       throw error;  // Propagate the error for further handling in the UI
//     }
//   };

export const doCreateUserWithEmailAndPassword = async (email, password, username) => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Update user profile to include the username (displayName)
      if (user) {
        await updateProfile(user, {
          displayName: username,  // Set the display name as the username
        });
      }
  
      return userCredential;  // Return the user credentials
    } catch (error) {
      console.error("Error creating user:", error.message);
      throw error;  // Propagate the error for handling in the UI
    }
  };

// Sign In with Email and Password
export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    console.error("Error signing in:", error.message);
    throw error;
  }
};

// Sign In with Google
export const doSignInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;  // result.user contains the authenticated user
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