import React from 'react';
import CartList from './Asides/CartList';
import { CART_API } from '../../config';
import { TOKEN_KEY } from '../Login/LoginForm/LoginForm';
import './Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    fetch(CART_API, {
      method: 'GET',
      headers: { Authorization: localStorage.getItem(TOKEN_KEY) },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        let sumPrice = 0,
          sumDisCount = 0;
        data.results.forEach(({ price, discount }) => {
          sumPrice = sumPrice + price;
          sumDisCount = sumDisCount + discount;
        });

        this.setState(prevState => {
          return {
            ...prevState,
            cartList: data.results,
            price: sumPrice,
            discount: sumDisCount,
          };
        });
      });
  }

  setQuantity = e => {
    if (e.target.innerText === '+') {
      fetch(`${CART_API}/${e.target.name}`, {
        method: 'PATCH',
        headers: { Authorization: localStorage.getItem(TOKEN_KEY) },
        body: JSON.stringify({
          quantity: +1,
        }),
      });
    }
  };

  render() {
    const { cartList, price, discount, setQuantity } = this.state;

    return this.state.cartList ? (
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
              <CartList cartList={cartList} setQuantity={setQuantity} />
              <div className="priceInfo">
                <div className="totalPrice">
                  <span>{discount.toLocaleString()}원</span>
                  <span>+</span>
                  <span>배송비 3,000원</span>
                  <span>=</span>
                  <span>{(discount + 3000).toLocaleString()}원</span>
                </div>
                {price < 15000 && (
                  <span>
                    {(15000 - price).toLocaleString()}원 더 구매 시 무료배송
                    해드려요
                  </span>
                )}
              </div>
              <div className="finalPrice">
                <div className="priceDesc">
                  <span>총 상품금액</span>
                  <span className="price">{price.toLocaleString()}원</span>
                </div>
                <div className="priceOperator">
                  <span>-</span>
                </div>
                <div className="priceDesc">
                  <span>총 할인금액</span>
                  <span className="price">
                    {(price - discount).toLocaleString()}
                  </span>
                </div>
                <div className="priceOperator">
                  <span>+</span>
                </div>
                <div className="priceDesc">
                  <span>총 배송비</span>
                  <span className="price">3,000원</span>
                </div>
                <div className="priceOperator">
                  <span>=</span>
                </div>
                <div className="priceDesc">
                  <span>총 결제예정금액</span>
                  <span className="price">
                    {(discount + 3000).toLocaleString()}원
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ) : null;
  }
}

export default Cart;
