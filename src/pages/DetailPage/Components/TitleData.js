import React from 'react';
import './TitleData.scss';

class TitleData extends React.Component {
  render() {
    return (
      <div className="titleWrap">
        <div className="flagWrap">
          <span className="flagDeal">한정수량</span>
          <span className="flagNew">New</span>
        </div>
        <div className="subTitle">고소하고 크리미한 </div>
        <div className="title">*투움바 스테이크 파스타</div>
        <div className="originInfo">원산지 : 상품정보 참조</div>
      </div>
    );
  }
}

export default TitleData;
