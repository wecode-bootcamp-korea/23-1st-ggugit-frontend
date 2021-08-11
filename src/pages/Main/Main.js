import React from 'react';
import ImageSlider from './Asides/ImageSlider/ImageSlider';
import TasteRecommend from './Asides/TasteRecommend/TasteRecommend';
import OnTimeBest from './Asides/OnTimeBest/OnTimeBest';

import './Main.scss';

class Main extends React.Component {
  render() {
    console.log(`render`);
    const buttonText = { left: '<', right: '>' };
    const imgSize = { width: '1920px', height: '640px' };

    return (
      <section className="mainContainer">
        <div className="mainWrap">
          <ImageSlider
            imageList={IMAGE_LIST}
            imgSize={imgSize}
            animationTime={2000}
            description={true}
            buttonRender={true}
            buttonWrapClassName="moveButtonWrap"
            buttonClassName="moveButton"
            buttonText={buttonText}
          />
          <TasteRecommend />
          <div className="eventBannerMargin">
            <ImageSlider
              imageList={IMAGE_LIST}
              imgSize={{ width: '1920px', height: '280px' }}
              animationTime={2000}
              buttonRender={true}
              buttonWrapClassName="eventBannerButtonWrap"
              buttonClassName="eventBannerButton"
              buttonText={buttonText}
            />
          </div>
          <OnTimeBest />
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
