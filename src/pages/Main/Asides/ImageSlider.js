import React from 'react';

import './ImageSlider.scss';

class ImageSlider extends React.Component {
  render() {
    const ImageList = IMAGE_LIST.map((image, idx) => {
      const { name, url } = image;
      return (
        <img key={idx} alt={name} src={url} width="1920px" height="640px" />
      );
    });

    return (
      <div className="imgSlider">
        {ImageList[1]}
        {this.props.children}
      </div>
    );
  }
}

export default ImageSlider;

const IMAGE_LIST = [
  { name: 'stake', url: '/images/Main/stake.jpg' },
  { name: 'stake', url: '/images/Main/stake.jpg' },
  { name: 'stake', url: '/images/Main/stake.jpg' },
  { name: 'stake', url: '/images/Main/stake.jpg' },
  { name: 'stake', url: '/images/Main/stake.jpg' },
  { name: 'stake', url: '/images/Main/stake.jpg' },
];
