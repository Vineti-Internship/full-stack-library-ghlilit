import React from 'react'
export const MyContext = React.createContext();
const USERS = "http://localhost:4000/users"

export class MyProvider extends React.Component {

  constructor(){
    super();
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
      this.state = {
        json: '',
        myEmail: '',
        fetch: async() =>{
          let json;
            try {
              let result = await fetch(USERS);
              json = await result.json();
            } catch (error) {
              }
              this.setState({
                json,
              })
            }
          }

  if (idToken.idToken!==undefined){
    this.setState({
      myEmail: idToken.idToken.claims.email,
    })
  }
  }
componentDidMount = () => {
  this.state.fetch();
}
  render() {
    return (
      <MyContext.Provider value = {{state: this.state}} fetch = {this.fetch}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
