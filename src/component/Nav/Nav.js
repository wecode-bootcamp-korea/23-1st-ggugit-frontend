import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LIST_TOP, NAV_LIST_BOTTOM } from './NAV_LIST';

import './Nav.scss';
import { TOKEN_KEY } from '../../pages/Login/LoginForm/LoginForm';

class Nav extends React.Component {
  render() {
    const topList = NAV_LIST_TOP.map(elem => {
      return (
        <li key={`bottomNav${elem.id}`}>
          <Link
            to={
              elem.id === 2 && localStorage.getItem(TOKEN_KEY) ? '/' : elem.url
            }
          >
            {elem.id === 2 && localStorage.getItem(TOKEN_KEY)
              ? `환영합니다!`
              : elem.text}
          </Link>
        </li>
      );
    });

    const bottomList = NAV_LIST_BOTTOM.map(elem => {
      return (
        <li key={`bottomNav${elem.id}`}>
          <Link to={elem.url}>{elem.text}</Link>
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
              <span className="cartLink">
                <Link to="/">장바구니</Link>
              </span>
              <span>메뉴찾기</span>
            </div>
          </nav>
        </div>
      </nav>
    );
  }
}

export default Nav;
