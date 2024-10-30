import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Layout/Header/Header.jsx';
class App extends Component {
  render(){
    return(
    <Router>
      <Header/>
      <Routes>
        <Route path='/' Component={Home}>

        </Route>
      </Routes>
    </Router>
    )
  }
    
  
}

export default App;
