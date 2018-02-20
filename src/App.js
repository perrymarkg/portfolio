import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import axios from 'axios';

import Home from './PageComponents/Home/Home';
import Profile from './PageComponents/Profile/Profile';
import Portfolio from './PageComponents/Portfolio/Portfolio';
import Resume from './PageComponents/Resume/Resume';
import Contact from './PageComponents/Contact/Contact';
import Layout from './Layout/Layout';
import Error from './PageComponents/Error/Error'

import './App.css';

const baseTitle = "Perry Mark Guinjicna II | Web Developer";

class App extends Component {
  
  constructor(props){
    super(props);
    this.state= {
      activePage: null,
      portfolio: [],
      skills: [],
      employment: [],
      pdf:''
    };  
  }

  componentDidMount(){
    this.setTitle(this.props.location.pathname);

    axios.get('/portfolio.json').then( response => {
      this.setState({
        portfolio: response.data.portfolio, 
        skills: response.data.resume.skills,
        employment: response.data.resume.employment,
        pdf: response.data.resume.pdf
      })
    })
  }

  componentWillUpdate(nextProps){
    if( nextProps.location.pathname !== this.props.location.pathname ){
      this.setTitle(nextProps.location.pathname);
      return true;
    }
    return false;
    
  }

  setTitle( pathname ){
    let title;
    switch( pathname ){
      case "/":
        title = baseTitle;
        break;
      case "/profile":
        title = "Profile | " +baseTitle;
        break;
      case "/portfolio":
        title = "Portfolio | " +baseTitle;
        break;
      case "/resume":
        title = "Resume | " +baseTitle;
        break;
      case "/contact":
        title = "Contact | " +baseTitle;
        break;
      default:
        title = "Page Not Found"
        break;
    }
    window.document.title = title;
  }

  render() {
    
    return (
      <Layout activePage={this.state.activePage} itemClicked={this.navClickHandler}>
        <Switch>
        <Route path="/" exact render={() => (<Home class="home"/>)}  />
        <Route path="/profile" exact render={(routeProps) => (<Profile class="profile" {...routeProps}/>)}  />
        <Route path="/portfolio" exact render={(routeProps) => (<Portfolio class="portfolio" {...routeProps} portfolio={this.state.portfolio} />)}  />
        <Route path="/resume" exact render={(routeProps) => (<Resume class="resume" {...routeProps} skills={this.state.skills} employment={this.state.employment} pdf={this.state.pdf} />)}  />
        <Route path="/contact" exact render={(routeProps) => (<Contact class="contact" {...routeProps}/>)}  />
        <Route path="/:string" render={(routeProps) => (<Error class="error"  {...routeProps}/>)}  />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
