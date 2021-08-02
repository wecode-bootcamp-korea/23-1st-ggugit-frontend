import React from 'react';
import './Detail.scss';
import DishData from './DishData';

class Detail extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="detailWrap">
          {/* 상단의 밀키트 정보 */}
          <div className="topInfo">
            {/* 상단 왼쪽 음식 사진   */}
            <div className="imgDetailWrap">
              <img
                src="../public/images/DetailPage/pasta.jpg"
                alt="파스타"
                witdh="600px"
                height="600px"
              />
              {/* 음식 케러셀 */}
              <div className="dishCarousel"></div>
            </div>
            {/* 상단 오른쪽 음식 정보   */}
            <div className="dishInfoWrap">
              <div className="titlewrap">
                <span className="subTitle"></span>
                <span className="title"></span>
                <span className="originInfo"></span>
              </div>
              <DishData />
              <div className="cartButton">
                <button>장바구니 담기</button>
              </div>
            </div>
          </div>
        </div>

        {/* 하단의 상세설명을 담는다 */}
        <div className="infoDetail"></div>
      </div>
    );
  }
}

export default Detail;
