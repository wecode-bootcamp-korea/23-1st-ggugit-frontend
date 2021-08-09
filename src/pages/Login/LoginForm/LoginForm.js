import React from 'react';
import { withRouter } from 'react-router-dom';
import CommonForm from '../../../component/Form/CommonForm';
import CommonInput from '../../../component/Input/CommonInput';
import { LOGIN_INPUT_LIST } from './LOGIN_INPUT_LIST';
import { LOGIN_API } from '../../../config';

import './LoginForm.scss';

class LoginForm extends React.Component {
  loginSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    const { loginId, loginPw } = this.props.userInfo;

    fetch(LOGIN_API, {
      method: 'POST',
      body: JSON.stringify({
        email: loginId,
        password: loginPw,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          history.push(`/`);
          localStorage.setItem(TOKEN_KEY, data.token);
        } else {
          alert(`ID, 비밀번호를 확인해주세요`);
        }
      });
  };

  render() {
    const loginInpuList = LOGIN_INPUT_LIST.map(({ id, name, ...rest }) => {
      const { setLoginInfo } = this.props;

      return (
        <CommonInput
          key={id}
          name={name}
          {...rest}
          handleOnChange={e => {
            setLoginInfo(name, e.target.value);
          }}
        />
      );
    });

    const { loginSubmit } = this;
    const { userInfo } = this.props;

    return (
      <CommonForm
        type="signIn"
        cases="로그인"
        userInfo={userInfo}
        handleSubmit={loginSubmit}
      >
        {loginInpuList}
        <div className="findId">
          <span>아이디 찾기</span>
          <span>비밀번호 찾기</span>
        </div>
      </CommonForm>
    );
  }
}

const TOKEN_KEY = 'loginToken';

export default withRouter(LoginForm);
