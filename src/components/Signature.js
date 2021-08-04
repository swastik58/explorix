import React from 'react'
import styled from 'styled-components'
import { AiFillHeart } from "react-icons/ai";
import { BiWinkSmile } from "react-icons/bi";
import { Link } from 'gatsby'


const Signature = () => {
    return (
        <SignatureContainer css={`text-align: center;`}>
            <GoTop to="#header" css={`margin-bottom: 30px;`}>Back to the top of the page</GoTop>
           <h2 css={`font-family: 'Handlee', cursive; letter-spacing: 3px; font-size: 30px; padding-top: 20px;`}> Made with <AiFillHeart css={`color: red;`}/> by Swastik...<BiWinkSmile css={`color: yellow;`}/></h2>
        </SignatureContainer>
    )
}

export default Signature

const SignatureContainer = styled.div`
    background: #0c0c0c;
    color: #fff;
    padding-bottom: 15px;
    padding: 0.7rem calc((100vw - 1500px) / 2);
`
const GoTop = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-family: 'Shadows Into Light', cursive;
    font-size: 30px;

    &:hover{
        color: blue;
        transition: 0.3s ease-in-out;
        transform: scale(1.2);
    }
`