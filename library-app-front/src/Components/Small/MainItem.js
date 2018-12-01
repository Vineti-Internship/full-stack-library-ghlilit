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
    this.props.editForm(this.props.id);
  }

    render() {
      let buttons;
      if (this.props.buttons){
        buttons =
         <p>
          <a className="btn btn-secondary" onClick = {this.handleEditClick} role="button">Edit </a>
          <a className="btn btn-danger"  onClick = {this.handleDeleteClick} role="button">Delete </a>
        </p>
      }
      else{
        buttons = <p><a className="btn btn-secondary" href="/" role="button">View details &raquo;</a></p>
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