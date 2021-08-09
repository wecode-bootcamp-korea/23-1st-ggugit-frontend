import React from 'react';
import './DishData.scss';
import { INFO_DATA } from './ASIDE_BOTTOM_DATA';
class DishData extends React.Component {
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
              <span className="ttxt">{asideData.content}</span>
            </dd>
          </dl>
        );
      });
    const titleData = this.props.mealKitInfoList;

    return (
      <div className="DishData">
        <div className="cookTime"> 조리 {titleData.cooking_time}분</div>
        <div className="info priceInfo">{makeList('priceInfo')}</div>
        <div className="info">{makeList('discountInfo')}</div>
        {/* <div className="info">{makeList('deliveryInfo')}</div> 3000원으로 고정값 넣기 */}
        {/* 해당부분 하드코딩을 하는것으로 생ㅇ각 (위엣 끌어오기) */}
      </div>
    );
  }
}
export default DishData;
