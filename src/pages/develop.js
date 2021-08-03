import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Button } from "../components/Button"
import { FaRegGrinBeamSweat } from "react-icons/fa";

const DevelopPage = () => (
  <Layout>
    <Seo title="develop" />
        
        <Development>
            <h2>The page you are trying to visit</h2>
            <h2>is still under Development <FaRegGrinBeamSweat /></h2>
            <SorryMsg>We are extremely sorry for the <br />inconveniences caused due to this....</SorryMsg>
            <DButton css={`margin-top: 3rem;`}><Button primary="true" big="true" round="true" to="/" 
            css={`font-size: 22px; font-family: 'Architects Daughter', cursive; 
                    &:hover {
                        transform: scale(1.04);
                    }
           `}>Get back to the world of Explorix </Button></DButton>
        </Development>
        
  </Layout>
)

export default DevelopPage

const Development = styled.div`
    text-align: center;
    background: #0c0c0c;
    color: #fff;
    padding-top: 20rem;
    padding-bottom: 20.3rem;
    letter-spacing: 2px;
    word-spacing: 2px;
    h2 {
        margin-top: 0.8rem;
        font-family: 'Handlee', cursive;
        font-size: 30px;
    }
`
const DButton = styled.div`
    transition: 0.5s ease-in-out;
`

const SorryMsg = styled.div`
    margin-top: 2rem;
    font-family: 'Merienda', cursive;
    font-size: 25px;
`