import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { INFO_DATA } from './ASIDE_BOTTOM_DATA';
import { PRODUCTS_API } from '../../../config';

import './DishData.scss';
class DishData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asideData: {},
      priceInfo: [],
    };
  }
  componentDidMount() {
    fetch(`${PRODUCTS_API}/${this.props.match.params.product_id}`)
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => {
          console.log(`${PRODUCTS_API}/${this.props.match.params.product_id}`);
          return {
            ...prevState,
            priceInfo: [data.results[0].price, data.results[0].discount],
          };
        });
      });
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
                  ? this.props.mealKitInfoList[asideData.name].toLocaleString()
                  : asideData.content.toLocaleString()}
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
export default withRouter(DishData);
