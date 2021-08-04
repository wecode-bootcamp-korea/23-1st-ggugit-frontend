import React from 'react';
import { withRouter } from 'react-router';
// import { LOGIN_API, SIGNUP_API } from '../../config';

import './CommonForm.scss';

class CommonForm extends React.Component {
  render() {
    const { cases, handleSubmit } = this.props;
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
