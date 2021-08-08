import React, { Component } from 'react';
import './CartButton.scss';

class CartButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const titleData = this.props.mealKitInfoList;

    return (
      <div className="cartWrap">
        <div className="totalPrice">
          <span> 수량 : {titleData.stock}</span>
          <span> 총 10,000 원 </span>
        </div>
        <div className="cartButton">
          <button>장바구니 담기</button>
        </div>
      </div>
    );
  }
}
export default CartButton;
