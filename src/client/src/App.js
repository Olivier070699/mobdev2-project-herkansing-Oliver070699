/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Signup from './app/pages/sign-up'
import LoginForm from './app/pages/login'

/*
Import Main application
*/
import Main from './app/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <Main />
      </Router>
    );
  }

  constructor() {
    super()
    this.state = {
        loggedIn: false,
        username: null,
        auth: ['login', 'signup']
    }
    this.componentDidMount = this.componentDidMount.bind(this)

  }
  
  componentDidMount() {
    let storage = localStorage.getItem('userId');
    if (storage !== null) {
        this.setState({auth: ['Logout']})
    } else {
        this.setState({auth: ['login', 'signup']})

    }
  }

  deleteStorage = (e) => {

      const el = e.target.className;
      console.log(el)
      if (el == "Logout") {
          e.preventDefault();
          // ...do your state change...
          localStorage.removeItem("userId")
          localStorage.removeItem("userToken")
          localStorage.removeItem("notiSeen")


          window.location.reload("/")

      }
  }

}

export default App;