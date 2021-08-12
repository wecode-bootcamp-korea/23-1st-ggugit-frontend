import React from 'react';
import OnTimeBestImage from './OnTimeBestImage';
import { BEST_PRODUCTS_API } from '../../../../config';

import './OnTimeBest.scss';

class OnTimeBest extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { bestProducts: [] };
  }

  componentDidMount() {
    fetch(BEST_PRODUCTS_API)
      .then(res => res.json())
      .then(data => {
        let newData = [];
        data.results.forEach(
          ({ id, name, image_url, price, cooking_time }, idx) => {
            if (idx <= 8) {
              newData.push({
                id,
                name,
                url: image_url,
                price,
                cookingTime: cooking_time,
              });
            }
          }
        );
        this.setState({ bestProducts: newData });
      });
  }

  render() {
    const { bestProducts } = this.state;
    return (
      bestProducts && (
        <div className="onTimeBestWrap">
          <div className="onTimeBestTitle">
            <h1>실시간 베스트</h1>
          </div>
          <OnTimeBestImage imageList={bestProducts} />
        </div>
      )
    );
  }
}

export default OnTimeBest;
