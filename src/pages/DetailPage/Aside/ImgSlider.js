import React, { Component } from 'react';
import './ImgSlider.scss';
class ImgSlider extends Component {
  constructor() {
    super();
    this.state = {
      imageAlbum: [], //빈 배열
    };
  }
  render() {
    function selectIndex() {}
    // moveButton = n => {
    //   let currentIndex = this.state.slideIndex;
    //   let imageLength = this.state.slideImage.length;
    //   n = currentIndex + n;
    //   if (currentIndex === 0) {
    //     n = imageLength - 1;
    //   } else if (currentIndex > imageLength) {
    //     n = 0;
    //   }

    //   //  handelClick = (n) => {
    //   //    this.setState ={

    //   //    }
    // };
    const titleData = this.props.mealKitInfoList;

    return (
      <div className="SliderWrap">
        <div className="imgSlideAlbum">
          <div className="inner">
            <img
              className="slide_dish"
              src={Object.values(titleData.description_image)[0]}
              alt="키트 상세설명을 위한 파스타 사진"
              // {Object.values(titleData.description_image)[0] ? (
              //   .prevBotton = disable
              // ) : null}
              // button 자체를 불가능하게 만들기
            />
          </div>
          <div className="inner">
            <img
              className="slide_ingredients"
              src={Object.values(titleData.description_image)[1]}
              alt="키트 상세설명을 위한 재료 사진"
            />
          </div>
          <div className="inner">
            <img
              className="slide_cook"
              src={Object.values(titleData.description_image)[2]}
              alt="조리 사진"
            />
          </div>
        </div>
        <button className="prevBotton" onClick={this.selectIndex - 1}>
          <img src="../public/images/DetailPage/left.png" alt="왼쪽버튼" />
        </button>
        <button className="nextButton" onClick={this.selectIndex + 1}>
          <img src="../public/images/DetailPage/right.png" alt="왼쪽버튼" />
        </button>
      </div>
    );
  }
}

export default ImgSlider;
