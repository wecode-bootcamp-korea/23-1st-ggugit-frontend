import React from 'react';
import CommonForm from '../../../component/Form/CommonForm';
import CommonInput from '../../../component/Input/CommonInput';
import { SIGN_UP_INPUT_LIST } from './SIGN_UP_INPUT_LIST';
import { SIGNUP_API } from '../../../config';

import './SignUpForm.scss';

class SignUpForm extends React.Component {
  signUpSubmit = e => {
    e.preventDefault();
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
        .then(() => {
          alert(`회원가입 성공! 열심히 구매해주세요.`);
        });
    } else {
      alert(`비밀번호를 확인해주세요`);
    }
  };

  render() {
    const { signUpSubmit } = this;
    const { setSignUpInfo, userInfo } = this.props;
    const signUpInputList = SIGN_UP_INPUT_LIST.map(({ id, name, ...rest }) => {
      return (
        <CommonInput
          key={id}
          name={name}
          {...rest}
          handleOnChange={e => {
            setSignUpInfo(name, e.target.value);
          }}
        />
      );
    });

    return (
      <CommonForm
        type="signUp"
        cases="회원가입"
        userInfo={userInfo}
        handleSubmit={signUpSubmit}
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
