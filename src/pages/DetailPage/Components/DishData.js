import React from 'react';
import './DishData.scss';
import { INFO_DATA } from './INFORMATION_DATA';
class DishData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    fetch('./data/data.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          mockData: data,
        });
      });
  }

  render() {
    const makeList = category =>
      INFO_DATA[category].map(data => {
        return (
          <dl key={data.id}>
            <dt>{data.title}</dt>
            <dd>
              <span className="ttxt">{data.content}</span>
            </dd>
          </dl>
        );
      });
    console.log(makeList);
    return (
      <div className="DishData">
        <div className="cookTime"> 조리 30분</div>
        <div className="info priceInfo">{makeList('priceInfo')}</div>
        <div className="info">{makeList('discountInfo')}</div>
        <div className="info">{makeList('deliveryInfo')}</div>
      </div>
    );
  }
}
export default DishData;
