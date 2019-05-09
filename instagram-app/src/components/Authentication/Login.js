import React from 'react';
import { Button } from 'reactstrap';
import './authenticate.scss'
import styled from 'styled-components';

const LoginDiv = styled.div`
    margin-top: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`
const FakeImage = styled.div`
    width: 300px;
    height: 300px;
    color: black;
`
const CenterLogo = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`
const StyledForm = styled.form`
    display: flex;
    flex-flow: column;
    margin-left: 10px;
`

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
    <LoginDiv className="loginpage">
        <FakeImage>
            <CenterLogo>
                <i className="fas fa-camera-retro fa-2x"></i>
                <h1>Webstagram</h1>
            </CenterLogo>
        </FakeImage>
        <StyledForm onSubmit={this.login}>
            <input name="user" type="username" placeholder="username" onChange={this.handleUser}></input>
            <input name="pass" type="password" placeholder="password" onChange={this.handlePass}></input>
            <Button color="primary" type="submit">Login!</Button>
        </StyledForm>
    </LoginDiv>
    )
    }
}

export default Login;