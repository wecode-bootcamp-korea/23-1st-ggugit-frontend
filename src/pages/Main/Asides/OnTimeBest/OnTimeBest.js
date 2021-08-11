import React from 'react';
import OnTimeBestImage from './OnTimeBestImage';

import './OnTimeBest.scss';

class OnTimeBest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bestProducts: {},
    };
  }

  render() {
    return (
      <div className="onTimeBestWrap">
        <div className="onTimeBestTitle">
          <h1>실시간 베스트</h1>
        </div>
        <div className="onTimeBestImageWrap">
          <OnTimeBestImage />
        </div>
      </div>
    );
  }
}

export default OnTimeBest;
