import React from 'react';
import MainItem from './MainItem.js';

const introBody =  "Welcome to our library."
const introText = "Here you can see our authors and learn more about them.";
class BookTable extends React.Component {

    //|| data.books === undefined
    render() {
      const {data, isLoading} = this.props;
      console.log(data);
      if (isLoading ) {
          return (
            <div className="jumbotron text-center center-block">
                <p>Loading...</p>
            </div>
          );
      }

      return (
        <div className="container">
            <div className="jumbotron text-center center-block">
                <h1>{introBody}</h1>
                <p>{introText}</p>
            </div>
          {/* <div className="col-12 col-md-12 text-center row row-offcanvas row-offcanvas-right">
              <div className="row">
                  {data.books.map((book,index) =>
                      <MainItem key ={book.title + index} title = {book.title} body = {book.description}></MainItem>
                  )}
              </div>
          </div>          */}
        </div>
      );
    }
  }
  
  export default BookTable;