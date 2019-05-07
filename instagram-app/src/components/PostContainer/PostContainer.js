import React from 'react';
import './PostContainer.scss';
import CommentSection from '../CommentSection/CommentSection.js';
import styled from "styled-components"
import PropTypes from 'prop-types'
import LikesButton from './LikesButton.js';

const PostHeaderDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    margin-left: 25px;
    margin-top: 15px;
    margin-bottom: 15px;
`
const TimeP = styled.p`
    color: gray;
    font-size: 14px;
    margin-left: 10px;
    margin-top: 0;
`

class PostContainer extends React.Component {
    componentDidMount(){
        console.log ("Component is mounting from PostContainer!")
    }

    render(){
    return(
        <div>
            {this.props.containProps.map((item, index) => (
                <div className="postcontainer" key={index}>
                        <PostHeaderDiv>
                            <img className="imgThumb" src={item.thumbnailUrl} alt="User's profile!" />
                            <h4 className="user">{item.username}</h4>
                        </PostHeaderDiv>
                    <div>
                        <img src={item.imageUrl} alt="User's posting!"/>
                        <LikesButton likesProps={item.likes} />
                    </div>
                        <TimeP>{item.timestamp}</TimeP>
                        <CommentSection commentProps={item.comments}/>
                </div>
                ))}
        </div>
        )
    }
}

PostContainer.propTypes = {
    containProps: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
      }))
}
export default PostContainer;