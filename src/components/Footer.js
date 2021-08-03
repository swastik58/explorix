import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <FooterContainer id="contact">
                <FooterDesc>
                    <h1>EXPLORIX</h1>
                    <p>We strive to create the best experiences for our fellow travellers..</p>
                </FooterDesc>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink1><a href="mailto:swastiksupakar19@gmail.com">Write to us</a></FooterLink1>
                    <FooterLink1><a href="tel:7602508521">Call us</a></FooterLink1>
                    <FooterLink to="#trips">Destinations</FooterLink>
                    <FooterLink to="/develop">Sponsorships / Support Us</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="https://www.instagram.com/a_wave_with_0_amplitude/?hl=en" target="_blank">Instagram</FooterLink>
                    <FooterLink to="https://www.facebook.com/swastik.supakar.58/" target="_blank">Facebook</FooterLink>
                    <FooterLink to="https://twitter.com/SwastikSupakar" target="_blank">Twitter</FooterLink>
                    <FooterLink to="https://www.linkedin.com/in/swastik-s-697214100/" target="_blank">Linkedin</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    padding: 3rem calc((100vw - 1500px) / 2);
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    color: #fff;
    background: #0c0c0c;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
const FooterDesc = styled.div`
    padding: 0.2rem;
    padding-left: 3rem;

    h1 {
        margin-bottom: 2rem;
        color: #fff;
        font-family: 'Handlee', cursive;
        letter-spacing: 3px;
        font-size: 40px;
    }

    p {
        font-family: 'Merienda', cursive;
        font-size: 20px;
    }

    @media screen and (max-width: 768px) {
        padding: 1rem;
        text-align: center;
    }

    @media screen and (max-width: 450px) {
        padding: 1rem;
        text-align: center;
        h1 {
            font-size: 20px;
        }
        p {
            font-size: 10px;
        }
    }
`
const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        padding-right: 20px;
        align-items: center;
        padding-right: 80px;
    }

    @media screen and (max-width: 550px) {
        grid-template-columns: 1fr;
        padding-left: 30px;
    }
`
const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 4rem;

    @media screen and (maz-width: 768px) {
        padding: 0.1rem 0.1rem;
        padding-top: 15px;
        padding-right: 50px;
    }
`
const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    color: #fff;
    font-family: 'Shadows Into Light', cursive;
    font-size: 20px;
    letter-spacing: 3px;

    &:hover {
        color: #ff0000;
        transition: 0.3s ease-in-out;
        transform: scale(1.09);
    }
`
const FooterLink1 = styled.div`
    margin-bottom: 0.5rem;

    a {
        text-decoration: none;
        color: #fff;
        font-family: 'Shadows Into Light', cursive;
        font-size: 20px;
        letter-spacing: 3px;
        cursor: pointer;
    }

    &:hover {
        transition: 0.3s ease-in-out;
        transform: scale(1.09);
    }
    a:hover {
        color: #ff0000;
    }
`
const FooterLinkTitle = styled.h2`
    font-size: 25px;
    margin-bottom: 16px;
    font-family: 'Bad Script', cursive;

    @media screen and (max-width: 768px) {
        padding-left: -30px;
    }
`