import React from 'react';

class NavItem extends React.Component {
    render() {
      return (
          <li className="nav-item ">
            <a className="nav-link" href={this.props.link}>{this.props.text}</a>
          </li>
      );
    }
  }
  
  export default NavItem;