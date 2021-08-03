import React from 'react';

import './CommonInput.scss';

class CommonInput extends React.Component {
  handleChange = e => {
    const { value } = e.target;
    const { name, setUserInfo } = this.props;
    setUserInfo(name, value);
  };

  render() {
    const { type, placeholder } = this.props;
    const { handleChange } = this;
    return (
      <label className="commonLabel">
        <input type={type} placeholder={placeholder} onChange={handleChange} />
      </label>
    );
  }
}

export default CommonInput;
