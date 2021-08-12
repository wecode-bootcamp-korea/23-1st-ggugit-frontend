import React, { Component } from 'react';
import './Detail.scss';
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
    fetch('http://10.58.0.132:8000/products/1')
      .then(res => res.json())
      .then(data => {
        this.setState({
          mealKitInfoList: data.results,
        });
      });
  }

  render() {
    const { mealKitInfoList } = this.state;
    return (
      <main className="wholeWrap">
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
      </main>
    );
  }
}

export default Detail;
