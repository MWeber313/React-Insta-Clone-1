import React from 'react'
import styled from 'styled-components';
import { Row } from 'reactstrap';
import './CommentSection.scss';
import Proptypes from 'prop-types';

const StyledP = styled.p`
    margin-left: 20px;
    margin-right: 3px;
`

const CommentSection = props =>{
    return(
        <div>
            {props.commentProps.map((item, index) => (
                <Row key={index}>
                    <StyledP><strong>{item.username}</strong></StyledP>
                    <p>{item.text}</p>
                </Row>
            ))}
        </div>
    )
}

CommentSection.propTypes = {
    commentProps: Proptypes.arrayOf(
        Proptypes.shape({
            username: Proptypes.string,
            text: Proptypes.string,
        })
    )
}

export default CommentSection;