import React from 'react';
import './App.scss';
import PostPage from './components/PostContainer/PostPage.js'
import withAuthenticate from './components/Authentication/WithAuthenticate.js';
import Login from './components/Authentication/Login.js'

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login)

class App extends React.Component {

  render(){
    return(
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    )
  }
}
export default App;
