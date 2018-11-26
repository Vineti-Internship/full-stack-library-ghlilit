import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import Home from './Components/Routes/Home.js';
import Authors from './Components/Routes/Authors.js';
import Books from './Components/Routes/Books.js';
import Signup from './Components/Routes/Signup.js';
import Signin from './Components/Routes/Signin.js';




class App extends React.Component {
  render() {
    return (
     <BrowserRouter>
     <div>
      <Route path ="/" component={Home} exact/>
      <Route path ="/authors" component={Authors}/>
      <Route path ="/books" component={Books}/>
      <Route path ="/signup" component={Signup}/>
      <Route path ="/signin" component={Signin}/>
    </div>
     </BrowserRouter>

    );
  }
}

export default App;
