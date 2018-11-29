import React from 'react';
import Header from '../Layout/Header.js';
import Table from '../Small/Table.js';
import Footer from '../Layout/Footer.js';
class Authors extends React.Component {

    render() {

      return (
        <div>
        <Header search = {true}/>
        <Table author = {true}/>
        <Footer />
        </div>
      );
    }
  }
  
  export default Authors;