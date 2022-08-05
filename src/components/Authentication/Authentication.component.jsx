
import {signInWithGooglePopup , createUserDocumentFromAuth} from '../utils/firebase/firebase.utils';
import SignUp from '../sign-up/sign-up.component';
import SignIn from '../sign-in/sign-in.component';
import './Authentication.style.scss';


const Authentication = () => {
    return(
        <div className='authentication-container'>
        <SignIn/>
        <SignUp/>
        </div>
    )

}

export default Authentication;