import React from 'react';
import './MenuList.scss';

class MenuList extends React.Component {
  render() {
    const { name, image_url, cooking_time, price } = this.props;
    return (
      <li className="listContainer">
        <div className="listImg">
          <img src={image_url} alt="menu" />
        </div>
        <div className="listInfoContainer">
          <div className="newBox">
            <span>한정수량</span>
            <span>NEW</span>
          </div>
          <div className="listInfo">
            <span className="makingTime">조리시간{cooking_time}</span>
            <span className="menuName">{name}</span>
            <span className="menuPrice">{price}원</span>
            <div>
              <span className="starRivew">별별별별별</span>
              <span className="rivew">리뷰0</span>
            </div>
            <div className="goToLikeContainer">
              <button>
                <i class="far fa-heart" />
              </button>
              <button>
                <i class="fas fa-cart-arrow-down" />
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
export default MenuList;
