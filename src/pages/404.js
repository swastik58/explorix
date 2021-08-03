import React from "react"
import styled from 'styled-components'
import { Button } from "../components/Button"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FaRegFrown, FaRegGrinBeamSweat } from "react-icons/fa";
import { BiWinkSmile } from "react-icons/bi";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404"/>
    
    <ErrorPage>
        <h1>ERROR 404 <FaRegFrown /> </h1>
        <h2>THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST <FaRegGrinBeamSweat /> </h2>
        <p>Looks like you travelled to the wrong destination...</p> <br /> <br />
        <Button primary="true" big="true" round="true" to="/" css={`margin-top: 20px;`}>Get Back on Track...  <BiWinkSmile css={`font-size: 40px; padding-top: 17px;`}/></Button>
    </ErrorPage>
    
  </Layout>
)

export default NotFoundPage

const ErrorPage = styled.div`
  background: #d3d3d3;
  color: #0c0c0c;
  align-items: center;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 15rem;
  margin-bottom: 15rem;
  border-radius: 500px;

  p {
    padding-top: 30px;
    font-family: 'Bad Script', cursive;
    font-weight: bold;
    font-size: 30px;
  }

  h2 {
    padding-top: 10px;
    font-family: 'Merienda', cursive;
  }

  h1 {
    font-family: 'Handlee', cursive;
    font-size: 70px;
  }
`
