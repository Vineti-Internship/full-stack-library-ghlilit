import React from 'react';
const BOOKS = "http://localhost:4000/books"

class MainItem extends React.Component {

  handleDeleteClick = () => {
    fetch(BOOKS + '/' + this.props.id, {
      method: 'delete'
    })
    this.props.rerenderParent();
  }

  handleEditClick = () => {
    this.props.editForm(this.props.id, this.props.title, this.props.body);
  }

  handleDetails = () => { 
    this.props.details(this.props.id);
  }

    render() {
      let buttons;
      if (this.props.buttons){
        buttons =
         <p>
          <button className="btn btn-secondary" onClick = {this.handleEditClick}>Edit </button>
          <button className="btn btn-danger"  onClick = {this.handleDeleteClick}>Delete </button>
        </p>
      }
      else{
        buttons = <p><button className="btn btn-secondary" onClick = {this.handleDetails}>  View details &raquo;</button></p>
      }

      return (
        <div className="col-6 col-lg-4">
              <h2>{this.props.title}</h2>
              <p>{this.props.body}</p>
              {buttons}
        </div>
      );
    }
  }
  
  export default MainItem;