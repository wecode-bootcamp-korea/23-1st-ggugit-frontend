import React from 'react';
import { withRouter } from 'react-router';
import { LOGIN_API, SIGNUP_API } from '../../config';

import './CommonForm.scss';

class CommonForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const { cases, history, userInfo } = this.props;

    if (cases === `회원가입`) {
      const { name, loginId, loginPw, loginPwValid, phoneNumber } = userInfo;
      if (loginPwValid === loginPw) {
        fetch(SIGNUP_API, {
          method: 'POST',
          body: JSON.stringify({
            name,
            email: loginId,
            password: loginPw,
            phone_number: phoneNumber,
          }),
        })
          .then(res => res.json())
          .then(data => {
            console.log('data >>>>>>>', data);
          });
      } else {
        alert(`비밀번호를 확인해주세요`);
      }
    } else if (cases === `로그인`) {
      const { loginId, loginPw } = userInfo;
      console.log(`hi`);
      fetch(LOGIN_API, {
        method: 'POST',
        body: JSON.stringify({
          email: loginId,
          password: loginPw,
        }),
      })
        .then(res => {
          res.json();
        })
        .then(data => {
          // !data.token
          //   ? history.push(`/`)
          //   : alert(`ID, 비밀번호를 확인해주세요`);
          console.log('data >>>>>>>>', data);
        });
    }
  };

  render() {
    const { handleSubmit } = this;
    const { cases } = this.props;
    return (
      <div className="CommonFormBlock">
        <h1 className="CommonFormTitle">{cases}</h1>
        <form className="CommonForm" onSubmit={handleSubmit}>
          {this.props.children}
          <button className="CommonFormButton">{cases}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(CommonForm);
