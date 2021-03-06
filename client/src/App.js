import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
// importing patient pages
import About from './pages/About'
import Splash from './pages/Splash'
import Patient from './pages/Patient'
import Conditions from './pages/Conditions'
import Advertisement from './pages/Advertisement'
import FactsStats from './pages/FactsStats'
import Contact from './pages/Contact'
import LegalStates from './pages/LegalStates'

// importing doctor pages
import Doctor from './pages/Doctor'
import DoctorLP from './pages/DoctorLP'
import SignUp from './pages/SignUp'

// importing Adming page(s)
// import Admin from './pages/Admin'

import './App.css';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>

          {/* Patient Pages in this section */}
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/advertisement">
                <Advertisement />
              </Route>
              <Route exact path="/conditions">
                <Conditions />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/stats-facts">
                <FactsStats />
              </Route>
              <Route exact path="/legal-states">
                <LegalStates />
              </Route>
              <Route exact path="/patient">
                <Patient />
              </Route>
          
          {/* Doctor Pages in this section */}
              <Route exact path="/doctor">
                <Doctor />
              </Route>
              <Route exact path="/sign-up">
                <SignUp />
              </Route>
              <Route exact path="/doctorLP">
                <DoctorLP />
              </Route>
              <Route exact path="/pricing">

              </Route>

          {/* Admin route(s) in this section */}
              <Route exact path="/admin">

              </Route>

      </Switch>
    </Router>
    )}
}

export default App;