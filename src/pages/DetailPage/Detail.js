import React, { Component } from 'react';
import './Detail.scss';
<<<<<<< HEAD
import TitleData from './Aside/TitleData';
import CartStickBar from './Aside/CartStickBar';
import CartButton from './Aside/CartButton';
import MainContent from './Aside/MainContent';
import DishData from './Aside/DishData';
import ImgAlbum from './Aside/ImgAlbum';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      mealKitInfoList: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.3.151:8000/products/1')
      // 훈태님: http://10.58.5.216:8000/products/1
      // 이준님: http://10.58.3.151:8000/products/1
      // ('http://localhost:3000/data/DetailPage/TitleMockData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          mealKitInfoList: data.results,
        });
      });
  }

=======
import DishData from './Components/DishData';
import TitleData from './Components/TitleData';
import CartStickyBar from './Components/CartStickyBar';
import CartButton from './Components/CartButton';
import MainContent from './Components/MainContent';

class Detail extends React.Component {
>>>>>>> main
  render() {
    const { mealKitInfoList } = this.state;
    return (
      <main className="wholeWrap">
<<<<<<< HEAD
        {mealKitInfoList.length &&
          mealKitInfoList.map((mealKitInfoList, index) => {
            return (
              <div className="detailWrap" key={index}>
                <div className="topInfo">
                  <ImgAlbum mealKitInfoList={mealKitInfoList} />
                  <div className="dishInfoWrap">
                    <TitleData mealKitInfoList={mealKitInfoList} />
                    <DishData mealKitInfoList={mealKitInfoList} />
                    <CartButton mealKitInfoList={mealKitInfoList} />
                  </div>
                </div>
                <div className="tabWrap">상세설명</div>
                <div className="infoWrap">
                  <div className="infoDetail">
                    <MainContent mealKitInfoList={mealKitInfoList} />
                    <CartStickBar mealKitInfoList={mealKitInfoList} />
                  </div>
                </div>
              </div>
            );
          })}
=======
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
>>>>>>> main
      </main>
    );
  }
}

export default Detail;
