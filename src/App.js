import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import homePage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact path='/' component={homePage}/>
      </div>
    );
  }
}

export default App;
