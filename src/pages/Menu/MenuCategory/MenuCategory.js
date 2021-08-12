import React from 'react';
import { MENU_LIST_TYPE } from '../MenuList/MENU_LIST';
import { MENU_LIST_TASTE } from '../MenuList/MENU_LIST';

class MenuCategory extends React.Component {
  goToDetail = () => {
    this.props.history.push('/detail/:id');
  };
  render() {
    const { selectedTaste, subMenu } = this.props;

    const menuList = selectedTaste ? MENU_LIST_TASTE : MENU_LIST_TYPE;

    return (
      <div className="menuWrap">
        <h1 className="title1">GGUGIT 메뉴</h1>
        <div className="categoriesFlexBox">
          <div className="titleBox">
            <a
              href="#none"
              name="taste"
              className={`titleFont ${selectedTaste ? 'clicked' : ''}`}
              onClick={this.props.onChangeMenu}
            >
              맛별
            </a>
            <a
              href="#none"
              name="type"
              className={`titleFont ${selectedTaste ? '' : 'clicked'}`}
              onClick={this.props.onChangeMenu}
            >
              나라별
            </a>
          </div>
          <div className="category">
            <a
              href="#none"
              className={`font ${!subMenu && 'clicked'}`}
              onClick={() => this.props.onChangeSubMenu(null)}
            >
              전체
            </a>
            <ul className="categoriesBox">
              {menuList.map(menu => {
                const isClicked = subMenu && menu.id === subMenu.id;
                return (
                  <li key={menu.id}>
                    <a
                      href="#none"
                      className={isClicked && 'clicked'}
                      onClick={() => this.props.onChangeSubMenu(menu)}
                    >
                      {menu.listName}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="categoriesBtn">
              <button>
                <i className="fas fa-arrow-left" />
              </button>
              <button>
                <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MenuCategory;
