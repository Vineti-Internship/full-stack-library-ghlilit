import React from 'react';
import Header from '../Layout/Header.js';
import Cover from '../Cover.js';
class Home extends React.Component {

    render() {

      return (
        <div>
        <Header search = {false}/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Cover />
        </div>
      );
    }
  }
  
  export default Home;