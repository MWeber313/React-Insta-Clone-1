import React from 'react';
import Post from './Post.js';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = props => {
    return(
        <div>
            <h2>This is a post container!</h2>
            <Post />
            <CommentSection />
        </div>
    )
}

export default PostContainer;