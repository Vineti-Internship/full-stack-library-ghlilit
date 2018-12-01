import React from 'react'
export const MyContext = React.createContext();
const USERS = "http://localhost:4000/users"

export class MyProvider extends React.Component {

  constructor(){
    super();
      this.state = {
        json: '',
        myEmail: "validaddress4@gmail.com",
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
