import React from 'react';
import Header from '../Layout/Header.js';
import BookTable from '../Small/Book_Table.js';

const USERS = "http://localhost:4000/users"
const BOOKS = "http://localhost:4000/books/"
const myEmail = "validaddress4@gmail.com"

class Books extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      books: [],
      isLoading: false,
      error: null,
    }
  }


  async componentDidMount() {
    this.setState({ isLoading: true });
    //finds the authenticated user's id by his email
    let json;
    try {
      let result = await fetch(USERS);
      json = await result.json();
    } catch (error) {
      }
      let user = json.users.filter(function(user){
         return user.email === myEmail;
      });
      let user_id = (user[0].id);
      let books = (user[0].books)
      this.setState({
        books,
        user_id,
      });
  }

    render() {
      console.log(this.state.books);
      return (
        <div>
        <Header search = {true}/>
        <BookTable data = {this.state.books} isLoading ={this.state.isLoading}/>
        </div>
      );
      
    }
  }
  
  export default Books;




  
