import React from 'react';
import MenuList from './MenuList/MenuList';
import './Menu.scss';
import { Link } from 'react-router-dom';
import { MENU_LIST } from './MenuList/MENU_LIST';
import { ORDER_LIST } from './MenuList/MENU_LIST';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = { lists: [] };
  }

  componentDidMount() {
    fetch('/data/Menu/data.json')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => {
        this.setState({ lists: data });
      });
  }

  render() {
    return (
      <nav>
        <div className="menu">
          <div className="menuWrap">
            <h1 className="title1">GGUGIT 메뉴</h1>
            <div className="categoriesFlexBox">
              <div className="titleBox">
                <Link to className="titleFont">
                  맛별
                </Link>
                <Link to className="titleFont">
                  나라별
                </Link>
              </div>
              <div className="category">
                <Link to className="font">
                  전체
                </Link>
                <ul className="categoriesBox">
                  {MENU_LIST.map(menu => {
                    return (
                      <li key={menu.id}>
                        <Link to>{menu.listName}</Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="categoriesBtn">
                  <button>
                    <i class="fas fa-arrow-left" />
                  </button>
                  <button>
                    <i class="fas fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="filterWrap">
            <h2 className="title2">
              #<span>신메뉴</span>추천 메뉴입니다.
            </h2>
            <div className="filterMenuBox">
              <p className="desc">GGUGIT의 주문 마감은 오전 7시입니다.</p>
              <ul className="filterMenu">
                {ORDER_LIST.map(order => {
                  return (
                    <li key={order.id}>
                      <Link to>{order.orderName}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <main>
            <ul className="productListBox">
              {this.state.lists.map(list => {
                return (
                  <MenuList
                    key={list.id}
                    name={list.name}
                    image_url={list.image_url}
                    cooking_time={list.cooking_time}
                    price={list.price}
                  />
                );
              })}
            </ul>
          </main>
        </div>
      </nav>
    );
  }
}

export default Menu;
