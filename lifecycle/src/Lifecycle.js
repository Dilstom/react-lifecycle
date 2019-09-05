import React, { Component } from 'react';

class Lifecycle extends Component {
 constructor() {
  super();
  this.state = {
   str: 'In the constructor',
   counter: 0,
   displayString: false,
   increment: false,
  };
 }

 // CDM runs after constructor and render
 componentDidMount() {
  console.log('in CDM');
  // setState(), forceupdate() triger Updating flow => render
  this.setState({ str: 'In the CDM' });
  //   this.setState({ str: 'In the CDM', displayString: true });
 }

 handleIncrement = () => {
  this.setState({ displayString: true, increment: true });
 };
 handleDecrement = () => {
  this.setState({ displayString: true, decrement: true });
 };
 componentDidUpdate(prevProps, prevState) {
  // setState() will lead to infinite loop (in Updating flow - setState() and forceUpdate() triger render)
  console.log('in CDU');
  //   console.log('prevProps', prevProps);
  //   console.log('prevState', prevState);
  // we can use conditional statement to setState()
  if (this.state.displayString) {
   if (this.state.increment) {
    this.setState({
     counter: this.state.counter + 1,
     displayString: false,
     increment: false,
    });
   } else if (this.state.decrement) {
    this.setState({ counter: this.state.counter - 1, decrement: false });
   }
  }
 }

 componentWillUnmount = () => {
  // runs when we close/hide this component
  console.log('in componentWillUnmount');
 };

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
