import React from 'react';
import Header from '../Layout/Header.js';
import Table from '../Small/Table.js';
import Footer from '../Layout/Footer.js';
import axios from 'axios'

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
        <Footer />
        </div>
      );
      
    }
  }
  
  export default Books;




  
