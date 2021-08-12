import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LIST_TOP, NAV_LIST_BOTTOM } from './NAV_LIST';

import './Nav.scss';
import { TOKEN_KEY } from '../../pages/Login/LoginForm/LoginForm';

class Nav extends React.Component {
  render() {
    const topList = NAV_LIST_TOP.map(topNavList => {
      return (
        <li key={topNavList.id}>
          <Link to={topNavList.url}>{topNavList.text}</Link>
        </li>
      );
    });
    const bottomList = NAV_LIST_BOTTOM.map(bottomNavList => {
      return (
        <li key={bottomNavList.id}>
          <Link to={bottomNavList.url}>{bottomNavList.text}</Link>
        </li>
      );
    });
    return (
      <nav className="navWrap">
        <div className="topNavWrap">
          <nav className="topList">
            <ul>{topList}</ul>
          </nav>
        </div>
        <div className="bottomNavWrap">
          <nav className="bottomNav">
            <h1 className="logo">
              <Link to="/">GGUGIT</Link>
            </h1>
            <div className="bottomList">
              <ul>{bottomList}</ul>
            </div>
            <div className="bottomRightSide">
              <span className="cart">
                <Link to="/cart">장바구니</Link>
              </span>
              <span className="menuSearch">메뉴찾기</span>
            </div>
          </nav>
        </div>
      </nav>
    );
  }
}

export default Nav;
