import React from 'react';
import './Detail.scss';
import DishData from './Components/DishData';
import TitleData from './Components/TitleData';
import CartStickyBar from './Components/CartStickyBar';
import CartButton from './Components/CartButton';
import MainContent from './Components/MainContent';

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
              <CartButton />
            </div>
          </div>
          <div className="tabWrap">상세설명</div>
        </div>

        <div className="infoWrap">
          <div className="infoDetail">
            <MainContent />
            <CartStickyBar />
          </div>
        </div>
      </main>
    );
  }
}

export default Detail;
