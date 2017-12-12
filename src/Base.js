import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Page from './PageComponents/Page';
import Home from './PageComponents/Home/Home';
import Profile from './PageComponents/Profile/Profile';
import Portfolio from './PageComponents/Portfolio/Portfolio';
import Resume from './PageComponents/Resume/Resume';
import Contact from './PageComponents/Contact/Contact';
import Layout from './Layout/Layout';
import Wrap from './Layout/Layout';
import './App.css';

class Base extends Component {

  constructor(props){
    super(props);
    this.state= {
      activePage: null
    };
    
  }

  componentDidMount() {
    let location = this.props.location.pathname;
    let page;
    
    switch( location ){
        case "/profile":
            page = 'profile';
            break;
        case "/portfolio":
            page = 'portfolio';
            break;
        case "/resume":
            page = 'resume';
            break;
        case '/contact':
            page = 'contact';
            break;
        default:
            page = null
            break;
    } 
    console.log(location,page);
    this.setState({activePage: page });
  }

  navClickHandler = (el, target ) => {
    //this.setState( (prevstate) => ({activePage:target}));
    //el.preventDefault();
    this.setActivePage(target);
    return false; // prevent default click. similar to e.preventDefault();
  }

  setActivePage = ( target = null ) => {
    this.setState({activePage: target});
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Layout activePage={this.state.activePage} itemClicked={this.navClickHandler}> 
        <Page 
          class="home"
          activePage={this.state.activePage}
        >
          <Home navClickHandler={this.navClickHandler} />
        </Page>
        <Page 
          class="profile"
          activePage={this.state.activePage}
          backClicked={() => { this.setActivePage()}}
        >
          <Profile/>
        </Page>
        <Page 
          class="portfolio"
          activePage={this.state.activePage}
          backClicked={() => { this.setActivePage()}}
        >
          <Portfolio />
        </Page>
        <Page 
          class="resume"
          activePage={this.state.activePage}
          backClicked={() => { this.setActivePage()}}
        >
          <Resume />
        </Page>
        <Page 
          class="contact"
          activePage={this.state.activePage}
          backClicked={() => { this.setActivePage()}}
        >
          <Contact />
        </Page>
      </Layout>
    );
  }
}

export default Base;
