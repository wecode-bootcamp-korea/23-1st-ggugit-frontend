import React from 'react';
import './Cart.scss';

class Cart extends React.Component {
  render() {
    return (
      <section className="cart">
        <div className="cartWrap">
          <div className="cartTitle">
            <h1>장바구니</h1>
          </div>
          <div className="cartLoginNotice">
            <span>
              로그인을 하시면 장바구니에 담긴 상품을 나중에도 확인하실 수
              있습니다.
            </span>
            <button>로그인</button>
          </div>
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
              <ul className="cartList">
                <li className="listItem">
                  <div className="productInfo">
                    <label className="listCheck">
                      <input type="checkbox" />
                    </label>
                    <img className="productImg" alt="" src="#" />
                    <span className="productName">부채살 찹스테이크</span>
                    <span className="productPrice">20,800원</span>
                  </div>
                  <div className="productCount">
                    <div>
                      <button>+</button>
                      <span>1</span>
                      <button>-</button>
                    </div>
                    <span>20,800원</span>
                  </div>
                </li>
              </ul>
              <div>
                <div>
                  <span>상품금액 20,600원</span>
                  <span>+</span>
                  <span>배송비 3,000원</span>
                  <span>=</span>
                  <span>10억원</span>
                </div>
                <span>원 더 구매 시 무료배송 해드려요</span>
              </div>
              <div>
                <div>
                  <span>총 상품금액</span>
                  <span>20,800원</span>
                </div>
                <div>
                  <span>-</span>
                </div>
                <div>
                  <span>총 할인금액</span>
                  <span>20,800원</span>
                </div>
                <div>
                  <span>+</span>
                </div>
                <div>
                  <span>총 배송비</span>
                  <span>20,800원</span>
                </div>
                <div>
                  <span>=</span>
                </div>
                <div>
                  <span>총 결제예정금액</span>
                  <span>20,800원</span>
                </div>
              </div>
              <div>
                <button>선물하기</button>
                <button>선택 비회원 주문하기</button>
                <button>전체 비회원 주문하기</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
