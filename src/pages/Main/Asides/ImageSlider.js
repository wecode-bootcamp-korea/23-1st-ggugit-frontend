import React from 'react';

import './ImageSlider.scss';

class ImageSlider extends React.Component {
  render() {
    const { imageList, imageCounter, imgSize } = this.props;

    const _imageList = imageList.map((image, idx) => {
      const { name, url } = image;

      return (
        <div
          key={idx}
          className="imgWrap"
          aria-hidden={
            idx === imageCounter - 1 ||
            idx === imageCounter ||
            idx === imageCounter + 1
              ? 'false'
              : 'true'
          }
          style={
            idx === imageCounter - 1 ||
            idx === imageCounter ||
            idx === imageCounter + 1
              ? { display: 'flex' }
              : { display: 'none' }
          }
        >
          <img
            alt={name}
            src={url}
            width={imgSize.width}
            height={imgSize.height}
          />
        </div>
      );
    });

    const {
      handleClick,
      buttonRender,
      buttonWrapClassName,
      buttonClassName,
      buttonText,
      children,
    } = this.props;

    const button = buttonRender => {
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
    };

    let tempStyle = {};
    let imgWidth = parseInt(imgSize.width, 10);

    if (imageList.length % 2 === 0) {
      tempStyle = {
        transition: 'all 500ms cubic-bezier(0, 0.71, 0.58, 1)',
        transform: `translateX(${
          (imageList.length / 2 - 0.5 + imageCounter) * imgWidth
        }px)`,
      };
    } else {
      tempStyle = {
        transition: 'all 500ms cubic-bezier(0, 0.71, 0.58, 1)',
        transform: `translateX(${((imageList.length - 1) / 2) * imgWidth}px)`,
      };
    }

    console.log(_imageList);
    return (
      <div className="imgSliderWrap">
        <div className="imgSlider" style={tempStyle}>
          {_imageList}
          {children}
        </div>
        {button(buttonRender)}
      </div>
    );
  }
}

export default ImageSlider;
