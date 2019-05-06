import React from 'react';
import './PostContainer.scss';
import CommentSection from '../CommentSection/CommentSection.js';
import styled from "styled-components"
import AddComment from '../CommentSection/AddComment.js';
import PropTypes from 'prop-types'

const PostHeaderDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    margin-left: 25px;
    margin-top: 15px;
    margin-bottom: 15px;
`
const CenterSpan = styled.span`
    display: flex;
    justify-content: center;
`
const TimeP = styled.p`
    color: gray;
    font-size: 14px;
    margin-left: 10px;
    margin-top: 0;
`

const PostContainer = props => {
    return(
        <div>
            {props.containProps.map((item, index) => (
                <div className="postcontainer" key={index}>
                    <PostHeaderDiv>
                        <img className="imgThumb" src={item.thumbnailUrl} alt="User's profile!" />
                        <h4 className="user">{item.username}</h4>
                    </PostHeaderDiv>
                    <div>
                        <img src={item.imageUrl} alt="User's posting!"/>
                        
                        <div className="likescontainer">
                            <i className="likeimg far fa-heart fa-lg"></i>
                            <p>{item.likes} Likes</p> 
                        </div>
                    </div>
                    <CommentSection commentProps={item.comments}/>
                    <TimeP>{item.timestamp}</TimeP>
                    <CenterSpan><AddComment /></CenterSpan>
                </div>
                ))}
        </div>
    )
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