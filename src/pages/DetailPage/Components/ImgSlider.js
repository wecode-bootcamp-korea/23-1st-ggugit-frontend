import React, { Component } from 'react';
import './ImgSlider.scss';

class ImgSlider extends Component {
  render() {
    const dishImg = this.props.mealKitInfoList;

    return (
      <div className="imgDetailWrap">
        <div className="imgSlideAlbum">
          <img src={dishImg.image_url} alt="파스타" />
        </div>
      </div>
    );
  }
}
export default ImgSlider;
