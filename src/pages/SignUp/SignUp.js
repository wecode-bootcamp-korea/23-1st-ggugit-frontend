import React from 'react';
import SignUpForm from './SignUpForm/SignUpForm';

import './SignUp.scss';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: '',
        loginId: '',
        loginPw: '',
        loginPwValid: '',
        phoneNumber: '',
        birthDay: ``,
      },
    };
  }

  setSignUpInfo = (name, value) => {
    this.setState(prevState => {
      return {
        ...prevState,
        userInfo: { ...prevState.userInfo, [name]: value },
      };
    });
  };

  render() {
    const { setSignUpInfo } = this;
    const { userInfo } = this.state;

    return (
      <section>
        <div className="loginWrap">
          <SignUpForm setSignUpInfo={setSignUpInfo} userInfo={userInfo} />
        </div>
      </section>
    );
  }
}

export default SignUp;
