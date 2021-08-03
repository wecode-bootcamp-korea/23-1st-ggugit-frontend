import React from 'react';

import './CommonInput.scss';

class CommonInput extends React.Component {
  render() {
    const { type, placeholder } = this.props;
    return (
      <label className="commonLabel">
        <input type={type} placeholder={placeholder} />
      </label>
    );
  }
}

export default CommonInput;
