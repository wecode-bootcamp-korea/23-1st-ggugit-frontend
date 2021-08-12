import React from 'react';
import MenuList from '../MenuList/MenuList';
import { ORDER_LIST } from '../MenuList/MENU_LIST';

class MenuContainer extends React.Component {
  render() {
    const { subMenu, ordermenu } = this.props;

    return (
      <>
        <div className="filterWrap">
          <h2 className="title2">{`${
            subMenu ? subMenu.listName : '전체'
          }추천 메뉴입니다.`}</h2>
          <div className="filterMenuBox">
            <p className="desc">GGUGIT의 주문 마감은 오전 7시입니다.</p>
            <ul className="filterMenu">
              {ORDER_LIST.map(order => {
                const isClicked = ordermenu && order.id === ordermenu.id;
                return (
                  <li key={order.id}>
                    <a
                      href="#none"
                      onClick={() => this.props.onChangeOrder(order)}
                      className={isClicked ? 'clicked' : ''}
                    >
                      {order.orderName}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <main>
          <ul className="productListBox">
            {this.props.lists.map(list => {
              return (
                <MenuList
                  key={list.id}
                  id={list.id}
                  limited={list.limited}
                  new={list.new}
                  name={list.name}
                  image_url={list.image_url[0]}
                  cooking_time={list.cooking_time}
                  discount={list.discount.toLocaleString()}
                  price={Math.floor(list.price).toLocaleString()}
                  sales={list.sales.toLocaleString()}
                />
              );
            })}
          </ul>
        </main>
      </>
    );
  }
}
export default MenuContainer;
