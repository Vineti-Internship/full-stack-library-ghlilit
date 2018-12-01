import React from 'react';
import Header from '../Layout/Header.js';
import BookTable from '../Small/Book_Table.js';
import {MyContext} from '../../MyContext'

const USERS = "http://localhost:4000/users"
const myEmail = "validaddress4@gmail.com"


class Books extends React.Component {

state = {
      books: [],
      isLoading: false,
      error: null,
      rerender: false,
    }

  rerender = () => {
      this.fetchData();
  }

  fetchData = async() => {
    const {myEmail} = this.context.state;
    this.setState({
       isLoading: true,
        });
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
        <Header search = {false}/>
        <BookTable data = {books} isLoading ={isLoading} user_id = {user_id} rerenderParent = {this.rerender} />
        </div>
      );
      
    }
  }

Books.contextType = MyContext;
  
export default Books;




  
