import React from 'react';

class NavItem extends React.Component {
    render() {
      return (
          <li class="nav-item ">
            <a class="nav-link" href={this.props.link}>{this.props.text}</a>
          </li>
      );
    }
  }
  
  export default NavItem;