import React from 'react'
import styled from 'styled-components';
import { Row } from 'reactstrap';
import './CommentSection.scss';
import Proptypes from 'prop-types';
import AddComment from './AddComment.js';

const StyledP = styled.p`
    margin-left: 20px;
    margin-right: 3px;
`
const CenterSpan = styled.span`
    display: flex;
    justify-content: center;
`


class CommentSection extends React.Component{
    constructor(){
        super();
        this.state = {
            comments: [],
            input: '',
        }
    }

    componentDidMount(){
        console.log(this.state.comments)
        this.setState({comments: this.props.commentProps})
    }

    addNewComment = (event) => {
        event.preventDefault();
        this.setState({ 
            comments: [
                ...this.state.comments,
                {username:"snoopy_mug2k19",
                text:this.state.input}
            ]
        })
        this.setState({
            input:'',
        })
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({input: event.target.value})
    }

    render(){
    return(
        <div>
            {this.state.comments.map((item, index) => (
                <Row key={index}>
                    <StyledP><strong>{item.username}</strong></StyledP>
                    <p>{item.text}</p>
                </Row>
            ))}
            
            <CenterSpan>    
            <AddComment handleSubmit={this.addNewComment} addValue={this.state.input} handleChange={this.handleChange}  />
        </CenterSpan>
        </div>
        )
    }
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