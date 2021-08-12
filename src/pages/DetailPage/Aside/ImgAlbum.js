import React, { Component } from 'react';
import './ImgAlbum.scss';

class ImgAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      viewImage: 0,
    };
  }

  componentDidMount() {
    const titleData = this.props.mealKitInfoList;
    const imageData = Object.values(titleData.description_images);
    this.setState({
      images: imageData,
    });
  }
  handleSlider = n => {
    const { images, viewImage } = this.state;
    let currentNum = viewImage + n;
    if (currentNum === -1) {
      currentNum = images.length - 1;
    } else if (currentNum > images.length - 1) {
      currentNum = 0;
    }
    this.setState({
      viewImage: currentNum,
    });
  };
  render() {
    const { images, viewImage } = this.state;

    return (
      <div className="wrapper">
        <button onClick={() => this.handleSlider(-1)}>
          <img
            className="leftArrow"
            src={'../images/DetailPage/left.png'}
            alt={'left arrow'}
          />
        </button>
        <div className="imageContainer">
          <img className="sliderImages" src={images[viewImage]} alt="food" />
        </div>
        <button onClick={() => this.handleSlider(1)}>
          <img
            className="rightArrow"
            src={'../images/DetailPage/right.png'}
            alt={'right arrow'}
          />
        </button>
      </div>
    );
  }
}

export default ImgAlbum;
