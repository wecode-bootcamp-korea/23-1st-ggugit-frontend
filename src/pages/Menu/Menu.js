import React from 'react';
import './Menu.scss';
import MenuCategory from './MenuCategory/MenuCategory';
import MenuContainer from './MenuContainer/MenuContainer';
import { ORDER_LIST } from './MenuList/MENU_LIST';
import { MENU_LIST_TASTE } from './MenuList/MENU_LIST';
import { MENU_LIST_TYPE } from './MenuList/MENU_LIST';
import { API } from '../../config';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      selectedTaste: true,
      selectedSubMenu: MENU_LIST_TASTE[0],
      orderlist: ORDER_LIST[0],
    };
  }

  componentDidMount() {
    fetch(this.getProductsUrl())
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ lists: data.results });
      });
  }

  getProductsUrl = () => {
    const subMenu = this.state.selectedSubMenu;
    const order = this.state.orderlist;
    let url = API.PRODUCT;
    if (subMenu !== null) {
      url += `?theme=${this.state.selectedTaste ? 'taste' : 'country'}&number=${
        subMenu.id
      }&order=${order.id}`;
    }
    return url;
  };

  componentDidUpdate(prevProps, prevState) {
    let thisId =
      this.state.selectedSubMenu === null ? '' : this.state.selectedSubMenu.id;
    let prevId =
      prevState.selectedSubMenu === null ? '' : prevState.selectedSubMenu.id;
    let thisOrder =
      this.state.orderlist === null ? '' : this.state.orderlist.id;

    let prevOrder = prevState.orderlist === null ? '' : prevState.orderlist.id;

    let changedTitle = prevState.selectedTaste !== this.state.selectedTaste;

    if (changedTitle || thisId !== prevId || thisOrder !== prevOrder) {
      console.log(this.getProductsUrl());
      fetch(this.getProductsUrl())
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({ lists: data.results });
        });
    }
  }

  onChangeMenu = event => {
    event.preventDefault();
    const { name } = event.target;

    this.setState({
      selectedTaste: name === 'taste',
      selectedSubMenu:
        name === 'taste' ? MENU_LIST_TASTE[0] : MENU_LIST_TYPE[0],
      orderlist: ORDER_LIST[0],
    });
  };

  onChangeSubMenu = subMenu => {
    this.setState({ selectedSubMenu: subMenu });
  };

  onChangeOrder = ordermenu => {
    this.setState({ orderlist: ordermenu });
  };

  render() {
    return (
      <nav>
        <div className="menu">
          <MenuCategory
            selectedTaste={this.state.selectedTaste}
            subMenu={this.state.selectedSubMenu}
            onChangeMenu={this.onChangeMenu}
            onChangeSubMenu={this.onChangeSubMenu}
          />
          <MenuContainer
            lists={this.state.lists}
            subMenu={this.state.selectedSubMenu}
            onChangeOrder={this.onChangeOrder}
            ordermenu={this.state.orderlist}
          />
        </div>
      </nav>
    );
  }
}

export default Menu;
