import React, { Component } from 'react';
import './Detail.scss';
import TitleData from './Aside/TitleData';
import CartStickBar from './Aside/CartStickBar';
import CartButton from './Aside/CartButton';
import MainContent from './Aside/MainContent';
import DishData from './Aside/DishData';
import ImgSlider from './Aside/ImgSlider';
// import ImgSlider from './Components/ImgSlider';

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
    fetch('http://10.58.5.216:8000/products/1')
      .then(res => res.json())
      .then(data => {
        this.setState({
          mealKitInfoList: data.results,
        });
      });
  }

  render() {
    console.log(this.props);
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
