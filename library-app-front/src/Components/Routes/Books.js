import React from 'react';
import Header from '../Layout/Header.js';
import Table from '../Table.js';
import Footer from '../Layout/Footer.js';

class Books extends React.Component {

    render() {

      return (
        <div>
        <Header search = {true}/>
        <Table />
        <Footer />
        </div>
      );
      
    }
  }
  
  export default Books;




  
