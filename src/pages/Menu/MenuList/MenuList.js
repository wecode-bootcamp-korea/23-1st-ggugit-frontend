import React from 'react';
import './MenuList.scss';

class MenuList extends React.Component {
  render() {
    const { limited, name, image_url, cooking_time, price, discount, sales } =
      this.props;

    return (
      <li className="listContainer">
        <div className="listImg">
          <img src={image_url} alt="menu" />
        </div>
        <div className="listInfoContainer">
          <div className="newBox">
            {limited ? (
              <>
                <span>한정수량</span>
                <span>NEW</span>
              </>
            ) : null}
          </div>
          <div className="listInfo">
            <span className="makingTime">조리시간 {cooking_time}분</span>
            <span className="menuName">{name}</span>
            <div className="discountFlex">
              <span className="menuPrice">
                <del>{price}원</del>
              </span>
              <span className="discount">{discount}원</span>
            </div>
            <div>
              <span className="starRivew">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </span>
              <span className="rivew">리뷰{sales}</span>
            </div>
            <div className="goToLikeContainer">
              <button>
                <i className="far fa-heart" />
              </button>
              <button>
                <i className="fas fa-cart-arrow-down" />
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
export default MenuList;
