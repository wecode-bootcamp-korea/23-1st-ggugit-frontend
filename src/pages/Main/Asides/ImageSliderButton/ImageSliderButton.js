import React from 'react';

class ImageSliderButton extends React.Component {
  render() {
    const {
      buttonRender,
      buttonWrapClassName,
      buttonClassName,
      buttonText,
      handleClick,
    } = this.props;
    if (buttonRender) {
      return (
        <div className={buttonWrapClassName}>
          <button className={buttonClassName} onClick={handleClick}>
            {buttonText.left}
          </button>
          <button className={buttonClassName} onClick={handleClick}>
            {buttonText.right}
          </button>
        </div>
      );
    }
  }
}

export default ImageSliderButton;
