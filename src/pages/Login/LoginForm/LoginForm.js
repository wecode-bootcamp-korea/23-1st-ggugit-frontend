import React from 'react';
import LoginInput from './LoginInput/LoginInput';
import './LoginForm.scss';

class LoginForm extends React.Component {
  render() {
    return (
      <form className="loginForm">
        <LoginInput type="text" placeholder="E-mail 형식 GGUGIT ID" />
        <LoginInput
          type="password"
          placeholder="비밀번호는 영문, 숫자, 특수문자 혼합 8~12자"
        />
        <div className="findId">
          <span>아이디 찾기</span>
          <span>비밀번호 찾기</span>
        </div>
        <button className="loginButton">로그인</button>
      </form>
    );
  }
}

export default LoginForm;
