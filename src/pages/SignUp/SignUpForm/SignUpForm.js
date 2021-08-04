import React from 'react';
import CommonForm from '../../../component/Form/CommonForm';
import CommonInput from '../../../component/Input/CommonInput';
import { SIGN_UP_INPUT_LIST } from './SIGN_UP_INPUT_LIST';
import { SIGNUP_API } from '../../../config';

import './SignUpForm.scss';

class SignUpForm extends React.Component {
  signUpSubmit = () => {
    const { name, loginId, loginPw, loginPwValid, phoneNumber, birthDay } =
      this.props.userInfo;

    if (loginPwValid === loginPw) {
      fetch(SIGNUP_API, {
        method: 'POST',
        body: JSON.stringify({
          name,
          email: loginId,
          password: loginPw,
          phone_number: phoneNumber,
          birthday: birthDay,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log('data >>>>>>>', data);
        });
    } else {
      alert(`비밀번호를 확인해주세요`);
    }
  };

  render() {
    const { signUpSubmit } = this;
    const { setSignUpInfo, userInfo } = this.props;
    const signUpInputList = SIGN_UP_INPUT_LIST.map(
      ({ id, type, name, placeholder }) => {
        return (
          <CommonInput
            key={id}
            type={type}
            name={name}
            placeholder={placeholder}
            handleOnChange={e => {
              setSignUpInfo(name, e.target.value);
            }}
          />
        );
      }
    );

    return (
      <CommonForm
        type="signUp"
        cases="회원가입"
        userInfo={userInfo}
        handleSubmit={e => {
          e.preventDefault();
          signUpSubmit();
        }}
      >
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
