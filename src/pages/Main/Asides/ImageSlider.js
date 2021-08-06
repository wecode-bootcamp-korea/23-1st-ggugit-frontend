import React from 'react';

import './ImageSlider.scss';

class ImageSlider extends React.Component {
  render() {
    const { imageList, imageCounter, imgSize, animation } = this.props;

    const _imageList = imageList.map((image, idx) => {
      const { name, url } = image;

      return (
        <div
          key={idx}
          // className={idx === imageCounter ? 'imgWrap flex' : 'imgWrap none'}
          className={'imgWrap'}
          aria-hidden={idx === imageCounter ? 'false' : 'true'}
          style={animation}
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

    console.log(_imageList, imageCounter);
    return (
      <div className="imgSliderWrap">
        <div className="imgSlider">
          {/* <div
            key={-1}
            className="imgWrap"
            aria-hidden={imageCounter === -1 ? 'false' : 'true'}
            style={
              imageCounter === -1 ? { display: 'flex' } : { display: 'none' }
            }
          >
            <img
              alt={imageList[imageList.length - 1].name}
              src={imageList[imageList.length - 1].url}
              width={imgSize.width}
              height={imgSize.height}
            />
          </div> */}
          {_imageList}
          {children}
        </div>
        {button(buttonRender)}
      </div>
    );
  }
}

export default ImageSlider;
