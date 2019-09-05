import React, { Component } from 'react';

class Lifecycle extends Component {
 constructor() {
  super();
  this.state = {
   str: 'In the constructor',
   counter: 0,
  };
 }

 // CDM runs after constructor and render
 componentDidMount() {
  console.log('in CDM');
  // setState(), forceupdate() triger Updating flow => render
  this.setState({ str: 'In the CDM' });
 }

 componentDidUpdate(prevProps, prevState) {
  console.log('in CDU');
 }

 render() {
  console.log('in render');
  return (
   <div>
    <h3>Counter: {this.state.counter}</h3>
    <h4>The current string message: {this.state.str}</h4>
    <button onClick={this.handleIncrement}>+</button>
    <button onClick={this.handleDecrement}>-</button>
   </div>
  );
 }
}

export default Lifecycle;
