import React from 'react';
import './TitleData.scss';

class TitleData extends React.Component {
  render() {
    const {} = this.props;
    return (
      <div className="titleWrap">
        <div className="flagWrap">
          <span className="flagDeal">한정수량</span>
          <span className="flagNew">New</span>
        </div>
        <h1 className="subTitle">고소하고 크리미한 </h1>
        <h1 className="title">*투움바 스테이크 파스타 </h1>
        <h2 className="originInfo">원산지 : 상품정보 참조</h2>
      </div>
    );
  }
}

export default TitleData;
