import React, { Component } from 'react';
import './ImgSlider.scss';

class ImgSlider extends Component {
  render() {
    return (
      <div className="section">
        <input type="radio" name="slide" id="slide01" checked />
        <input type="radio" name="slide" id="slide02" />
        <input type="radio" name="slide" id="slide03" />
        <div className="slidewrap">
          <ul className="slidelist">
            <li>
              <a>
                <img src="./img/slide01.jpg" />
              </a>
            </li>
            <li>
              <a>
                <img src="./img/slide02.jpg" />
              </a>
            </li>
            <li>
              <a>
                <img src="./img/slide03.jpg" />
              </a>
            </li>
          </ul>

          <div className="slide-control">
            <div className="control01">
              <label for="slide03" className="left"></label>
              <label for="slide02" className="right"></label>
            </div>
            <div className="control02">
              <label for="slide01" className="left"></label>
              <label for="slide03" className="right"></label>
            </div>
            <div className="control03">
              <label for="slide02" className="left"></label>
              <label for="slide01" className="right"></label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImgSlider;
