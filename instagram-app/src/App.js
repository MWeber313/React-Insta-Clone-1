import React from 'react';
import dummyData from './dummy-data.js';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`

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
        <SearchBar />
        <ContainerDiv>
          <PostContainer containProps={this.state.data}/>
        </ContainerDiv>
      </div>
    )
  }
}
export default App;
