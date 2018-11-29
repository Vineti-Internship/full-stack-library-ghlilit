import React from 'react';
import Header from '../Layout/Header.js';
import Table from '../Small/Table.js';

class Authors extends React.Component {

    render() {

      return (
        <div>
        <Header search = {true}/>
        <Table author = {true}/>
        </div>
      );
    }
  }
  
  export default Authors;