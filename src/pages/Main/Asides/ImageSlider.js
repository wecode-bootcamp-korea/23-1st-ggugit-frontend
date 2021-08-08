import React from 'react';

import './ImageSlider.scss';

class ImageSlider extends React.Component {
  render() {
    const { imageList, imageCounter, imgSize, animation } = this.props;

    const _imageList = imageList.map((image, idx) => {
      const { name, url } = image;

      return (
        <div
          key={idx + 1}
          className={'imgWrap'}
          aria-hidden={idx + 1 === imageCounter ? 'false' : 'true'}
        >
          <img
            alt={name}
            src={url}
            width={imgSize.width}
            height={imgSize.height}
          />
          <div className="imgDescription">
            <span className="imgFlag">신메뉴 오픈</span>
            <span className="imgDescTitle">
              한 여름의 힐링캠핑 어쩌구 저저구 꾸깃 어쩌
            </span>
            <span className="imgDescText">꾸깃이 발행하는 웹 매거진</span>
          </div>
        </div>
      );
    });

    const {
      handleClick,
      buttonRender,
      buttonWrapClassName,
      buttonClassName,
      buttonText,
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
    console.log(imageCounter);

    return (
      <div className="imgSliderWrap">
        <div className="imgSlider" style={animation}>
          <div
            key={-1}
            className="imgWrap"
            aria-hidden={imageCounter === -1 ? 'false' : 'true'}
          >
            <img
              alt={imageList[imageList.length - 1].name}
              src={imageList[imageList.length - 1].url}
              width={imgSize.width}
              height={imgSize.height}
            />
          </div>
          {_imageList}
          <div
            key={imageList.length}
            className="imgWrap"
            aria-hidden={imageCounter === imageList.length ? 'false' : 'true'}
          >
            <img
              alt={imageList[0].name}
              src={imageList[0].url}
              width={imgSize.width}
              height={imgSize.height}
            />
          </div>
        </div>
        {button(buttonRender)}
      </div>
    );
  }
}

export default ImageSlider;
