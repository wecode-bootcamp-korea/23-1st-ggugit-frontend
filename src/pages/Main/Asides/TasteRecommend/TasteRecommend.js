import React from 'react';
import { withRouter } from 'react-router-dom';
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

  goToDetail = e => {
    this.props.history.push(`/detail/${e.target.id}`);
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
    const { handleModalClick, handleCountUpdate, goToDetail } = this;
    const { tasteList, productsInfo, recommendTaste, imageCounter } =
      this.state;

    return tasteList && productsInfo ? (
      <div className="tasteRecommendWrap">
        <div className="tasteListBlock">
          <button
            onClick={() => {
              console.log(`test`);
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
          <span>??????</span>
          <span>???????????????</span>
          <p>
            ?????????????????? ???????????? ??????????????? ???????????? ?????? ????????? ????????? ?????????
            ???????????????
          </p>
        </div>
        <div className="tasteListImgBlock">
          <ImageSlider
            imageList={productsInfo}
            imgSize={imageSize}
            animationTime={1000}
            buttonRender={true}
            buttonWrapClassName="tasteBlockMoveButtonWrap"
            buttonClassName="tasteBlockMoveButton"
            buttonText={buttonText}
            passToImageCounter={handleCountUpdate}
            imageOnClick={goToDetail}
          />
          {productsInfo[imageCounter].name && (
            <div className="recommendImgDescription">
              <div className="productTitle">
                <span>GGUIGIT {productsInfo[imageCounter].name}</span>
              </div>
              <div className="productDescription">
                <span className="productPrice">
                  {productsInfo[imageCounter].price.toLocaleString()}???
                </span>
                <span className="productServing">
                  {productsInfo[imageCounter].cooking_time}???
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

export default withRouter(TasteRecommend);

const imageSize = { width: '520px', height: '520px' };
const buttonText = { left: '<', right: '>' };
