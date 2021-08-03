import React from 'react';
import List from './List/List';
import './Menu.scss';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  render() {
    return (
      <>
        <div className="menuWrap">
          <div className="menuFilterBox">
            <h1>GGUGIT 메뉴</h1>
            <div className="menuCategories">
              <Link to>테마별</Link>
              <div className="categoryContainer">
                <Link to>
                  <span>전체</span>
                </Link>
                <div className="category">
                  <Link to>KIDS</Link>
                  <Link to>월간베스트</Link>
                  <Link to>신메뉴</Link>
                  <Link to>한식</Link>
                  <Link to>매운</Link>
                </div>
                <button>
                  <i class="fas fa-arrow-left"></i>
                </button>
                <button>
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="filterBox">
            <h2>#"신메뉴"추천 메뉴입니다.</h2>
            <div className="filterMenuBox">
              <p>GGUGIT의 주문 마감은 오전 7시입니다.</p>
              <ul className="filterMenu">
                <li>
                  <Link to>신메뉴순</Link>
                </li>
                <li>인기메뉴순</li>
                <li>높은 가격순</li>
                <li>낮은 가격순</li>
                <li>만족도순</li>
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
