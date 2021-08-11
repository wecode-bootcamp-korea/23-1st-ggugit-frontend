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
      productsInfo: '',
      imageCounter: 0,
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
                productsInfo: newList,
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
            productsInfo: newList,
            recommendTaste: newList[0].taste,
          };
        });
      });
  };

  handleCountUpdate = count => {
    this.setState(prevState => {
      const { productsInfo } = prevState;
      let newImageCounter = 0;
      if (count !== -1 && count !== productsInfo.length) {
        newImageCounter = count;
      } else if (count === -1) {
        newImageCounter = productsInfo.length - 1;
      } else if (count === productsInfo.length) {
        newImageCounter = 0;
      }

      return { ...prevState, imageCounter: newImageCounter };
    });
  };

  render() {
    const { handleModalClick, handleCountUpdate } = this;
    const { tasteList, productsInfo, recommendTaste, imageCounter } =
      this.state;
    console.log(`render`);

    return tasteList && productsInfo ? (
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
            imageList={productsInfo}
            imgSize={{ width: '520px', height: '520px' }}
            animationTime={1000}
            buttonRender={true}
            buttonWrapClassName="tasteBlockMoveButtonWrap"
            buttonClassName="tasteBlockMoveButton"
            buttonText={{ left: '<', right: '>' }}
            passToImageCounter={handleCountUpdate}
          />
          {productsInfo[imageCounter].name && (
            <div className="recommendImgDescription">
              <div className="productTitle">
                <span>GGUIGIT {productsInfo[imageCounter].name}</span>
              </div>
              <div className="productDescription">
                <span className="productPrice">
                  {productsInfo[imageCounter].price.toLocaleString()}원
                </span>
                <span className="productServing">
                  {productsInfo[imageCounter].cooking_time}분
                </span>
                <i className="fas fa-cart-plus"></i>
              </div>
            </div>
          )}
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
