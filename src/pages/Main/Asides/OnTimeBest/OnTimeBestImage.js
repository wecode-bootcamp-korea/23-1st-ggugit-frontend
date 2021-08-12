import React from 'react';
import { withRouter } from 'react-router-dom';

import './OnTimeBestImage.scss';

class OnTimeBestImage extends React.Component {
  render() {
    const { imageList, cartClick } = this.props;
    const _imageList = imageList.map(
      ({ id, name, url, price, cookingTime }, idx) => {
        return (
          <div key={idx} className="onTimeBestImage">
            <div className="rank">
              <span>{idx + 1}</span>
            </div>
            <img
              alt={name}
              src={url}
              onClick={() => {
                this.props.history.push(`/detail/${id}`);
              }}
            />
            <span>GGUGIT {name}</span>
            <div className="priceInfo">
              <span className="price">{price.toLocaleString()}원</span>
              <span className="serving">{cookingTime}분</span>
            </div>
            <button name={id} onClick={cartClick}>
              장바구니
            </button>
          </div>
        );
      }
    );

    return <div className="onTimeBestImageWrap">{_imageList}</div>;
  }
}

export default withRouter(OnTimeBestImage);
