import React from 'react';
import ImageSliderButton from './ImageSliderButton/ImageSliderButton';

import './ImageSlider.scss';

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCounter: 0,
      animation: {
        transform: `translateX(${-parseInt(this.props.imgSize.width, 10)}px)`,
        transition: '',
      },
    };
    this.isMoving = React.createRef();
  }

  setImageCounter = e => {
    if (this.isMoving.current) return;

    const { imageList, animationTime, imgSize, buttonText } = this.props;
    this.isMoving.current = true;

    setTimeout(() => {
      this.isMoving.current = false;
    }, animationTime);

    this.setState(prevState => {
      const { imageCounter } = prevState;
      const newState = { ...prevState };

      let width = parseInt(imgSize.width, 10);
      let slideX = 0;

      if (e.target.innerText.includes(buttonText.left) && imageCounter > -1) {
        newState.imageCounter = imageCounter - 1;
        slideX =
          -(width * (imageList.length + 1)) +
          (imageList.length - imageCounter + 1) * width;
      }

      if (
        e.target.innerText.includes(buttonText.right) &&
        imageCounter <= imageList.length
      ) {
        newState.imageCounter = imageCounter + 1;
        slideX = -width - (imageCounter + 1) * width;
      }

      let transition = `all ${animationTime}ms cubic-bezier(0, 0.71, 0.58, 1)`;
      let transform = `translateX(${slideX}px)`;

      return {
        ...newState,
        animation: { transform, transition },
      };
    });
  };

  componentDidUpdate() {
    const { imageCounter } = this.state;
    const { imageList, imgSize, animationTime } = this.props;
    let transition = '0ms';
    let width = parseInt(imgSize.width, 10);

    if (imageCounter === -1) {
      setTimeout(() => {
        this.setState(prevState => {
          const newState = { ...prevState };

          let xLocation = -(width * imageList.length);
          let transform = `translateX(${xLocation}px)`;
          let newImageCounter = imageCounter + imageList.length;

          return {
            ...newState,
            imageCounter: newImageCounter,
            animation: { transform, transition },
          };
        });
      }, animationTime);
    }

    if (imageCounter === imageList.length) {
      setTimeout(() => {
        this.setState(prevState => {
          const newState = { ...prevState };

          let xLocation = -width;
          let transform = `translateX(${xLocation}px)`;
          let newImageCounter = 0;

          return {
            ...newState,
            imageCounter: newImageCounter,
            animation: { transform, transition },
          };
        });
      }, animationTime);
    }
  }

  render() {
    const { setImageCounter } = this;
    const { animation, imageCounter } = this.state;
    const { imageList, imgSize, description } = this.props;

    const { buttonRender, buttonWrapClassName, buttonClassName, buttonText } =
      this.props;

    const imageDescription = description ? (
      <div className="imgDescription">
        <span className="imgFlag">????????? ??????</span>
        <span className="imgDescTitle">
          ??? ????????? ???????????? ????????? ????????? ?????? ??????
        </span>
        <span className="imgDescText">????????? ???????????? ??? ?????????</span>
      </div>
    ) : null;

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
          {imageDescription}
        </div>
      );
    });

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
        {buttonRender && (
          <ImageSliderButton
            buttonRender={buttonRender}
            buttonWrapClassName={buttonWrapClassName}
            buttonClassName={buttonClassName}
            buttonText={buttonText}
            handleClick={setImageCounter}
          />
        )}
      </div>
    );
  }
}

export default ImageSlider;
