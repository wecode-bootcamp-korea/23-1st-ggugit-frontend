import React from 'react';
import SignUpForm from './SignUpForm/SignUpForm';

import './SignUp.scss';

class SignUp extends React.Component {
  render() {
    return (
      <section>
        <div className="loginWrap">
          <SignUpForm />
        </div>
      </section>
    );
  }
}

export default SignUp;
