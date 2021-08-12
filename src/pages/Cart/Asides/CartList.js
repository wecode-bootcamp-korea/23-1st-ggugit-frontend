import React from 'react';

import './CartList.scss';

class CartList extends React.Component {
  render() {
    return (
      <ul className="cartList">
        <li className="listItem">
          <div className="productInfo">
            <label className="listCheck">
              <input type="checkbox" />
            </label>
            <img
              className="productImg"
              alt=""
              src="/public/images/Main/food2.jpg"
            />
            <div className="productDesc">
              <span className="productName">부채살 찹스테이크</span>
              <span className="productPrice">20,800원</span>
            </div>
          </div>
          <div className="productCountBox">
            <div className="productCount">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <span>20,800원</span>
            <button className="deleteItem">x</button>
          </div>
        </li>
      </ul>
    );
  }
}

export default CartList;
