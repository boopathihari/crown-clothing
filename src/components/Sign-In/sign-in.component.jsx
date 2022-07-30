
import {signInWithGooglePopup , createUserDocumentFromAuth} from '../../components/utils/firebase/firebase.utils';
import SignUp from '../sign-up/sign-up.component';



const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
        // console.log(response);
    }

    return(
        <div>
        <h1>Hi this is Sign in page</h1>
        <button onClick={logGoogleUser}>Sign in with Google</button>
        <SignUp/>
        </div>
    )

}

export default SignIn;