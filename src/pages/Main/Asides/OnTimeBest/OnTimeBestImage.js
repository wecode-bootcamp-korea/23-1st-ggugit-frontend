import React from 'react';

import './OnTimeBestImage.scss';

class OnTimeBestImage extends React.Component {
  render() {
    const { imageList } = this.props;
    const _imageList = imageList.map(
      ({ name, url, price, cookingTime }, idx) => {
        return (
          <div key={idx} className="onTimeBestImage">
            <div className="rank">
              <span>{idx + 1}</span>
            </div>
            <img alt={name} src={url} />
            <span>GGUGIT {name}</span>
            <div className="priceInfo">
              <span className="price">{price.toLocaleString()}원</span>
              <span className="serving">{cookingTime}분</span>
            </div>
          </div>
        );
      }
    );

    return <div className="onTimeBestImageWrap">{_imageList}</div>;
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
