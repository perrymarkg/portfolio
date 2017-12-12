import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Base from './Base';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      activePage: null
    };
  }

  componentDidMount() {
    
  }

  

  navClickHandler = (el, target ) => {
    //this.setState( (prevstate) => ({activePage:target}));
    el.preventDefault();
    this.setActivePage(target);
    return false; // prevent default click. similar to e.preventDefault();
  }

  setActivePage = ( target = null ) => {
    this.setState({activePage: target});
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Route path="/" component={Base} />
    );
  }
}

export default App;
