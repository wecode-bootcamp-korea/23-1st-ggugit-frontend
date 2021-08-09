import React, { Component } from 'react';
import './CartButton.scss';

class CartButton extends Component {
  constructor() {
    super();
  }

  render() {
    const titleData = this.props.mealKitInfoList;
    const productPrice = Number(titleData.price);
    const discountedPrice = Number(titleData.sales);

    return (
      <div className="cartWrap">
        <div className="totalPrice">
          {titleData.stock >= 30 ? (
            <span> 수량 : {titleData.stock} 개</span>
          ) : (
            <span> 수량 : 마감임박!</span>
          )}
          <span>
            총 {(productPrice - discountedPrice + 3000).toLocaleString()}원
          </span>
        </div>
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
