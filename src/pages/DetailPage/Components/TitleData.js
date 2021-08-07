import React, { Component } from 'react';
import './TitleData.scss';

class TitleData extends Component {
  constructor(props) {
    super(props);
    this.props = {
      mealKitInfoList: [],
    };
  }

  render() {
    const titleData = this.props.mealKitInfoList;
    console.log(titleData);
    return (
      <>
        <div className="titleWrap" key={titleData.id}>
          <div className="flagWrap">
            <span className="flagDeal">{titleData.limited}</span>
            <span className="flagNew">{titleData.new}</span>
          </div>
          <h1 className="subTitle">{titleData.sub_name}</h1>
          <h1 className="title">{titleData.name}</h1>
          <h2 className="originInfo">원산지 : 상품정보 참조</h2>
        </div>
        <select>
          {Object.keys(titleData.date).map((date, index) => (
            <option key={index}>
              <div>{date.month}</div>
              <div>{date.day}</div>
            </option>
          ))}
        </select>
      </>
    );
  }
}

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
