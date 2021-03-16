import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch(error) {
            console.error(error);
        }

        this.setState({ email: '', password: ''});
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value }) // By doing this [name], we are dynamically setting our property value
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        handleChange={this.handleChange} 
                        name="email" 
                        value={this.state.email} 
                        label="email" 
                        required 
                    />
                    <FormInput 
                        type="password"
                        handleChange={this.handleChange} 
                        name="password" 
                        value={this.state.password} 
                        label="password"
                        required 
                    />

                    <div className="buttons">
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div> 
                </form>
            </div>
        )
    }
}

export default SignIn; 