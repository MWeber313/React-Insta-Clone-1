import React from 'react';
import dummyData from './dummy-data.js';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: dummyData,
    }
  }
  render(){
    return(
      <div className="App">
        <h1>Hello!</h1>
        <SearchBar />
        <PostContainer />
      </div>
    )
  }
}
export default App;
