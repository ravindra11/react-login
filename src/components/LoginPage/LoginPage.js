import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { userActions } from "../actions"
class LoginPage extends Component {
    constructor(props) {
        super(props);
        // reset login status
        this.props.dispatch(userActions.logout());
        this.state = {
            username = "",
            password = "",
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { dispatch } = this.props;
        const { username, password } = this.state;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2> Login </h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={"form-group" + (submitted && !userName) ? ' has-error' : ''}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username && <div className="help-block">Username is required </div>}
                    </div>
                    <div className={"form-group" + (submitted && !password) ? ' has-error' : ''}>
                        <label htmlFor="password">password</label>
                        <input type="password" className="form-control" name="pasword" value={password} onChange={this.handleChange} />
                        {submitted && !password && <div className="help-block">Password is required </div>}
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" >Login</button>
                        <Link to="/register" className="btn btn-link"> Register</Link>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    }
}

const connectedLoginPage = conncet(mapStateToProps)(LoginPage);

export { connectedLoginPage as LoginPage };


