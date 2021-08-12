import './CartStickyBar.scss';
import React from 'react';

class CartStickyBar extends React.Component {
  render() {
    return (
      <div className="cartStickBar">
        <div className="deliveryDateNotification">
          <div className="notiTitle">주문정보 안내</div>
          <div className="notiContent">
            오전 7시 이전에 구매하시면 다음날 새벽에 집 앞으로 신선하게 받아보실
            수 있습니다.
          </div>
        </div>
        <div className="stickyCartButton">
          <button>장바구니 담기</button>
        </div>
      </div>
    );
  }
}

export default CartStickyBar;
