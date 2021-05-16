import { Component } from 'react';
import FormInput from './FormInput';

import '../styles/SignIn.scss';
import CustomButton from './CustomButton';
import { auth, signInWithGoogle } from './../firebase/firebase.utils';

export class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: '',
            });
        } catch (error) {
            console.log(`error while sign in with email and password: `, error);
        }
    };

    render() {
        const { email, password } = this.state;
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        required
                        label='Email'
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        required
                        label='Password'
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
