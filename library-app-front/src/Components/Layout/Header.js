import React from 'react';
import NavItem from '../NavItem.js';
import SearchButton from '../SearchButton.js';

class Header extends React.Component {
    render() {
      return (

    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <span class="navbar-brand">Library</span>
        
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        
            <ul class="navbar-nav mr-auto">
            <NavItem text ="Home" link = "/"/>
            <NavItem text ="Authors" link = "/Authors"/>
            <NavItem text ="My books" link = "/Books"/>
            </ul>
            {this.props.search && <SearchButton/>}
        </div>
    </nav>
      );
    }
  }
  
  export default Header;