import React from 'react'
import './searchcontainer.scss'

const SearchBar = () => {
    return(
        <div className="searchcontainer">
            <div className="left">
                <i className="fas fa-camera-retro fa-2x"></i>
                <h1>Instagram</h1>
            </div>
            <div className="center">
                <form>
                    <input placeholder="Search"></input>
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

export default SearchBar;