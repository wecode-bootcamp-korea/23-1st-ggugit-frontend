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

  ImageData = [
    'https://www.w3schools.com/howto/img_nature_wide.jpg',
    'https://www.w3schools.com/howto/img_snow_wide.jpg',
    'https://www.w3schools.com/howto/img_lights_wide.jpg',
    'https://www.w3schools.com/howto/img_mountains_wide.jpg',
  ];
  componentDidMount() {
    const newImageData = this.ImageData;
    this.setState({
      images: newImageData,
    });
  }
  handleSlider = n => {
    const { images, viewImage } = this.state;
    let currentNum = viewImage + n;
    // console.log(“버튼 누른후 이미지 번호“, viewImage)
    //예외처리
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
    const titleData = this.props.mealKitInfoList;
    // console.log(“현재 이미지 번호“, viewImage)
    return (
      <div className="wrapper">
        <button onClick={() => this.handleSlider(-1)}>
          {' '}
          <img
            src={'../../../../public/images/DetailPage/left.png'}
            alt={'left arrow'}
          />
        </button>
        <div className="imageContainer">
          <img src={images[viewImage]} alt="background" />
        </div>
        <button onClick={() => this.handleSlider(1)}>
          <img
            src={'../../../../public/images/DetailPage/right.png'}
            alt={'right arrow'}
          />
        </button>
      </div>
    );
  }
}

export default ImgAlbum;
