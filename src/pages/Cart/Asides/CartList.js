import React from 'react';

import './CartList.scss';

class CartList extends React.Component {
  render() {
    const { cartList } = this.props.cartList;
    console.log('cartList', cartList);

    // return null;

    const _cartList = cartList.map(
      ({ name, image_url, price, discount, quantity }) => {
        return (
          <li key={name} className="listItem">
            <div className="productInfo">
              <label className="listCheck">
                <input type="checkbox" />
              </label>
              <img className="productImg" alt="" src={image_url} />
              <div className="productDesc">
                <span className="productName">{name}</span>
                <span className="productPrice">{price}</span>
              </div>
            </div>
            <div className="productCountBox">
              <div className="productCount">
                <button>-</button>
                <span>{quantity}</span>
                <button>+</button>
              </div>
              <span>{discount}</span>
              <button className="deleteItem">x</button>
            </div>
          </li>
        );
      }
    );

    return <ul className="cartList">{_cartList}</ul>;
  }
}

export default CartList;
