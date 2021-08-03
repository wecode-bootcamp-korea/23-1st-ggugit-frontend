import React from 'react';

import './CommonForm.scss';

class CommonForm extends React.Component {
  render() {
    const { cases } = this.props;
    return (
      <div className="CommonFormBlock">
        <h1 className="CommonFormTitle">{cases}</h1>
        <form className="CommonForm">
          {this.props.children}
          <button className="CommonFormButton">{cases}</button>
        </form>
      </div>
    );
  }
}

export default CommonForm;
