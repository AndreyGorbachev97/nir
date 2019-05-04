import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Body from './components/Body'
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
