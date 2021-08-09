import React from 'react';
import './Detail.scss';
import DishData from './Components/DishData';
import TitleData from './Components/TitleData';
import CartStickBar from './Components/CartStickyBar';

class Detail extends React.Component {
  render() {
    return (
      <main className="wholeWrap">
        <div className="detailWrap">
          <div className="topInfo">
            <div className="imgDetailWrap">
              <img
                src="/images/DetailPage/pasta_above.jpeg"
                alt="파스타"
                witdh="600px;"
                height="600px;"
              />

              <div className="dishCarousel">
                {/* 추가적으로 carousel 구현 예정입니다! */}
              </div>
            </div>
            <div className="dishInfoWrap">
              <TitleData />
              <DishData />

              <div className="cartWrap">
                <div className="totalPrice">
                  <span> 수량 :</span>
                  <span> 총 0원 </span>
                </div>
                <div className="cartButton">
                  <button> 장바구니 담기</button>
                </div>
              </div>
            </div>
          </div>
          <div className="tabWrap">상세설명</div>
        </div>

        <div className="infoWrap">
          <div className="infoDetail">
            <div className="detailDescriptionBox">
              <img
                src="/images/DetailPage/mainboxImg.jpeg"
                alt="키트 상세설명을 위한 파스타 사진"
              ></img>
              <div className="subTitle">투움바 파스타</div>
              <p className="subText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                vitae facere ipsam adipisci error maiores voluptatibus iure
                quidem, dolorum, soluta tempore, nemo minus culpa illo! Soluta,
                quisquam sequi? Tempora, ad.
              </p>
            </div>
            <CartStickBar />
          </div>
        </div>
      </main>
    );
  }
}

export default Detail;
