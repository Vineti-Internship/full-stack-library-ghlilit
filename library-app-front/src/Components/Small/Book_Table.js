import React from 'react';
import MainItem from './MainItem.js';

const introBody =  "Welcome to your corner"
const introText = "Here you can see your books, edit, delete them and add more.";
const BOOKS = "http://localhost:4000/books"
class BookTable extends React.Component {

    state = {
        form: false,
        title: '',
        content: '',
        book_id: null,
    };
    
    handleTitleChange = (event) => {
        this.setState({title: event.target.value});
        }

    handleContentChange = (event) => {
        this.setState({content: event.target.value});
        }

    makeForm = () => {
        this.setState({
            book_id: null,
            form: true,
        })
    }

    editForm = (book_id, title, content) => {
        this.setState({
            form: true,
            title,
            content,
            book_id,
        })
        console.log("I did it");
    }

    submit = () =>{
        console.log(this.state);
            if(this.state.book_id !== null){
                this.patchRequest();
            }
            else{
                this.request(BOOKS, "POST");
                this.setState({
                    book_id: null,
                })
            }
    }

    patchRequest = () => {
        const URL = `${BOOKS}/${this.state.book_id}`;
        this.request(URL, "PATCH");
    }

    request = (URL, method) => {
        const {title, content} = this.state;
        const {user_id} = this.props;
        const data = {
                user_id,
                title,
                description: content
        }
        const Param = {
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data),
            method: method
    }
        fetch(URL, Param).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => {
            console.error('Error:', error)
        });
        this.setState({
            form: false,
            title: '',
            content: '',
            })
        this.props.rerenderParent();
    }

    render() {
      const {data, isLoading} = this.props;
      const {form} = this.state;

      if (isLoading) {
          return (
            <div className="jumbotron text-center center-block">
                <p>Loading...</p>
            </div>
          );
      }

      if(form){
          return (
        <div className = "container"> 
            <div className="jumbotron text-center center-block">
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Title (Can't be blank)" value={this.state.title} onChange={this.handleTitleChange}/>
                        <br/>
                    <textarea className="form-control" placeholder="Content (Can't be blank)" rows="5" value={this.state.content} onChange={this.handleContentChange}></textarea>
                </div>
                     <br/>
                <button className="btn btn-dark btn-lg" onClick ={this.submit}>Submit</button>
        </div>
        </div> 
          );
      }

      return (
        <div className="container">
            <div className="jumbotron text-center center-block">
                <h1>{introBody}</h1>
                <p>{introText}</p>
                    <br/>
                <button className="btn btn-dark btn-lg" onClick ={this.makeForm}>Add a book</button>
            </div>
            <div className="col-12 col-md-12 text-center row row-offcanvas row-offcanvas-right">
              <div className="row">
                  {data.map((book,index) =>
                      <MainItem rerenderParent = {this.props.rerenderParent} editForm ={this.editForm} id = {book.id} buttons = {true} key ={book.title + index} title = {book.title} body = {book.description}></MainItem>
                  )}
              </div>
          </div>         
        </div>
      );
    }
  }
  
  export default BookTable;