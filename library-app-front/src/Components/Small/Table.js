import React from 'react';
import MainItem from './MainItem.js';
import {MyContext} from '../../MyContext'

const introBody =  "Welcome to our library."
const introText = "Here you can see our authors and learn more about them.";
class Table extends React.Component {

    state = {
        details: false,
        author: []
    }

    details = author_id => {
        const author = this.context.state.json.users.filter(function(user){
            return user.id === author_id;
         });
         this.setState({
            details: true,
            author,
        })
    }

    render() {
      const {data, isLoading} = this.props;
      if (isLoading || data.users === undefined) {
          return (
            <div className="jumbotron text-center center-block">
                <p>Loading...</p>
            </div>
          );
      }

      if(this.state.details)
      return (
        <div  className="container text-center center-block">
        <br/> <br/> <br/> <br/> <br/>
        <main className="inner cover">
         <h1 className="cover-heading">{this.state.author[0].name}</h1>
         <p className="lead">{this.state.author[0].description}</p>
       </main>
       </div>
      )

      return (
        <div className="container">
            <div className="jumbotron text-center center-block">
                <h1>{introBody}</h1>
                <p>{introText}</p>
            </div>
          <div className="col-12 col-md-12 text-center row row-offcanvas row-offcanvas-right">
              <div className="row">
                  {data.users.map((user,index) =>
                      <MainItem id = {user.id} details = {this.details} key ={user.name + index} title = {user.name} body = {user.description}></MainItem>
                  )}
              </div>
          </div>         
        </div>
      );
    }
  }

  Table.contextType = MyContext;
  export default Table;