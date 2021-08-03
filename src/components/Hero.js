import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import Video from '../assets/videos/video.mp4'

const Hero = () => {
    return (
        <HeroContainer id="video">
            <HeroBg>
                <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline playbackRate="0.1"/>
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH2>EXPLORIX</HeroH2>
                    <HeroH1>Unreal Destinations</HeroH1>
                    <HeroP>Out of this world</HeroP>
                    <Button primary="true" big="true" round="true" to="#trips">Travel Now</Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;

const HeroContainer = styled.div`    
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0.1rem;
    position: relative;
    color: #fff;

    :before{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%, ), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100% );
    }
`
const HeroBg = styled.div`    
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const VideoBg = styled.video`    
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    filter: brightness(70%);
`
const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1500px) / 2);
`
const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    mah-height: 100%;
    paddign: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
    letter-spacing: 3px;
`
const HeroH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    font-weight: bold;
    padding: 0.1rem;
    font-family: 'Russo One', sans-serif;
    font-size: 70px;

    @media screen and (max-width: 600px) {
        font-size: 35px;
    }
`
const HeroH2 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 2.5rem;
    letter-spacing: 20px;
    font-weight: bold;
    padding: 0.1rem;
    font-family: 'Luckiest Guy', cursive;
    font-size: 90px;

    @media screen and (max-width: 600px) {
        font-size: 45px;
    }
`
const HeroP = styled.p`
    font-size: clamp(1rem, 3vw, 3rem);
    margin-bottom: 2rem;
    font-weight: 400;
    font-family: 'Architects Daughter', cursive;
    font-size: 60px;

    @media screen and (max-width: 600px) {
        font-size: 30px;
    }
`