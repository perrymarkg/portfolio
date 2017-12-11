import React, { Component } from 'react';
import Page from './PageComponents/Page';
import Home from './PageComponents/Home/Home';
import Profile from './PageComponents/Profile/Profile';
import Portfolio from './PageComponents/Portfolio/Portfolio';
import Resume from './PageComponents/Resume/Resume';
import Contact from './PageComponents/Contact/Contact';
import Layout from './Layout/Layout';
import './App.css';

const navItems = ["Profile", "Portfolio", "Resume", "Contact"];

class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      activePage: null
    };
  }

  navClickHandler = (el, target ) => {
    //this.setState( (prevstate) => ({activePage:target}));
    el.preventDefault();
    this.setActivePage(target);
    return false; // prevent default click. similar to e.preventDefault();
  }

  setActivePage = ( target = null ) => {
    this.setState({activePage: target});
  }

  render() {
    let homeNav = [...navItems];
    homeNav.unshift("Home");
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

export default App;
