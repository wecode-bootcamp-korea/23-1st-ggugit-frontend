import React from 'react';
import '../List/List.scss';

class List extends React.Component {
  render() {
    return (
      <li className="listContainer">
        <div className="listImg">
          <img
            src="https://openimage.interpark.com/goods_image_big/4/0/0/7/6806514007_l.jpg"
            alt="monster"
          />
        </div>
        <div className="listInfoContainer">
          <div className="newBox">
            <span>한정수량</span>
            <span>NEW</span>
          </div>
          <div className="listInfo">
            <span className="makingTime">조리 20분</span>
            <span className="menuName">수제불고기버거와 콘스프</span>
            <span className="menuPrice">27,800원</span>
            <span className="starRivew">별별별별별</span>
            <span className="rivew">리뷰0</span>
            <div className="goToLikeContainer">
              <button>
                <i class="far fa-heart" />
              </button>
              <button>
                <i class="fas fa-cart-arrow-down" />
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
export default List;
