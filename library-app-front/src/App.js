import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Home from './Components/Routes/Home.js';
import Authors from './Components/Routes/Authors.js';
import Books from './Components/Routes/Books.js';
import Login from './Components/Auth/Login.js';
import {MyProvider} from './MyContext'


function onAuthRequired({ history }) {
  history.push('/login');
}

class App extends React.Component {
  render() {
    return (
     <BrowserRouter>
      <Security issuer='https://dev-312840.oktapreview.com/oauth2/default'
                    client_id='0oahvfqmm5xDcVBV80h7'
                    redirect_uri={window.location.origin + '/implicit/callback'}
                    onAuthRequired={onAuthRequired} 
                    >
          <div>         
            <MyProvider>
            <Route path ="/" component={Home} exact/>
            <Route path ="/authors" component={Authors}/>
            <SecureRoute path ="/books"  component={Books}/>
            <Route path='/login' render={() => <Login baseUrl='https://dev-312840.oktapreview.com' />} />
            <Route path='/implicit/callback' component={ImplicitCallback} />
            </MyProvider>
          </div>
        </Security>
     </BrowserRouter>

    );
  }
}

export default App;
