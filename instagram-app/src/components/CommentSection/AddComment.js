import React from 'react';
import './CommentSection.scss';

const AddComment = props => {
    console.log(props)
    return(
        <form className="addcontainer" onSubmit={props.handleSubmit}>
            <input placeholder="Add a comment..." value={props.addValue} onChange={props.handleChange}></input>
        </form>
    )
}
export default AddComment;