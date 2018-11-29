import React from 'react';
import Header from '../Layout/Header.js';
import Table from '../Small/Table.js';

const API = "http://localhost:4000"
const route = "/books"
class Books extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      books: [],
      isLoading: false,
      error: null,
    }
  }

    render() {

      return (
        <div>
        <Header search = {true}/>
        <Table />
        </div>
      );
      
    }
  }
  
  export default Books;




  
