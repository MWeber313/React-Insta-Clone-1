import React from 'react';
import dummyData from '../../dummy-data.js';
import SearchBar from '../SearchBar/SearchBar.js';
import PostContainer from './PostContainer.js';
import styled from 'styled-components';
import Footer from '../Footer/Footer.js'
import { Button } from 'reactstrap'

const ContainerDiv = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`

class PostPage extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      filteredData: [],
      isRefreshed: false,
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
        <Button color="danger" onClick={this.props.logOut}>Logout</Button>
        <Footer />
      </div>
    )
  }
}
export default PostPage;
