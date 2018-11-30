import React from 'react';

class MainItem extends React.Component {

    render() {

      return (
        <div className="col-6 col-lg-4">
              <h2>{this.props.title}</h2>
              <p>{this.props.body}</p>
              <p><a className="btn btn-secondary" href="/" role="button">View details &raquo;</a></p>
        </div>
      );
      
    }
  }
  
  export default MainItem;