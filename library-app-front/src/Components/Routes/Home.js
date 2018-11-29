import React from 'react';
import { withAuth } from '@okta/okta-react';
import Header from '../Layout/Header.js';
import Cover from '../Small/Cover.js';

export default withAuth(
  class Home extends React.Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div className = "App-header">
          <button className="btn btn-light btn-lg" onClick={this.logout}>
            Logout
          </button>
        </div>
      ) : (
        <div className = "App-header">
          <button className="btn btn-dark btn-lg" onClick={this.login}>
            Login
          </button>
        </div>
      );

      return (
        <div>
        <Header search = {false}/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <Cover />
        <div className = "container text-center center-block">
          {mainContent}
        </div>
        </div> 
      );
    }
  }
);
  
