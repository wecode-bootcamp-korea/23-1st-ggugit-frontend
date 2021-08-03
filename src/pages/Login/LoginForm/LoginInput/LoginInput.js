import React from 'react';
import './LoginInput.scss';

class LoginInput extends React.Component {
  render() {
    const { type, placeholder } = this.props;
    return (
      <label className="loginLabel">
        <input type={type} placeholder={placeholder} />
      </label>
    );
    // <label className="loginLabel">
    //   <input
    //     type="password"
    //     placeholder="비밀번호 영문, 특수문자, 숫자혼합 8~12자"
    //   />
    // </label>
  }
}

export default LoginInput;
