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
                src="../images/DetailPage/pasta_above.jpeg"
                alt="파스타"
                witdh="600px;"
                height="600px;"
              />

              {/* 음식 케러셀 */}
              <div className="dishCarousel">
                여기까지 상단의 그림과 나와야한다
              </div>
            </div>
            {/* 상단 오른쪽 음식 정보   */}
            <div className="dishInfoWrap">
              <div className="titleWrap">
                <div className="subTitle">고소하고 크리미한 </div>
                <div className="title">*투움바 스테이크 파스타</div>
                <div className="originInfo">원산지 : 상품정보 참조</div>
              </div>
              <DishData />
              <div className="cartButton">
                <button>장바구니 담기</button>
              </div>
            </div>
          </div>
        </div>

        {/* 하단의 상세설명을 담는다 */}
        <main>
          <div className="infoDetail">
            <div className="detailDescriptionBox">
              <img
                src="../images/DetailPage/mainboxImg.jpeg"
                alt="키트 상세설명을 위한 파스타 사진"
                witdh="600px;"
                height="600px;"
              ></img>
              <span className="subText"></span>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Detail;
