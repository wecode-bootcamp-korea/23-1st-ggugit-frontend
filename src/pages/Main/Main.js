import React from 'react';
import ImageSlider from './Asides/ImageSlider';

import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      imageCounter: 0,
      animation: {
        transform: 'translateX(+4800px)',
        transition: '',
      },
      animationInfo: {
        slideX: 0,
        time: `2000ms`,
      },
    };
  }

  setImageCounter = (e, arr) => {
    this.setState(prevState => {
      const { imageCounter } = prevState;
      const newState = { ...prevState };

      let slideX = 0;
      let time = 2000 + `ms`;
      let transition = `all ${time} cubic-bezier(0, 0.71, 0.58, 1)`;

      if (e.target.innerText.includes('<') && imageCounter > -1) {
        newState.imageCounter = imageCounter - 1;
        slideX = -6720 + (arr.length - imageCounter + 1) * 1920;

        return {
          ...newState,
          animation: {
            transform: `translateX(${slideX + 'px'})`,
            transition,
          },
          animationInfo: {
            slideX,
            time,
          },
        };
      }

      if (e.target.innerText.includes('>') && imageCounter < arr.length) {
        newState.imageCounter = imageCounter + 1;
        slideX = 4800 - (imageCounter + 1) * 1920;

        return {
          ...newState,
          animation: {
            ...newState.animation,
            transform: `translateX(${slideX + 'px'})`,
            transition,
          },
          animationInfo: {
            slideX,
            time,
          },
        };
      }

      return newState;
    });
  };

  componentDidUpdate() {
    const { imageCounter, animation, animationInfo } = this.state;
    if (imageCounter === -1) {
      setTimeout(() => {
        this.setState(prevState => {
          let transition = '0ms';
          let slideX = -4800;
          let transform = `translateX(${slideX}px)`;
          let newImageCounter = imageCounter + IMAGE_LIST.length;
          console.log(slideX);

          return {
            ...prevState,
            imageCounter: newImageCounter,
            animation: { ...animation, transform, transition },
            animationInfo: { ...animationInfo, slideX },
          };
        });
      }, 2000);
    }
    if (imageCounter === 6) {
      setTimeout(() => {
        this.setState(prevState => {
          let transition = '0ms';
          let slideX = 4800;
          let transform = `translateX(${slideX}px)`;
          let newImageCounter = 0;
          console.log(slideX);

          return {
            ...prevState,
            imageCounter: newImageCounter,
            animation: { ...animation, transform, transition },
            animationInfo: { ...animationInfo, slideX },
          };
        });
      }, 2000);
    }
  }

  render() {
    const { setImageCounter } = this;
    const { imageCounter } = this.state;
    const { animation } = this.state;

    const buttonText = { left: '<', right: '>' };
    const imgSize = { width: '1920px', height: '640px' };

    console.log(this.state);
    return (
      <section className="mainContainer">
        <div className="mainWrap">
          <ImageSlider
            imageList={IMAGE_LIST}
            imageCounter={imageCounter}
            handleClick={e => {
              setImageCounter(e, IMAGE_LIST);
            }}
            buttonRender={true}
            buttonWrapClassName="moveButtonWrap"
            buttonClassName="moveButton"
            buttonText={buttonText}
            imgSize={imgSize}
            animation={animation}
          ></ImageSlider>
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
