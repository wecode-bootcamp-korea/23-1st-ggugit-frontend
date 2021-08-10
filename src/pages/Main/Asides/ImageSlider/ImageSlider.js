import React from 'react';
import ImageSliderButton from '../ImageSliderButton/ImageSliderButton';
import RealImageRender from '../RealImageRender/RealImageRender';

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
  }

  isMoving = React.createRef();

  setImageCounter = e => {
    if (this.isMoving === true) return;

    const { imageList, animationTime, imgSize, buttonText } = this.props;
    this.isMoving = true;

    setTimeout(() => {
      this.isMoving = false;
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
          let xLocation = -(width * imageList.length);
          let transform = `translateX(${xLocation}px)`;
          let newImageCounter = imageCounter + imageList.length;

          return {
            ...prevState,
            imageCounter: newImageCounter,
            animation: { transform, transition },
          };
        });
      }, animationTime);
    }

    if (imageCounter === imageList.length) {
      setTimeout(() => {
        this.setState(prevState => {
          let xLocation = -width;
          let transform = `translateX(${xLocation}px)`;
          let newImageCounter = 0;

          return {
            ...prevState,
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

    return (
      <div className="imgSliderWrap">
        <div className="imgSlider" style={animation}>
          {/* FakeImage left */}
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
          <RealImageRender
            imageList={imageList}
            imageCounter={imageCounter}
            imgSize={imgSize}
            description={description}
          />
          {/* FakeImage right */}
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
