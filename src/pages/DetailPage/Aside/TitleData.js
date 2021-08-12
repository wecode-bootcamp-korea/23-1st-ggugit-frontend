import React, { Component } from 'react';
import './TitleData.scss';

class TitleData extends Component {
  render() {
    const titleData = this.props.mealKitInfoList;

    return (
      <React.Fragment>
        <div className="titleWrap" key={titleData.id}>
          <div className="flagWrap">
            {titleData.limited ? (
              <>
                <span className="flagDeal">한정수량</span>
                <span className="flagNew">NEW</span>
              </>
            ) : null}
          </div>
          <h1 className="subTitle">{titleData.sub_name}</h1>
          <h1 className="title">{titleData.name}</h1>
          <h2 className="originInfo">원산지 : 상품정보 참조</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default TitleData;
