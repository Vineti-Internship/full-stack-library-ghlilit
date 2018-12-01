import React from 'react';
import Header from '../Layout/Header.js';
import BookTable from '../Small/Book_Table.js';
import {MyContext} from '../../MyContext'

class Books extends React.Component {

  state = {
        books: [],
        isLoading: false,
        error: null,
        rerender: false,
    }

  rerender = () => {
    this.context.state.fetch();
    setTimeout(() => {this.fetchData()},500);
    }

  fetchData = () => {
    const {myEmail, json} = this.context.state;
    this.setState({
       isLoading: true,
      });

    let user = json.users.filter(function(user){
      return user.email === myEmail;
      });

    this.setState({
      books: user[0].books,
      user_id: user[0].id,
      isLoading: false,
      });
  }
  
  async componentDidMount() {
    setTimeout(() => {this.fetchData()},100);
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




  
