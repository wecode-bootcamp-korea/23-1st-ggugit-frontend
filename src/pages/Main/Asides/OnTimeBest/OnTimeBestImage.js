import React from 'react';

import './OnTimeBestImage';

class OnTimeBestImage extends React.Component {
  render() {
    const imageList = IMAGE_LIST.map(elem => {
      return (
        <div className="onTimeBestImage">
          <div className="rank">
            <span>1</span>
          </div>
          <img alt={elem.name} src={elem.url} />
          <span>부채살 찹스테이크</span>
          <div className="priceInfo">
            <span className="price">Prices</span>
            <span className="serving">2인분</span>
          </div>
        </div>
      );
    });

    return <>{imageList}</>;
  }
}

export default OnTimeBestImage;

const IMAGE_LIST = [
  { name: 'stake', url: '/images/Main/stake.jpg' },
  { name: 'stake', url: '/images/Main/food2.jpg' },
  { name: 'stake', url: '/images/Main/food3.jpg' },
  { name: 'stake', url: '/images/Main/stake.jpg' },
  { name: 'stake', url: '/images/Main/food2.jpg' },
  { name: 'stake', url: '/images/Main/food3.jpg' },
];
