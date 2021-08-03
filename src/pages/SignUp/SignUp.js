import React from 'react';

import './SignUp.scss';

class SignUp extends React.Component {
  render() {
    return (
      <section>
        <div className="loginWrap">
          <h1 className="loginTitle">회원가입</h1>
          <div className="loginBlock">
            <form className="loginForm">
              <label className="loginLabel">
                <input type="text" placeholder="아이디" />
              </label>
              <label className="loginLabel">
                <input
                  type="password"
                  placeholder="비밀번호 영문, 특수문자, 숫자혼합 8~12자"
                />
              </label>
              <div className="findId">
                <span>아이디 찾기</span>
                <span>비밀번호 찾기</span>
              </div>
              <button className="loginButton">회원가입</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
