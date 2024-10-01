import { doCreateUserWithEmailAndPassword } from "../../firebase/auth"
import { useAuth } from "../contexts/authContext"
import { Navigate, useNavigate, Link } from "react-router-dom";
import { useState } from "react";


const Register = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
  
    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isRegistering){
            setIsRegistering(true)
            await doSignInWithEmailAndPassword(email, password)
        }
    }
  

    return (
        <div>
          {userLoggedIn &&(<Navigate to={'/home'} replace={true} />)}
          </div>  
    )}