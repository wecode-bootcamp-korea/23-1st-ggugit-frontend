import React, { Component } from 'react';
import './Detail.scss';
import TitleData from './Components/TitleData';
import CartStickBar from './Components/CartStickBar';
import CartButton from './Components/CartButton';
import MainContent from './Components/MainContent';
import DishData from './Components/DishData';
import ImgSlider from './Components/ImgSlider';

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
      // 'http://10.58.3.132:8000/products/2'
      .then(res => res.json())
      .then(data => {
        this.setState({
          mealKitInfoList: data.results,
        });
      });
  }
  render() {
    const { mealKitInfoList } = this.state;
    console.log(mealKitInfoList);
    return (
      <main className="wholeWrap">
        {mealKitInfoList &&
          mealKitInfoList.map((mealKitInfoList, index) => {
            return (
              <div className="detailWrap" key={index}>
                <div className="topInfo">
                  <ImgSlider mealKitInfoList={mealKitInfoList} />
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
      </main>
    );
  }
}

export default Detail;
