import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import { Fragment } from 'react';
class App extends Component {

  state = {
    input2 : 0,
    username: 'Change This user name',
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }

  usernameChangedHandler1 = (event) => {
    this.setState({input2: event.target.value});
  }
  ender() {
    let menuItems = [];
    for (var i = 0; i < this.state.input2 ; i++) {
        menuItems.push( <UserOutput userName={this.state.username} />);
    }
    return <div>{menuItems}</div>;
}

  render() {
    return (
      <Fragment className="App">
        <UserInput 
          changed={this.usernameChangedHandler} 
          currentName={this.state.username} />
        <UserInput 
        changed={this.usernameChangedHandler1} 
          currentName={this.state.input2} />
      <div>
      {this.ender()}
        </div>
      </Fragment>
    );
  }
}

export default App;
