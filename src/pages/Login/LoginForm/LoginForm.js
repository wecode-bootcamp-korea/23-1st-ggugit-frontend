import React from 'react';
import CommonForm from '../../../component/Form/CommonForm';
import CommonInput from '../../../component/Input/CommonInput';
import { LOGIN_INPUT_LIST } from './LOGIN_INPUT_LIST';

import './LoginForm.scss';

class LoginForm extends React.Component {
  render() {
    const loginInpuList = LOGIN_INPUT_LIST.map(elem => {
      const { type, name, placeholder } = elem;
      return <CommonInput type={type} name={name} placeholder={placeholder} />;
    });
    return (
      <CommonForm cases="로그인">
        {loginInpuList}
        <div className="findId">
          <span>아이디 찾기</span>
          <span>비밀번호 찾기</span>
        </div>
      </CommonForm>
    );
  }
}

export default LoginForm;
