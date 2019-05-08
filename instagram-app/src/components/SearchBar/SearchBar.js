import React from 'react'
import './searchcontainer.scss'

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
        <div className="searchcontainer">
            <div className="left">
                <i className="fas fa-camera-retro fa-2x"></i>
                <h1>Webstagram</h1>
            </div>
            <div className="center">
                <form>
                    <input onChange={this.props.searchPosts} placeholder="Search"></input>
                </form>
            </div>
            <div className="right">
                <i className="far fa-compass fa-2x"></i>
                <i className="far fa-heart fa-2x"></i>
                <i className="far fa-user fa-2x"></i>
            </div>
        </div>
    )
    }
}

export default SearchBar;