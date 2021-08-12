import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LIST_TOP, NAV_LIST_BOTTOM } from './NAV_LIST';
import { TOKEN_KEY } from '../../pages/Login/LoginForm/LoginForm';

import './Nav.scss';

class Nav extends React.Component {
  render() {
    const topList = NAV_LIST_TOP.map(topNavText => {
      return (
        <li key={`bottomNav${topNavText.id}`}>
          <Link
            to={
              topNavText.id === 2 && localStorage.getItem(TOKEN_KEY)
                ? '/'
                : topNavText.url
            }
          >
            {topNavText.id === 2 && localStorage.getItem(TOKEN_KEY)
              ? `환영합니다!`
              : topNavText.text}
          </Link>
        </li>
      );
    });

    const bottomList = NAV_LIST_BOTTOM.map(bottomNavText => {
      return (
        <li key={`bottomNav${bottomNavText.id}`}>
          <Link to={bottomNavText.url}>{bottomNavText.text}</Link>
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
            <Link to={`/`}>
              <h1 className="logo">GGUGIT</h1>
            </Link>
            <div className="bottomList">
              <ul>{bottomList}</ul>
            </div>
            <div>
              <span>장바구니</span>
              <span>메뉴찾기</span>
            </div>
          </nav>
        </div>
      </nav>
    );
  }
}

export default Nav;
