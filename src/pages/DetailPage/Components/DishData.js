import React from 'react';
import './DishData.scss';
import { INFO_DATA } from './ASIDE_BOTTOM_DATA';
class DishData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  render() {
    const makeList = category =>
      INFO_DATA[category].map(data => {
        return (
          <dl key={data.id}>
            <dt>{data.title}</dt>
            <dd>
              <span className="ttxt">{data.content}</span>
            </dd>
          </dl>
        );
      });

    return (
      <div className="DishData">
        <div className="cookTime"> 조리 30분</div>
        <div className="info priceInfo">{makeList('priceInfo')}</div>
        <div className="info">{makeList('discountInfo')}</div>
        <div className="info">{makeList('deliveryInfo')}</div>
      </div>
    );
  }
}
export default DishData;
