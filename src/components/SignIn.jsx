import { Component } from 'react';
import FormInput from './FormInput';

import '../styles/SignIn.scss';

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

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: '',
        });
    };

    render() {
        const { email, password } = this.state;
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
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

                    <input type='submit' value='Submit Form' />
                </form>
            </div>
        );
    }
}

export default SignIn;
