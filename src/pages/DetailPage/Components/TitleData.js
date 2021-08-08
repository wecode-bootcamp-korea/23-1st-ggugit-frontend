import React, { Component } from 'react';
import './TitleData.scss';

class TitleData extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render() {
    const titleData = this.props.mealKitInfoList;
    // const titleNewData = this.setState.mealKitInfoList; //바뀌었을떄?
    // const isLimited = this.props.isLimited;

    return (
      <React.Fragment>
        <div className="titleWrap" key={titleData.id}>
          <div className="flagWrap">
            {titleData.limited ? (
              <>
                <span className="flagDeal">한정수량</span>
                <span className="flagNew">NEW</span>
              </>
            ) : null}
          </div>
          <h1 className="subTitle">{titleData.sub_name}</h1>
          <h1 className="title">{titleData.name}</h1>
          <h2 className="originInfo">원산지 : 상품정보 참조</h2>
        </div>
      </React.Fragment>
    );
  }
}

// {
//   수량.length > 5 ? 마감임박 : 컴포넌트;
// }
// {
//   수량.length > 0 ? 마감 : 컴포넌트;
// }

export default TitleData;

// class BookList extends React.Component {
//   state = {
//       books: []
//   }

//   fetchBooks = () => {
//       fetch('https://some-api.com/harry-potter')
//       .then((response) => response.json())
//       .then(booksList => {
//           this.setState({ books: booksList });
//       });
//   }

//   render() {
//       return (
//       <>
//           <button onClick={this.fetchBooks}>Load Books</button>
//           {this.books.length > 0 && (
//               <ul>
//                   {this.state.books.map((book) => (
//                       <li key={book.id}>{book.name}</li>
//                   ))}
//               </ul>
//           )}

//       </>
//       )
//   }
// }
