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
          <div className="tasteRecommendWrap">
            <div className="tasteListBlock">
              <button>
                이국적인맛 <i className="fas fa-chevron-down"></i>
              </button>
              <span>메뉴</span>
              <span>추천드려요</span>
              <p>
                로그인하시면 고객님의 구매내역과 맛취향에 따라 딱맞는 맛있는
                메뉴를 추천드려요
              </p>
            </div>
            <div className="imgSlider">
              <div className="imgBlock">
                <img
                  alt="stake"
                  src="/images/Main/stake.jpg"
                  width="520px"
                  height="520px"
                />
                <div className="recommendImgDescription">
                  <div className="productTitle">
                    <span>쩌는 스테끼</span>
                  </div>
                  <div className="productDescription">
                    <span className="productPrice">10억원</span>
                    <span>1인분</span>
                    <i className="fas fa-cart-plus"></i>
                  </div>
                </div>
              </div>
              <div className="shader"></div>
            </div>
          </div>
          <div className="imgSlider"></div>
          <div className="onTimeBest"></div>
          <div className="onTimeReview"></div>
          <div className="productWrap">
            <div className="pdLeftWrap"></div>
            <div className="pdRightWrap"></div>
          </div>
        </div>
        <div className="mainTimer"></div>
      </section>
    );
  }
}

export default Main;
