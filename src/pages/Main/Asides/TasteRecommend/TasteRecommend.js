import React from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import TasteModal from './TasteModal/TasteModal';
import { PRODUCTS_API, TASTE_API } from '../../../../config';

import './TasteRecommend.scss';

class TasteRecommend extends React.Component {
  constructor() {
    super();
    this.state = {
      modalToggle: false,
      recommendTaste: '',
      tasteList: '',
      imageList: '',
    };
  }

  componentDidMount() {
    fetch(TASTE_API)
      .then(res => res.json())
      .then(data => {
        const randNum = Math.floor(Math.random() * data.results.length);
        let tasteList = [];
        tasteList = data;

        fetch(
          `${PRODUCTS_API}?theme=taste&number=${tasteList.results[randNum].id}`
        )
          .then(res => res.json())
          .then(data => {
            let newList = data.results.map(food => ({
              ...food,
              url: food.image_url.toString(),
            }));

            this.setState(prevState => {
              return {
                ...prevState,
                imageList: newList,
                tasteList,
                recommendTaste: tasteList.results[randNum].taste,
              };
            });
          });
      });
  }

  handleModalClick = name => {
    fetch(`${PRODUCTS_API}?theme=taste&number=${name}`)
      .then(res => res.json())
      .then(data => {
        let newList = data.results.map(food => {
          return { ...food, url: food.image_url.toString() };
        });
        this.setState(prevState => {
          return {
            ...prevState,
            imageList: newList,
            recommendTaste: newList[0].taste,
          };
        });
      });
  };

  render() {
    const { handleModalClick } = this;
    const { tasteList, imageList, recommendTaste } = this.state;

    return tasteList && imageList ? (
      <div className="tasteRecommendWrap">
        <div className="tasteListBlock">
          <button
            onClick={() => {
              this.setState({ modalToggle: !this.state.modalToggle });
            }}
          >
            {recommendTaste}
            <i className="fas fa-chevron-down"></i>
          </button>
          {this.state.modalToggle && (
            <TasteModal
              tasteList={tasteList.results}
              handleModalClick={handleModalClick}
            />
          )}
          <span>메뉴</span>
          <span>추천드려요</span>
          <p>
            로그인하시면 고객님의 구매내역과 맛취향에 따라 딱맞는 맛있는 메뉴를
            추천드려요
          </p>
        </div>
        <div className="tasteListImgBlock">
          <ImageSlider
            imageList={imageList}
            imgSize={{ width: '520px', height: '520px' }}
            animationTime={1000}
            buttonRender={true}
            buttonWrapClassName="tasteBlockMoveButtonWrap"
            buttonClassName="tasteBlockMoveButton"
            buttonText={{ left: '<', right: '>' }}
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
          <div className="shader"></div>
        </div>
      </div>
    ) : null;
  }
}

export default TasteRecommend;

// const IMAGE_LIST = [
//   { name: 'stake', url: '/images/Main/stake.jpg' },
//   { name: 'stake', url: '/images/Main/food2.jpg' },
//   { name: 'stake', url: '/images/Main/food3.jpg' },
//   { name: 'stake', url: '/images/Main/stake.jpg' },
//   { name: 'stake', url: '/images/Main/food2.jpg' },
//   { name: 'stake', url: '/images/Main/food3.jpg' },
// ];
