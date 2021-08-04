import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Button } from './Button';
import { ImLocation } from 'react-icons/im'

const Trips = ({ heading }) => {

    const data = useStaticQuery(graphql`
    query TripsQuery {
        allTripsJson {
          edges {
            node {
              alt
              button
              href
              name
              url
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }

    `)    

    function getTrips(data) {
        const tripsArray = [];
        data.allTripsJson.edges.forEach((item, index) => {
            tripsArray.push(
                <ProductCard key={index} >
                    <ProductImg src={item.node.img.childImageSharp.fluid.src}
                         alt={item.node.alt}
                        fluid={item.node.img.childImageSharp.fluid}
                    />
                    <ProductInfo>
                        <TextWrap>
                            <ImLocation />
                            <ProductTitle><a href={item.node.href} target="_blank" rel="noreferrer">{item.node.name}</a></ProductTitle>
                        </TextWrap>
                        <Button to={item.node.url} target="_blank" primary="true" round="true"
                            css={`position: absolute; top: 420px; font-size: 18px; font-family: 'Architects Daughter', cursive; transition: 0.3s ease-in-out;
                                &:hover{
                                    background: #212196;
                                    transform: scale(1.03);
                                }
                                @media (max-width: 768px) {
                                    position: absolute; top: 200px; font-size: 12px; font-family: 'Architects Daughter', cursive; transition: 0.3s ease-in-out;
                                }
                            `}
                        >
                            {item.node.button}
                        </Button>
                    </ProductInfo>
                </ProductCard>
            )
        })
        return tripsArray;
    }

    return (
        <ProductsContainer id="trips">
            <ProductsHeading>{heading}</ProductsHeading>
                <ProductWrapper>{getTrips(data)}</ProductWrapper>
        </ProductsContainer>

    )
}

export default Trips;

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 3rem calc((100vw - 1600px) / 2);
    background: #0c0c0c;
    color: #fff;

    @media screen and (max-width: 768px) {
        padding: 3rem calc((100vw - 1200px) / 2);
        padding-top: 3rem;
    }
`

const ProductsHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 2rem;
    color: #fff;
    font-family: 'Handlee', cursive;
    font-size: 70px;
    letter-spacing: 1.5px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
`

const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    justify-items: center;
    padding: 0.1rem;

    @media screen and (max-width: 868px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
        width: 95%;
        padding-left: 3rem;
    }
`
const ProductCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 868px) {
        grid-template-columns: 1fr;
    }
`

const ProductImg = styled(Img)`
    height: 100%;
    max-width: 100%;
    position: absolute;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover{
        filter: brightness(100%);
        transform: scale(1.05);
    }
`
const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.2rem;

    @media screen and (max-width: 280px) {
        padding: 0.1rem;
    }
`
const TextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;
`
const ProductTitle = styled.div`
    transition: 0.2s ease-in-out;
    margin-left: 0.5rem;

    a {
        text-decoration: none;
        color: #fff;
        font-family: 'Merienda', cursive;
        font-weight: 200;
        font-size: 18px;
    }

    &:hover {
        transform: scale(1.05);
    }

    @media screen and (max-width: 768px) {
        a {
            text-decoration: none;
            color: #fff;
            font-family: 'Merienda', cursive;
            font-weight: 200;
            font-size: 12px;
        }
    }
`

