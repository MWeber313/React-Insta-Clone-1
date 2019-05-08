import React from 'react';
import './PostContainer.scss';


class LikesButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            likes: props.likesProps,
            clicked: false
        }
    }

    handleClick = () => {
        if (this.state.clicked === true){
            this.setState({clicked: false, likes: this.state.likes -1})
        } else {
            this.setState({clicked: true, likes: this.state.likes +1})
        }
      };

    render(){
    const heartClass = this.state.clicked ? "far fa-heart fa-lg heart" : "far fa-heart fa-lg"
    return (
    <div className="likescontainer">
        <i className={heartClass} onClick={this.handleClick}></i>
        <p>{this.state.likes} Likes</p> 
    </div>
    )
    }
}

export default LikesButton;