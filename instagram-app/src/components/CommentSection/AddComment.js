import React from 'react';
import './CommentSection.scss';
import styled from 'styled-components';

const AddForm = styled.form`
    padding-top: 10px;
    width: 90%;
    border-top: 1px solid lightgrey;
    margin-bottom: 10px;
    input{
        width: 50%;
        border: none;
    }
`

const AddComment = props => {
    console.log(props)
    return(
        <AddForm onSubmit={props.handleSubmit}>
            <input placeholder="Add a comment..." value={props.addValue} onChange={props.handleChange}></input>
        </AddForm>
    )
}
export default AddComment;