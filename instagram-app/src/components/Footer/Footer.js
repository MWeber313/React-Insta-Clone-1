import React from 'react';
import './Footer.scss';
import styled from 'styled-components';

const FooterDiv = styled.div`
    border-top: 2px solid lightgrey;
    margin-top: 25px;
    padding-top: 50px;
    padding-bottom: 25px;
    background: lightgoldenrodyellow;
`

const Footer = () => {
    return(
        <FooterDiv>
            <h6>Instagram App built by Mackenzie Weber | Instagram &copy; 2019</h6>
        </FooterDiv>
    )
}

export default Footer;