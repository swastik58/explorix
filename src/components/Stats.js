import React from 'react'
import styled from 'styled-components'
import { GiEarthAmerica } from 'react-icons/gi'
import { MdAirplanemodeActive } from 'react-icons/md'
import { MdTimer } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'


 const StatsData = [
    {
        icon: (<GiEarthAmerica />),
        title: "Over a 100 destinations",
        desc: "Travel to over a 100 different destinations around the world",
    },
    {
        icon: (<MdAirplanemodeActive />),
        title: "10K trips made",
        desc: "Completed over 10K trips last year..",
    },
    {
        icon: (<MdTimer />),
        title: "Fastest Support",
        desc: "Our support team is always available to guide you... You can reach out to us 24/7",
    },
    {
        icon: (<FaMoneyCheck/>),
        title: "Best Deals",
        desc: "Get the best deals and prices on hotels and flights with us",
    },
]


const Stats = () => {
    return (
        <StatsContainer>
            <Heading>Why Choose Us..???</Heading>
            <Wrapper>
                {StatsData.map((item, index) => {
                    return (
                        <StatsBox key={index}>
                            <Icon>{item.icon}</Icon>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                        </StatsBox>
                    )
                })}
            </Wrapper>
        </StatsContainer>
    )
}

export default Stats;

const StatsContainer = styled.div`
    width: 100%;
    background: #0c0c0c;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw - 1700px) / 2);
`
const Heading = styled.div`
    text-align: center;
    font-family: 'Handlee', cursive;
    font-size: 70px;
    margin-bottom: 3rem;
    padding: 0.2rem;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`
const StatsBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 1.5rem;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
`
const Icon = styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 2.3rem;
    }    
`
const Title = styled.p`
    margin-bottom: 0.5rem;
    font-size: 30px;
    font-family: 'Merienda', cursive;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`
const Description = styled.div`
    font-size: 1.5rem;
    font-family: 'Bad Script', cursive;

    @media (max-width: 768px) {
        font-size: 1.0rem;
    }
`
