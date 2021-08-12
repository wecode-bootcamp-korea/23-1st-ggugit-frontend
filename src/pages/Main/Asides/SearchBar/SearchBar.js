import React from 'react';
import { withRouter } from 'react-router-dom';

import './SearchBar.scss';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  }

  goToMenu = e => {
    e.preventDefault();
    const { inputValue } = this.state;
    const { history } = this.props;

    history.push(`/menu?KeyWord=${inputValue}`);

    // /products/search?
  };

  render() {
    const { goToMenu } = this;
    return (
      <div className="searchBox">
        <form className="searchForm" onSubmit={goToMenu}>
          <label className="searchLabel">
            <h1 className="searchTitle">검색어를 입력해주세요</h1>
            <div className="searchInputBox">
              <input
                className="searchInput"
                type="text"
                placeholder="메뉴명을 검색해주세요."
                onChange={e => {
                  this.setState({ inputValue: e.target.value });
                }}
              />
              <button className="searchButton">검색</button>
            </div>
          </label>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
