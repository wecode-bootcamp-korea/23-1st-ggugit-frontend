import React from 'react';
import CommonForm from '../../../component/Form/CommonForm';
import CommonInput from '../../../component/Input/CommonInput';
import { SIGN_UP_INPUT_LIST } from './SIGN_UP_INPUT_LIST';

import './SignUpForm.scss';

class SignUpForm extends React.Component {
  render() {
    const signUpInputList = SIGN_UP_INPUT_LIST.map(elem => {
      const { type, name, placeholder } = elem;
      return <CommonInput type={type} name={name} placeholder={placeholder} />;
    });
    return (
      <CommonForm cases="회원가입">
        {signUpInputList}
        <div className="findId">
          <span>아이디 찾기</span>
          <span>비밀번호 찾기</span>
        </div>
      </CommonForm>
    );
  }
}

export default SignUpForm;
