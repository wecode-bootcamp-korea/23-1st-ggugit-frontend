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
  }
}

export default LoginInput;
