import React from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from '../custom-buttons/custom-buttons';
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your email and password </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={email}
            type="email"
            required
            handleChange={this.handleChange}
            label="Email"
          />

          <FormInput
            name="password"
            value={password}
            type="password"
            required
            handleChange={this.handleChange}
            label="Password"
          />

          <div className='buttons'>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn >Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
