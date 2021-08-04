import React from 'react';

import './CommonInput.scss';

class CommonInput extends React.Component {
  render() {
    const { type, placeholder, handleOnChange } = this.props;

    return (
      <label className="commonLabel">
        <input
          type={type}
          placeholder={placeholder}
          onChange={handleOnChange}
        />
      </label>
    );
  }
}

export default CommonInput;
