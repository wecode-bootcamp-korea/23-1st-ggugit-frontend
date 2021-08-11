import React, { Component } from 'react';

class PriceInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="info priceInfo">{priceInfo.toLocaleStirng()}</div>
        <div className="info">{discountInfo.toLocaleStirng()}</div>
      </>
    );
  }
}

export default PriceInfo;
