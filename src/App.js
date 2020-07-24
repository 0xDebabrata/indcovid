import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Donation from './components/Donation';
import Data from './components/Data'
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Navbar />
        <Route path='/' exact component={Data} />
        <Route path='/donate' component={Donation} />
      </BrowserRouter>
    )
  }
}

export default App;
