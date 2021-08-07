import React, { Component } from 'react';
import './PriceAndDelivery.scss';
import { INFO_DATA } from './ASIDE_BOTTOM_DATA';
class DishData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      mealKitInfoList: [],
    };
  }
  render() {
    const makeList = category =>
      INFO_DATA[category].map(priceInfoData => {
        return (
          <dl key={priceInfoData.id}>
            <dt>{priceInfoData.title}</dt>
            <dd>
              <span className="ttxt">{priceInfoData.content}</span>
            </dd>
          </dl>
        );
      });

    const { titleData } = this.props.mealKitInfoList;
    return (
      <div className="DishData">
        <div className="cookTime">
          <TitleData mealKitInfoList />; 조리 + {titleData.cooking_time} +분
        </div>
        <div className="info priceInfo">{makeList('priceInfo')}</div>
        <div className="info">{makeList('discountInfo')}</div>
        <div className="info">{makeList('deliveryInfo')}</div>
      </div>
    );
  }
}
export default DishData;
