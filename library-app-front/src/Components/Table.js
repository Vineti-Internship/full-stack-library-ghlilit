import React from 'react';
import MainItem from './MainItem.js';

class Table extends React.Component {
    render() {
  let gibberish = "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.";
    let introBody;
    let introText;
      if (this.props.author){
        introBody = "Authors and their works";
        introText = gibberish;
      }
      else{
        introBody = "Browse by books";
        introText = gibberish;
      }

      return (
        <div>
        <div class="container">
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
        </div> 
        </div>
      );
      
    }
  }
  
  export default Table;