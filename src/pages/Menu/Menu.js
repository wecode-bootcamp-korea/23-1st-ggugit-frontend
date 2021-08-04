import React from 'react';
import List from './List/List';
import './Menu.scss';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  render() {
    return (
      <>
        <div className="wrap">
          <div className="menuWrap">
            <h1>GGUGIT 메뉴</h1>
            <div className="categoriesBox">
              <Link to>테마별</Link>
              <div className="category">
                <Link to>전체</Link>
                <ul>
                  <li>
                    <Link to>KIDS</Link>
                  </li>
                  <li>
                    <Link to>월간베스트</Link>
                  </li>
                  <li>
                    <Link to>신메뉴</Link>
                  </li>
                  <li>
                    <Link to>한식</Link>
                  </li>
                  <li>
                    <Link to>매운맛</Link>
                  </li>
                </ul>
                <div className="categoriesBtn">
                  <button>
                    <i class="fas fa-arrow-left"></i>
                  </button>
                  <button>
                    <i class="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="filterWrap">
            <h2>
              #<span>신메뉴</span>추천 메뉴입니다.
            </h2>
            <div className="filterMenuBox">
              <p>GGUGIT의 주문 마감은 오전 7시입니다.</p>
              <ul className="filterMenu">
                <li>
                  <Link to>신메뉴순</Link>
                </li>
                <li>
                  <Link to>인기메뉴순</Link>
                </li>
                <li>
                  <Link to>높은 가격순</Link>
                </li>
                <li>
                  <Link to>낮은 가격순</Link>
                </li>
                <li>
                  <Link to>만족도순</Link>
                </li>
              </ul>
            </div>
          </div>
          <main>
            <ul>
              <List />
            </ul>
          </main>
        </div>
      </>
    );
  }
}

export default Menu;
