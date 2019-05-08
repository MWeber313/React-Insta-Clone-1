import React from 'react';
import { Button } from 'reactstrap';
import './authenticate.scss'

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            user: "",
            pass: ""
        }
    }

    login = () => {
        localStorage.setItem('user', `${this.state.user}`);
        localStorage.setItem('pass', `${this.state.pass}`);
    }

    handleUser = (event) => {
        this.setState({user: event.target.value})
    }

    handlePass = (event) => {
        this.setState({pass: event.target.value})
    }

    render(){
    return(
    <div className="loginpage">
        <div className="fakeimage">
            <div className="centerLogo">
                <i className="fas fa-camera-retro fa-2x"></i>
                <h1>Webstagram</h1>
            </div>
        </div>
        <form className="styleform" onSubmit={this.login}>
            <input name="user" type="username" placeholder="username" onChange={this.handleUser}></input>
            <input name="pass" type="password" placeholder="password" onChange={this.handlePass}></input>
            <Button color="primary" type="submit">Login!</Button>
        </form>
    </div>
    )
    }
}

export default Login;