import React from 'react';
import CartList from './Asides/CartList';
import { CART_API } from '../../config';
import { TOKEN_KEY } from '../Login/LoginForm/LoginForm';
import './Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }
  componentDidMount() {
    fetch(CART_API, {
      method: 'GET',
      headers: { Authorization: localStorage.getItem(TOKEN_KEY) },
    })
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => {
          const { cartList } = this.state;
          return {
            ...prevState,
            cartList: [...cartList, data.results],
          };
        });
      });
  }

  render() {
    return (
      <section className="cart">
        <div className="cartWrap">
          <div className="cartTitle">
            <h1>장바구니</h1>
          </div>
          {!localStorage.getItem(TOKEN_KEY) && (
            <div className="cartLoginNotice">
              <span>
                로그인을 하시면 장바구니에 담긴 상품을 나중에도 확인하실 수
                있습니다.
              </span>
              <button>로그인</button>
            </div>
          )}
          <div className="listCheckBox">
            <label className="listCheck">
              <input type="checkbox" />총 1/1개
            </label>
            <button>선택삭제</button>
          </div>
          <div className="deliveryBox">
            <div className="deliveryDate">
              <label className="listCheck">
                <input type="checkbox" />
              </label>
              <span>2021-08-18(수) 도착예정</span>
            </div>
            <div className="listWrap">
              <CartList />
              <div className="priceInfo">
                <div className="totalPrice">
                  <span>상품금액 20,600원</span>
                  <span>+</span>
                  <span>배송비 3,000원</span>
                  <span>=</span>
                  <span>10억원</span>
                </div>
                <span>원 더 구매 시 무료배송 해드려요</span>
              </div>
              <div className="finalPrice">
                <div className="priceDesc">
                  <span>총 상품금액</span>
                  <span className="price">20,800원</span>
                </div>
                <div className="priceOperator">
                  <span>-</span>
                </div>
                <div className="priceDesc">
                  <span>총 할인금액</span>
                  <span className="price">20,800원</span>
                </div>
                <div className="priceOperator">
                  <span>+</span>
                </div>
                <div className="priceDesc">
                  <span>총 배송비</span>
                  <span className="price">20,800원</span>
                </div>
                <div className="priceOperator">
                  <span>=</span>
                </div>
                <div className="priceDesc">
                  <span>총 결제예정금액</span>
                  <span className="price">20,800원</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
