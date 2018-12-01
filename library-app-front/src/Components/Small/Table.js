import React from 'react';
import MainItem from './MainItem.js';

const introBody =  "Welcome to our library."
const introText = "Here you can see our authors and learn more about them.";
class Table extends React.Component {

    render() {
      const {data, isLoading} = this.props;
      if (isLoading || data.users === undefined) {
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
          <div className="col-12 col-md-12 text-center row row-offcanvas row-offcanvas-right">
              <div className="row">
                  {data.users.map((user,index) =>
                      <MainItem id = {user.id} details = {this.props.details} key ={user.name + index} title = {user.name} body = {user.description}></MainItem>
                  )}
              </div>
          </div>         
        </div>
      );
    }
  }
  
  export default Table;