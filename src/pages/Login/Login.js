import React from 'react';
import { Link } from 'react-router-dom';

import './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <section>
        <div className="LoginWrap">
          <h1>로그인</h1>
          <div className="loginBlock">
            <form>
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
              <button className="loginButton">로그인</button>
            </form>
          </div>
          <div className="signUpBlock">
            <h2>GGUGGIT 회원이 아니신가요?</h2>
            <p>
              GGUGIT에 가입하시면 GGUGIT의 다양한 혜택 및 서비스를 이용하실 수
              있습니다.
            </p>
            <div className="signUpButton">
              <button>
                <Link to="/signUp" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
