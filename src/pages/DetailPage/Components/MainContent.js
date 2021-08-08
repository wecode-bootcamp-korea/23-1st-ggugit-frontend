import React, { Component } from 'react';
import './MainContent.scss';

class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const titleData = this.props.mealKitInfoList;
    return (
      <div className="detailDescriptionBox">
        <img
          src="/images/DetailPage/mainboxImg.jpeg"
          alt="키트 상세설명을 위한 파스타 사진"
        ></img>
        <div className="subTitle">투움바 파스타</div>
        <p className="subText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vitae
          facere ipsam adipisci error maiores voluptatibus iure quidem, dolorum,
          soluta tempore, nemo minus culpa illo! Soluta, quisquam sequi?
          Tempora, ad.
        </p>
      </div>
    );
  }
}

export default MainContent;
