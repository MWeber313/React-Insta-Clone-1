import React from 'react'
import './searchcontainer.scss'
import styled from 'styled-components'

const SearchContainer = styled.div`
    display: flex;
    border-bottom: 2px solid lightgrey;
    justify-content: space-between;
`
const Left = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-left: 20px;
    i {
        margin-top: 10px;
        padding-top: 10px;
        margin-right: 10px;
        padding-right: 5px;
        border-right: 2px solid black;
        padding-bottom: 5px;
        margin-bottom: 10px;
    }
    h1 {
        margin-top: 7.5px;
    }
`
const Center = styled.div`
    margin-top: 15px;
    padding-right: 150px;
    input {
        text-align: center;
        color: grey;
        border: 2px solid lightgray;
        background: lightyellow;
    }
`
const Right = styled.div`
    margin-top: 15px;
    margin-right: 50px;
    .fa-compass {
        &:hover{
            color: lightblue;
        }
    }
    .fa-heart {
        &:hover{
            color: red;
        }
    }
    .fa-user {
        &:hover{
            color:darksalmon;
        }
    }
    i {
        margin-left: 2.5px;
        margin-right: 5px;
    }
`

class SearchBar extends React.Component {
    constructor(){
        super();
        this.toggle = this.toggle.bind(this);
        this.state={
            dropdownOpen: false,
            dropdownOpen1: false,
            dropdownOpen2: false,
        }
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen,
          dropdownOpen1: !this.state.dropdownOpen1,
          dropdownOpen2: !this.state.dropdownOpen2,
        });
      }

    render(){
    return(
        <SearchContainer>
            <Left>
                <i className="fas fa-camera-retro fa-2x"></i>
                <h1>Webstagram</h1>
            </Left>
            <Center>
                <form>
                    <input onChange={this.props.searchPosts} placeholder="Search"></input>
                </form>
            </Center>
            <Right>
                <i className="far fa-compass fa-2x"></i>
                <i className="far fa-heart fa-2x"></i>
                <i className="far fa-user fa-2x"></i>
            </Right>
        </SearchContainer>
    )
    }
}

export default SearchBar;