import SignIn from './SignIn';
import SignUp from './SignUp';

import '../styles/SignInAndSignUp.scss';

const SignInAndSignUp = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SignInAndSignUp;
