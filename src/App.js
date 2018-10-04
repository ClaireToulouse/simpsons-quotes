import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Lamp from "./Lamp";
import Quotes from "./Quotes";

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
  }
  handleClick = () => {
    this.setState({ on: !this.state.on });
  };
  render() {
    const atWork = this.state.on ? 'Homer is working !' : 'Homer is NOT working';
    const spinning = this.state.on ? 'faster' : 'App-logo';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={spinning} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button 
          onClick={this.handleClick}
          className={atWork}>{atWork}</button>
        </header>
        <Lamp on />
        <Lamp />       
        <Quotes/>
      </div>
    );
  }
}

export default App;