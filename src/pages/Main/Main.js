import React from 'react';

import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <section className="mainContainer">
        <div className="mainWrap">
          <div className="imgSlider">
            <img alt="stake" src="/images/Main/stake.jpg" />
            <div className="imgDescription">
              <span className="imgFlag">신메뉴 오픈</span>
              <span className="imgDescTitle">
                한 여름의 힐링캠핑 어쩌구 저저구 꾸깃 어쩌
              </span>
              <span className="imgDescText">꾸깃이 발행하는 웹 매거진</span>
            </div>
            <button className="moveButton leftButton">{`<`}</button>
            <button className="moveButton rightButton">{`>`}</button>
          </div>
          <div className="tasteRecommend"></div>
          <div className="imgSlider"></div>
          <div className="onTimeBest"></div>
          <div className="onTimeReview"></div>
          <div className="productWrap">
            <div className="pdLeftWrap"></div>
            <div className="pdRightWrap"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Main;
