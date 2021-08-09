import React from 'react';
import { Link } from 'react-router-dom';
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
    this.setState({ userInfo: { ...this.state.userInfo, [name]: value } });
  };

  render() {
    const { setSignUpInfo } = this;
    const { userInfo } = this.state;

    return (
      <section className="signUpContainer">
        <div className="signUpWrap">
          <SignUpForm setSignUpInfo={setSignUpInfo} userInfo={userInfo} />
          <div className="toLogin">
            <span>이미 계정이 있으신가요?</span>
            <Link to="/login">로그인하기</Link>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
