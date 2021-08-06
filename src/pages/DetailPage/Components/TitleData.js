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
        <h1 className="subTitle">고소하고 크리미한 </h1>
        <h1 className="title">*투움바 스테이크 파스타 </h1>
        {/* <originInfo> {this.props.children} </originInfo> */}

        {this.props.children}
      </div>
    );
  }
}

export default TitleData;
