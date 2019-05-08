import React from 'react';

const withAuthenticate = PostPage => Login => 
    class extends React.Component {
        constructor(){
            super();
            this.state= {
                loggedOn: false
            }
        }

        componentDidMount(){
            if(!localStorage.getItem(`user`)){
                this.setState({loggedOn: false})
            } else {
                this.setState({loggedOn: true})
            }
        }

        logout = (e) => {
            e.preventDefault();
            localStorage.removeItem('user');
            localStorage.removeItem('pass');
            this.setState({loggedOn: false})
        }
    
        render(){
        return(
        <div>
        {this.state.loggedOn ? <PostPage logOut={this.logout}/> : <Login />}
        </div>
        )
    }    
}
export default withAuthenticate;