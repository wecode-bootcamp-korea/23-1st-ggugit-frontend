import React, { Component } from 'react';
import './MainContent.scss';

class MainContent extends Component {
  render() {
    const titleData = this.props.mealKitInfoList;
    return (
      <div className="detailDescriptionBox">
        <img
          src={'titleData.description_image()'}
          alt="키트 상세설명을 위한 파스타 사진"
        ></img>
        <div className="subTitle">{titleData.name}</div>
        <p className="subText">{titleData.description_text}</p>
      </div>
    );
  }
}

export default MainContent;
