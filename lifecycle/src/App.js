import React, { Component } from 'react';
import Lifecycle from './Lifecycle';
import './App.css';

class App extends Component {
 constructor() {
  super();
  this.state = {
   displayComponent: false,
  };
 }
 handleDisplay = () => {
  this.setState({ displayComponent: !this.state.displayComponent });
 };

 render() {
  return (
   <div className="App">
    <h1>New Project</h1>
    <button onClick={this.handleDisplay}>
     {this.state.displayComponent ? 'Hide' : 'Display'} Component
    </button>
    {this.state.displayComponent ? <Lifecycle /> : null}
   </div>
  );
 }
}

export default App;
