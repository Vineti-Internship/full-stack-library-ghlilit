import React from 'react';
import NavItem from '../Small/NavItem.js';
import SearchButton from '../Small/SearchButton.js';


class Header extends React.Component {
    render() {
      return (

    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <span className="navbar-brand">Library</span>
        
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        
            <ul className="navbar-nav mr-auto">
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