import React from 'react';
import ImageSlider from './Asides/ImageSlider';

import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      imageCounter: 0,
    };
  }

  setImageCounter = (e, arr) => {
    this.setState(prevState => {
      const { imageCounter } = prevState;
      const newCounter = { ...prevState };

      if (e.target.innerText.includes(`<`) && imageCounter > 0) {
        newCounter.imageCounter = imageCounter - 1;
      } else if (e.target.innerText.includes(`<`) && imageCounter === 0) {
        newCounter.imageCounter = imageCounter + (arr.length - 1);
      }

      if (e.target.innerText.includes(`>`) && imageCounter < arr.length - 1) {
        newCounter.imageCounter = imageCounter + 1;
      } else if (e.target.innerText.includes(`>`) && imageCounter === 5) {
        newCounter.imageCounter = imageCounter - (arr.length - 1);
      }

      return newCounter;
    });
  };

  // resetImageSlide = (arr, imageCounter) => {
  //   if (imageCounter < 0) {
  //     this.setState({ imageCounter: arr.length - 1 });
  //   } else if (imageCounter > arr.length - 1) {
  //     this.setState({ imageCounter: 0 });
  //   }
  // };

  render() {
    const { setImageCounter } = this;
    const { imageCounter } = this.state;

    const buttonText = { left: '<', right: '>' };
    const imgSize = { width: '1920px', height: '640px' };

    return (
      <section className="mainContainer">
        <div className="mainWrap">
          <ImageSlider
            imageList={IMAGE_LIST}
            imageCounter={imageCounter}
            handleClick={e => {
              console.log(this.state.imageCounter);
              setImageCounter(e, IMAGE_LIST);
              // resetImageSlide(IMAGE_LIST, imageCounter);
            }}
            buttonRender={true}
            buttonWrapClassName="moveButtonWrap"
            buttonClassName="moveButton"
            buttonText={buttonText}
            imgSize={imgSize}
          >
            <div className="imgDescription">
              <span className="imgFlag">신메뉴 오픈</span>
              <span className="imgDescTitle">
                한 여름의 힐링캠핑 어쩌구 저저구 꾸깃 어쩌
              </span>
              <span className="imgDescText">꾸깃이 발행하는 웹 매거진</span>
            </div>
          </ImageSlider>
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
                    <span className="productServing">1인분</span>
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

const IMAGE_LIST = [
  { name: 'stake', url: '/images/Main/stake.jpg' },
  { name: 'stake', url: '/images/Main/food2.jpg' },
  { name: 'stake', url: '/images/Main/food3.jpg' },
  { name: 'stake', url: '/images/Main/stake.jpg' },
  { name: 'stake', url: '/images/Main/food2.jpg' },
  { name: 'stake', url: '/images/Main/food3.jpg' },
];
