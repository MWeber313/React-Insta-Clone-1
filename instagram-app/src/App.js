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
      data: [],
      filteredData: [],
    }
  }

  componentDidMount(){
    this.setState({
      data: dummyData,
    })
  }

  handleSearch = (event) => {
    console.log("Searching!")
    const items = this.state.data.filter(d => {
      if (d.username.includes(event.target.value)) {
        return d;
      }
    })
    this.setState({ filteredData: items});
  }

  render(){
    return(
      <div className="App">
        <SearchBar searchPosts={this.handleSearch} />
        <ContainerDiv>
          <PostContainer containProps={this.state.filteredData.length > 0
              ? this.state.filteredData
              : this.state.data}/>
        </ContainerDiv>
      </div>
    )
  }
}
export default App;
