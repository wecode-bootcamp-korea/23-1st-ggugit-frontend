import React, { Component } from 'react';
import './MainContent.scss';

class MainContent extends Component {
  render() {
    const titleData = this.props.mealKitInfoList;
    // const slideAlbum = Object.values(titleData.description_images);
    return (
      <div className="detailDescriptionBox">
        <div className="subTitle">{titleData.name}</div>
        <p className="subText">{titleData.description_text}</p>
        <div className="dishImages">
          <img
            className="dish"
            src={Object.values(titleData.description_images)[0]}
            alt="키트 상세설명을 위한 파스타 사진"
          ></img>

          {/* //이 사진을 맵을 사용하여 가져오고 싶음 && ImgAlbum 도 함께 수정! */}
          <img
            className="ingredients"
            src={Object.values(titleData.description_images)[1]}
            alt="키트 상세설명을 위한 재료 사진"
          ></img>
          <img
            className="cook"
            src={Object.values(titleData.description_images)[2]}
            alt="조리 사진"
          ></img>
        </div>
      </div>
    );
  }
}

export default MainContent;
