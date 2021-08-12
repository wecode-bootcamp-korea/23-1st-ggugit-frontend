import React from 'react';
import ImageSlider from './Asides/ImageSlider/ImageSlider';
import TasteRecommend from './Asides/TasteRecommend/TasteRecommend';
import OnTimeBest from './Asides/OnTimeBest/OnTimeBest';
import SearchBar from './Asides/SearchBar/SearchBar';
import Timer from './Asides/Timer/Timer';

import { MAIN_API } from '../../config';

import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch(`${MAIN_API}`)
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => {
          let newTopImage = data.result1.map(elem => {
            return { name: `상단배너`, url: elem };
          });
          let newBottomImage = data.result2.map(elem => {
            return { name: `하단배너`, url: elem };
          });
          return {
            ...prevState,
            topImageList: newTopImage,
            bottomImageList: newBottomImage,
          };
        });
      });
  }
  render() {
    const { topImageList, bottomImageList } = this.state;

    return (
      <section className="mainContainer">
        <div className="mainWrap">
          {topImageList && (
            <ImageSlider
              imageList={topImageList}
              imgSize={imgSize}
              animationTime={2000}
              description={true}
              buttonRender={true}
              buttonWrapClassName="moveButtonWrap"
              buttonClassName="moveButton"
              buttonText={buttonText}
              imageOnClick={() => {
                return false;
              }}
            />
          )}
          <SearchBar />
          <TasteRecommend />
          <div className="eventBannerMargin">
            {bottomImageList && (
              <ImageSlider
                imageList={bottomImageList}
                imgSize={bottomImgSize}
                animationTime={2000}
                buttonRender={true}
                buttonWrapClassName="eventBannerButtonWrap"
                buttonClassName="eventBannerButton"
                buttonText={buttonText}
                imageOnClick={() => {
                  return false;
                }}
              />
            )}
          </div>
          <OnTimeBest />
          <div className="onTimeReview"></div>
          <div className="productWrap">
            <div className="pdLeftWrap"></div>
            <div className="pdRightWrap"></div>
          </div>
        </div>
        <div className="mainTimer"></div>
        <Timer />
      </section>
    );
  }
}

export default Main;

const imgSize = { width: '1920px', height: '640px' };
const bottomImgSize = { width: '1920px', height: '280px' };
const buttonText = { left: '<', right: '>' };
