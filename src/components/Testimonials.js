import React from 'react';
import styled from 'styled-components'
import Img from 'gatsby-image'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import { FaRegSmileWink } from 'react-icons/fa'
import { useStaticQuery, graphql} from 'gatsby';
import { CgSmileMouthOpen } from "react-icons/cg";


const Testimonials = () => {

    const data = useStaticQuery(graphql`
    query  {
        allFile(filter: {ext: {regex: "/(jpg)/"}, name: {in: ["test1", "test2", "test3", "test4"]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      
      
    `)

    return (
        <TestimonialsContainer id="about">
            <TopLine>
                Testimonials
            </TopLine>
            <Description>
                Let's hear what people have to say about us... <CgSmileMouthOpen css={`font-size: 30px;`} />
            </Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline css={`color: #3fffa8; font-size: 4rem; margin-top: -20px; padding-left: 20px;`} />
                        <h3>Sagnik Mukherjee</h3>
                        <p>" There aren’t enough superlatives to describe how FABULOUS our vacation was, all thanks to Explorix. WOW! was my first impression of the breathtaking proposed itinerary.
                        Our hotel accommodations were amazing. Each was unique and perfectly located for our interests. If and when we return to Europe, this tour company will be our first contact for planning our excursion. With great appreciation. "</p>
                    </Testimonial>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline css={`color: #3fffa8; font-size: 4rem; margin-top: -25px; padding-left: 20px;`}/>
                        <h3>Swastik Supakar</h3>
                        <p>" My trip to New York City and Brooklyn was spectacular!  The trip was made possible with the help of Explorix. From the start of planning the trip to the actual trip itself, Explorix was there to help me at every step whenever I needed anything. 
                            The hotels and meals were just superb!!!. If you are looking for a memorable trip to New York City and Brooklyn, make sure you check out Explorix, they will not disappoint. "</p>
                             
                    </Testimonial>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline css={`color: #3fffa8; font-size: 4rem; margin-top: -10px; padding-left: 20px;`}/>
                        <h3>Anushka Chaturvedy</h3>
                        <p>" I would say this was one of the best trips we've ever taken. Explorix set up a trip to remember for all of us. Explorix was also fantastic and a lifesaver with regard to the COVID-19 issues. 
                            They went above and beyond to take care of our revised travel plans. We would definitely contact Explorix as our travel planner again!. "</p>
                    </Testimonial>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline css={`color: #3fffa8; font-size: 4rem; margin-top: -35px; padding-left: 20px; 
                            @media (max-width: 768px){margin-top: -60px;}
                        `}/>
                        <h3>Mitam Samanta</h3>
                        <p>" If there was a 6-star review, Explorix would surely get it. We started planning this adventure a year ago. I can't imagine doing it without the expertise that Explorix brought to the table. 
                            We felt 100% safe the entire journey. The hotels were fantastic. The experience was incredible. Overall, it was an amazing journey for us and we enjoyed every moment of it. "</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                    {data.allFile.edges.map((image, key) => (
                        <Images key={key} fluid={image.node.childImageSharp.fluid} />
                    ))}
                </ColumnTwo>
            </ContentWrapper>
            <Description1>
                Your satisfaction is our top priority... <FaRegSmileWink css={`font-size: 30px;`} />
            </Description1>
        </TestimonialsContainer>
    )
}

export default Testimonials;

const TestimonialsContainer = styled.div`
    width: 100%;
    background: #0c0c0c;
    color: #fff;
    padding: 5rem calc((100vw - 1100px) / 2)
    height: 100%;
    padding-left: 30px;
`
const TopLine = styled.div`
    color: #fff;
    font-family: 'Handlee', cursive;
    font-size: 70px;
    padding-left: 2rem;
    padding-top: 2rem;
    margin-bottom: 0.75rem;
    text-align: center;
    letter-spacing: 2px;
`
const Description = styled.div`
    text-align: center;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: 4rem;
    font-size: 30px;
    font-family: 'Merienda', cursive;
`
const Description1 = styled.div`
    text-align: start;
    text-align: center;
    margin-top: -50px;
    padding-bottom: 23px;
    font-size: 30px;
    font-family: 'Merienda', cursive;
`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px){
        grid-template-column: 1fr;
    }
`
const ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    margin-top: 1rem;

    @media screen and (max-width: 768px) {
        align-items: center;
        padding-left: 60px;
    }
`
const Testimonial = styled.div`
    padding-right: 2rem;
    padding-left: 2rem;
    margin-bottom: 60px;
    margin-top: -40px;
    display: flex;
    flex-direction: column;

    h3{
        margin-bottom: 0.1rem;
        margin-top: -0.8rem;
        font-size: 1.5rem;
        padding-left: 20px;
        font-family: 'Sriracha', cursive;
    }

    p{
        color: #0c0c0c;
        padding-left: 15px;
        padding-right: 5px;
        padding-top: 5px;
        background: #fff;
        border-radius: 20px;
        font-family: 'Bad Script', cursive;
        font-weight: bold;
        font-size: 21px;
    }

    @media screen and (max-width: 768px) {
        align-items: center;
        test-align: center;
        p{
            width: 100%;
            align-items: center;
        }
    }
`
const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 2px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr;
    }
`
const Images = styled(Img)`
    border-radius: 10px;
    height: 85%;
    width: 80%;

    @media screen and (max-width: 768px) {
        display: none;
    }

`