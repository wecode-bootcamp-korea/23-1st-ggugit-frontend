import React, { Component } from 'react';
import './MainContent.scss';

class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="detailDescriptionBox">
        <img
          src="/images/DetailPage/mainboxImg.jpeg"
          alt="키트 상세설명을 위한 파스타 사진"
        ></img>
        <div className="subTitle">부침개</div>
        <p className="subText">
          ‘치밥’은 양념치킨을 밥과 함께 비벼 먹는 요리를 의미하는데요. 갓 튀겨낸
          치킨과 쿡킷 비법양념으로 만든 간장치킨, 고소한 반숙 계란프라이 그리고
          아삭한 대파채 토핑까지. 다양한 재료들이 조화롭게 어우러져 맛은 물론
          식감까지 만족스러우실 수 있도록 오랜 고민 끝에 완성한 메뉴랍니다.
          치킨은 어떻게 먹어도 진리라지만 쿡킷으로 더욱 특별한 ‘치밥’을
          경험해보시는 건 어떨까요?"
        </p>
      </div>
    );
  }
}

export default MainContent;
