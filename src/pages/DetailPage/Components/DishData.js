import React, { Component } from 'react';
import './DishData.scss';
import { INFO_DATA } from './ASIDE_BOTTOM_DATA';
// import PriceInfo from './Components/PriceInfo';
class DishData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asideData: {},
    };
  }
  render() {
    const makeList = category =>
      INFO_DATA[category].map(asideData => {
        return (
          <dl key={asideData.id}>
            <dt>{asideData.title}</dt>
            <dd>
              <span className="ttxt">
                {asideData.content === true
                  ? this.props.mealKitInfoList[asideData.name]
                  : asideData.content}
              </span>
            </dd>
          </dl>
        );
      });
    const titleData = this.props.mealKitInfoList;

    return (
      <div className="DishData">
        <div className="cookTime"> 조리 {titleData.cooking_time}분</div>
        <div className="info priceInfo">{makeList('priceInfo')}</div>
        <div className="info">{makeList('discountInfo')} </div>
        <div className="info">{makeList('deliveryInfo')}</div>
      </div>
    );
  }
}
export default DishData;
