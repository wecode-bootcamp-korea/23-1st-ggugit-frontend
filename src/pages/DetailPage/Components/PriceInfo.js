import React, { Component } from 'react';

class PriceInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="info priceInfo">{'priceInfo'}</div>
        <div className="info">{'discountInfo'}</div>
      </>
    );
  }
}

export default PriceInfo;
