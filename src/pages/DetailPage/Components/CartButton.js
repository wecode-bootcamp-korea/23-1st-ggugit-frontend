import React, { Component } from 'react';
import './CartButton.scss';

class CartButton extends Component {
  constructor() {
    super();
  }

  render() {
    const titleData = this.props.mealKitInfoList;
    const productPrice = titleData.price.toLocaleString('');
    const discountedPrice = titleData.sales.toLocaleString('');

    return (
      <div className="cartWrap">
        <div className="totalPrice">
          {titleData.stock >= 30 ? (
            <span> 수량 : {titleData.stock} 개</span>
          ) : (
            <span> 수량 : 마감임박!</span>
          )}
          <span>총{productPrice - discountedPrice}원</span>
        </div>
        {/* <select>
          {Object.keys(titleData).map((key, index) => (
            <option key={index}>
              <div>{titleData[key].month}</div>
              <div>{titleData[key].day}</div>
            </option>
          ))}
        </select> */}
        <div className="cartButton">
          <button
          // onClick={this.goToCart}
          >
            장바구니 담기
          </button>
        </div>
      </div>
    );
  }
}
export default CartButton;
