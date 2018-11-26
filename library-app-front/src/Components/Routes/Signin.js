import React from 'react';

class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render() {

      return (
        <div  class="container text-center inner cover">
        <form onSubmit={this.handleSubmit}>
                <label>
                  Name:
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                  Email:
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                  Description:
                  <textarea>
                    
                </textarea>
                </label>
                <br/>
                <input type="submit" value="Submit" />
              </form>
       </div>
      );
      
    }
}
  export default Signin;