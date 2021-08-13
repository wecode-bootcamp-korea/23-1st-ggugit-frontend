import React from 'react';
import { withRouter } from 'react-router-dom';
import './Detail.scss';
import TitleData from './Aside/TitleData';
import CartStickBar from './Aside/CartStickBar';
import CartButton from './Aside/CartButton';
import MainContent from './Aside/MainContent';
import DishData from './Aside/DishData';
import ImgAlbum from './Aside/ImgAlbum';
import { PRODUCTS_API } from '../../config';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      mealKitInfoList: [],
      // idData: [],
    };
  }

  componentDidMount() {
    fetch(`${PRODUCTS_API}/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          mealKitInfoList: data.results,
        });
      });
  }

  render() {
    const { mealKitInfoList } = this.state;
    console.log(this.props);
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

export default withRouter(Detail);
