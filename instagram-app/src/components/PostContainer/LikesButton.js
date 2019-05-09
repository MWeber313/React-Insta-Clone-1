import React from 'react';
import './PostContainer.scss';
import styled from 'styled-components'

const LikesContainer = styled.div`
    font-weight: 600;
    display: flex;
    justify-content: flex-start;
    flex-flow: column nowrap;
    margin-left: 5px;
    .fa-heart {
        cursor: pointer;
        margin-top: 5px
    }
    .heart {
        color: red;}
`

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
    <LikesContainer>
        <i className={heartClass} onClick={this.handleClick}></i>
        <p>{this.state.likes} Likes</p> 
    </LikesContainer>
    )
    }
}

export default LikesButton;