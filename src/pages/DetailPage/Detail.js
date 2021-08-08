import React, { Component } from 'react';
import './Detail.scss';
import PriceAndDelivery from './Components/Delivery';
import TitleData from './Components/TitleData';
import CartStickBar from './Components/CartStickBar';
import CartButton from './Components/CartButton';
import MainContent from './Components/MainContent';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      mealKitInfoList: [],
    };
  }

  goToCart = () => {
    this.props.history.push('/Cart');
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/DetailPage/TitleMockData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          mealKitInfoList: data,
        });
      });
  }
  render() {
    const { mealKitInfoList } = this.state;
    return (
      <main className="wholeWrap">
        {mealKitInfoList.map((mealKitInfoList, index) => {
          return (
            <div className="detailWrap" key={index}>
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
                  <TitleData mealKitInfoList={mealKitInfoList} />
                  <PriceAndDelivery mealKitInfoList={mealKitInfoList} />
                  <CartButton mealKitInfoList={mealKitInfoList} />
                </div>
              </div>
              <div className="tabWrap">상세설명</div>
              <div className="infoWrap">
                <div className="infoDetail">
                  <MainContent />
                  <CartStickBar />
                </div>
              </div>
            </div>
          );
        })}
      </main>
    );
  }
}

export default Detail;
