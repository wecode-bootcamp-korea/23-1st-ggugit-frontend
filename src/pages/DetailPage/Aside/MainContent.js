import React, { Component } from 'react';
import './MainContent.scss';

class MainContent extends Component {
  render() {
    const titleData = this.props.mealKitInfoList;
    return (
      <div className="detailDescriptionBox">
        <div classname="dishImages">
          <img
            // src={'titleData.description_image3'}
            src={titleData[0] && titleData[0].description_image[1]}
            alt="키트 상세설명을 위한 파스타 사진"
          ></img>
          {/* <img
            src={'titleData.description_image2'}
            alt="키트 상세설명을 위한 파스타 사진"
          ></img>
          <img
            src={'titleData.description_image3'}
            alt="키트 상세설명을 위한 파스타 사진"
          ></img> */}
        </div>
        <div className="subTitle">{titleData.name}</div>
        <p className="subText">{titleData.description_text}</p>
      </div>
    );
  }
}

export default MainContent;
