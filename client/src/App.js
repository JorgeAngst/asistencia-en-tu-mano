import React, { Component } from 'react';
import './App.css';
import RecoveryServiceList from './components/recoveryServiceList'
import Navigation from './components/navigation'
import Home from './components/home'
import Profile from './components/profile'
import ProtectedRoute from './components/auth/protected-route'
import Signup from './components/auth/signup'
import Login from './components/auth/login'
import AuthServices from './service/auth-services'

import { Switch, Route } from 'react-router-dom'

class App extends Component {


  constructor(props) {
    super(props)
    this.state = { loggedInUser: null }
    this.services = new AuthServices()
  }

  setUser = userObj => this.setState({ loggedInUser: userObj })

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.services.loggedin()
        .then(response => this.setState({ loggedInUser: response }))
        .catch(x => this.setState({ loggedInUser: false }))
    }
  }

  render() {

    this.fetchUser()

    if (this.state.loggedInUser) {
      return (
        <div>
          <Navigation userInSession={this.state.loggedInUser} setTheUser={this.setUser} />
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute path='/profile' user={this.state.loggedInUser} component={Profile} />
            <Route path="/map" exact render={() => <RecoveryServiceList userInSession={this.state.loggedInUser} />} />
          </Switch>
        </div>
      )
    } else {
      return (
        <div>
          <Navigation userInSession={this.state.loggedInUser} />
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute user={this.state.loggedInUser} path='/profile' component={Profile} />
            <Route path="/map" exact render={() => <RecoveryServiceList userInSession={this.state.loggedInUser} />} />
            <Route path="/signup" render={() => <Signup setTheUser={this.setUser} />} />
            <Route path="/login" render={() => <Login setTheUser={this.setUser} />} />
          </Switch>
        </div>
      )
    }
  }
}

export default App;
