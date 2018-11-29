import React from 'react';
import MainItem from './MainItem.js';
import Loading from './Loading.js';
import axios from 'axios';


const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class Table extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      error: null,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const result = await axios.get(API + DEFAULT_QUERY);

      this.setState({
        data: result.data.hits,
        isLoading: false
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }
  }

    render() {
      const {isLoading} = this.state;
      console.log(this.state);

       if (isLoading) {
        return (
       <div class="jumbotron text-center center-block">
            <p1>Loading...</p1>
      </div>
          );
       }
  
      return (
        <div>
         {/* <div class="container">
       <div class="text-center row row-offcanvas row-offcanvas-right">
       <div class="jumbotron text-center center-block">
            <h1>{introBody}</h1>
            <p>{introText}</p>
          </div>
      </div>
      <div class="col-12 col-md-12">
          <div class="row">
          <MainItem title = "Body" body = {gibberish}></MainItem>
          <MainItem title = "Body" body = {gibberish}></MainItem>
          <MainItem title = "Body" body = {gibberish}></MainItem>
          <MainItem title = "Body" body = {gibberish}></MainItem>
          <MainItem title = "Body" body = {gibberish}></MainItem>
          <MainItem title = "Body" body = {gibberish}></MainItem>
          </div>
        </div>
        </div>   */}
        </div>
      );
      
    }
  }
  
  export default Table;