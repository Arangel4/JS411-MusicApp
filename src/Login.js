import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import { Button, TextField } from '@material-ui/core';
import NavBar from './NavBar';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    // toggle allows the user to log in when the button is clicked.
    toggle = (e) => {
        e.preventDefault();
        this.setState({
            loggedIn: !this.state.loggedIn,
        });
    }

    render() {
        return (
            // If the user clicks on the button the web page will go from the login screen to the dashboard.
            this.state.loggedIn ? <Dashboard /> : (
                <div className="loginStyle">
                    <NavBar />
                    <TextField label="Username*" />
                    <br />
                    <TextField label="Password*" />
                    <br />
                    <div className="buttonStyle">
                        <Button variant="contained" color="primary" onClick={this.toggle}>Login</Button>
                    </div> 
                </div> 
            )
        );
    }
}
export default Login;
