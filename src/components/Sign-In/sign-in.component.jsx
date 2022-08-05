import { async } from "@firebase/util";
import { useState } from "react";


import { createAuthUserWithEmailAndPassword ,createUserDocumentFromAuth , signInWithGooglePopup , SignInAuthUserWithEmailAndPassword} from "../utils/firebase/firebase.utils";

import Button from "../button/button.component";

import FormInput from "../form-input/form-input.component";
import './sign-in.style.scss';

const defaultFormField = {
    email : '',
    password : ''
};

const logGoogleUser = async () => {
    await signInWithGooglePopup();
    // console.log(response);
};

const SignIn = () => {
    const [formFields,setFormField] = useState(defaultFormField);
    const {displayName,email,password,confirmPassword} = formFields;
    

    
    const handleChange = (event) => {
                const {name , value} = event.target;
                setFormField({...formFields , [name] : value});
};

const resetFormFields = () => {
    setFormField(defaultFormField);
};

const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const {user} = await SignInAuthUserWithEmailAndPassword(email,password);
        resetFormFields();
    } catch (error) {
        switch (error.code) {
            case 'auth/wrong-password':
                alert('incorrect password for email');
                break;
        case 'auth/user-not-found':
                alert('no user associated with this email');
                break;
        default:
                break;
        }
    }

};

    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
               
                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />
            
                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />

                <div className="buttons-container">
                <Button type="submit">SIGN IN</Button>
                <Button buttonType="google" onclick={logGoogleUser}>GOOGLE SIGN IN</Button>
                </div>

            </form>
        </div>
    )
};

export default SignIn;