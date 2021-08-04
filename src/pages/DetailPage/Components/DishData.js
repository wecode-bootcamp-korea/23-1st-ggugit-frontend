import React from 'react';
import './DishData.scss';

class DishData extends React.Component {
  render() {
    return (
      <>
        <div className="cookTime">
          {' '}
          조리 30분
          <a></a>
        </div>
        <div className="priceInfo">
          <dl>
            <dt>판매가</dt>
            <dd>
              <span className="ttxt">
                ?가격{/* 판매가격 api로 받아올 예정 */}
              </span>
            </dd>
          </dl>
          <dl>
            <dt>할인가</dt>
            <dd>
              <span className="ttxt">
                ?가격{/* 할인가격 api로 받아올 예정 */}
              </span>
            </dd>
          </dl>
        </div>
        <div className="discountInfo">
          <dl>
            <dt>할인쿠폰</dt>
            <dd>
              <span className="ttxt">할인쿠폰 적용 가능</span>
            </dd>
          </dl>
          <dl>
            <dt>포인트적립</dt>
            <dd>
              <span className="ttxt">포인트적립 가능</span>
            </dd>
          </dl>
        </div>
        <div className="deliveryInfo">
          <dl>
            <dt>배송방법</dt>
            <dd>
              <span className="ttxt">새벽배송</span>
            </dd>
          </dl>
          <dl>
            <dt>배송비</dt>
            <dd>
              <span className="ttxt">3,000원</span>
            </dd>
          </dl>
        </div>
      </>
    );
  }
}

export default DishData;
