// https://stackblitz.com/edit/react-redux-registration-login-example
import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import { connect } from 'react-redux';

import { HomePage } from "../HomePage";
import { PrivateRoute } from "../PrivateRoute";
import { LoginPage } from "../LoginPage"

class App extends Component {
  constructor(props) {
    super(props);
    const { } = this.props;
  }
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <Router >
              <div>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return { alert };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };

