import React from 'react';
import Header from '../Layout/Header.js';
import BookTable from '../Small/Book_Table.js';

const USERS = "http://localhost:4000/users"
const myEmail = "validaddress4@gmail.com"

class Books extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      books: [],
      isLoading: false,
      error: null,
      rerender: false
    }
  }

  rerender = () => {
      this.fetchData();
  }

  fetchData = async() => {
    this.setState({ isLoading: true });
    //finds the authenticated user's books by his email
    //very inefficient))
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
        isLoading: false,
      });
  }
  
  async componentDidMount() {
    this.fetchData();
  }

    render() {
      const {books, isLoading, user_id} = this.state;
      return (
        <div>
        <Header search = {true}/>
        <BookTable data = {books} isLoading ={isLoading} user_id = {user_id} rerenderParent = {this.rerender} />
        </div>
      );
      
    }
  }
  
  export default Books;




  
