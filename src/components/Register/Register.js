import React, { Componeny } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { userActions } from ""

class RegisterPage extends Comment {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstname = "",
                lastname = "",
                username = "",
                password = ""
            },
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({
            ...user,
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstname && user.lastname && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }


    render() {
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <form name="form-group" onSubmit={this.handleSubmit}>
                    <div className={"form-group" + (submitted && !user.firstname) ? ' has-erro' : ''}>
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" className="form-control" name="firstname" value={user.firstname} onChange={this.handleChange} />
                        {submitted && !user.firstname && <div className="help-block">First Name is required</div>}
                    </div>
                    <div className={"form-group" + (submitted && !user.lastname) ? ' has-error' : ''}>
                        <label htmlFor="lastname">Last Name</label>
                        <input type="password" className="form-control" name="lastname" value={user.lastname} onChange={this.handleChange} />
                        {submitted && !user.lastName && <div className="help-block">Last Name is required</div>}
                    </div>
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                        {submitted && !user.username && <div className="help-block">Username is required</div>}
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password && <div className="help-block">Password is required</div>}
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return { registering };
}

const connectedRegistePage = connect(mapStateToProps)(RegisterPage);
export { connectedRegistePage as RegisterPage };