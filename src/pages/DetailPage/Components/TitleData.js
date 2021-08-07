import React from 'react';
import './TitleData.scss';

class TitleData extends React.Component {
  constructor() {
    super();
    this.state = {
      titleDatas: '',
    };
  }

  componentDidMount = () => {
    fetch('../data/DetailPage/TitleMockData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          titleData: data,
        });
      });
  };

  render() {
    const titleList = category =>
      titleData[category].map(el => {
        return (
          <div className="titleWrap">
            <div className="flagWrap">
              <span className="flagDeal">{titleList('limited')}</span>
              <span className="flagNew">{titleList('new')}</span>
            </div>
            <h1 className="subTitle">{titleList('sub_name')}</h1>
            <h1 className="title">{titleList('name')}</h1>
            <h2 className="originInfo">원산지 : 상품정보 참조</h2>
          </div>
        );
      });
  }
}

export default TitleData;
