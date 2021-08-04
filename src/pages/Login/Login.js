import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';

import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: { loginId: '', loginPw: '' },
    };
  }

  setLoginInfo = (name, value) => {
    this.setState(prevState => {
      return {
        ...prevState,
        userInfo: { ...prevState.userInfo, [name]: value },
      };
    });
  };

  render() {
    const { setLoginInfo } = this;
    const { userInfo } = this.state;

    return (
      <section className="loginSection">
        <div className="loginWrap">
          <LoginForm setLoginInfo={setLoginInfo} userInfo={userInfo} />
          <div className="signUpBlock">
            <h2>GGUGGIT 회원이 아니신가요?</h2>
            <p>
              GGUGIT에 가입하시면 GGUGIT의 다양한 혜택 및 서비스를 이용하실 수
              있습니다.
            </p>
            <div className="signUpButton">
              <Link to="/signUp">GGUGIT 회원가입</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
