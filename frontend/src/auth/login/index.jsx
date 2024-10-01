import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth"
import { useAuth } from "../contexts/authContext"
import { Navigate, Link } from "react-router-dom";
// import { firestore } from "../Firebase.jsx"
// import { addDoc, collection } from "@firebase/firestore"
import { useState } from "react";


const Login = () => {
    const { userLoggedIn } = useAuth()
    const [email, setEmail] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
  
    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn){
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
        }
    }
  
    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if(!isSigningIn){
            setIsSigningIn(true)
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false)
            })
        }
    }
    return (
        <div>
          {userLoggedIn &&(<Navigate to={'/home'} replace={true} />)}
          </div>  
    )}