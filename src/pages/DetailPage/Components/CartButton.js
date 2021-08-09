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
          {titleData.stock >= 30 ? (
            <span> 수량 : {titleData.stock}</span>
          ) : (
            <span> 수량 : 마감임박!</span>
          )}
          {/* <span> 수량 : {titleData.stock}</span> */}
          <span> 총 {}원 </span>
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
