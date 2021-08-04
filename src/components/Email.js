import React from 'react'
import styled from 'styled-components'
import EmailBg from '../assets/images/email.jpg'
import { Button } from './Button';
import { FaRegLaugh } from 'react-icons/fa'


const Email = () => {
    return (
        <Email1 id="offers">
        <EmailContainer>
            <EmailContent>
                <h1>Get Access to Exclusive Offers...<FaRegLaugh /></h1>
                <p>Sign up to receive exclusive deals, discounts and offers</p>
                <p>Also get up-to 20% off on your first trip with us...</p>
                <form action="#">
                    <FormWrap>
                        <label htmlFor="email">
                            <input type="email" placeholder="Enter your email" id="email" align="center" />
                        </label> <br/>
                        <Button as="button" type="submit" primary="true" round="true" 
                        css={`height: 58px; margin-top: 40px; width: 95%; font-size: 25px;
                                @media screen and (max-width:768px){
                                    width: 60%;
                                    min-width: 350px;
                                    font-size: 20px;
                                }
                                @media screen and (max-width:400px){
                                    width: 100%;
                                    min-width: 250px;
                                }
                                &:hover {
                                    background: #212196;
                                }
                            `}>
                            Sign Up
                        </Button>
                    </FormWrap>
                </form>
            </EmailContent>
        </EmailContainer>
        </Email1>
    )
}

export default Email

const Email1 = styled.div`
    background: #0c0c0c;
    padding-top: 30px;
`

const EmailContainer = styled.div`
    background: url(${EmailBg}) no-repeat center;
    background-size: cover;
    height: 700px;
    width: 85%;
    padding: 5rem calc((100vw - 1500px) / 2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    margin-left: 8.5rem;

    @media screen and (max-width: 1200px) {
        margin-left: 4.2rem;
    }
`
const EmailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 3rem;
    
    h1{
        text-align: center;
        margin-bottom: 2rem;
        padding: 0.1rem;
        font-family: 'Handlee', cursive;
        font-size: 70px;
    }

    p{
        text-align: center;
        padding: 0.1rem;
        margin-bottom: 3rem;
        font-size: 30px;
        font-family: 'Merienda', cursive;
    }

    form{
        z-index: 10;
    }

    @media screen and (max-width: 768px) {
        h1{
            text-align: center;
            margin-bottom: 2rem;
            padding: 0.1rem;
            font-family: 'Handlee', cursive;
            font-size: 40px;
        }

        p{
            text-align: center;
            padding: 0.1rem;
            margin-bottom: 3rem;
            font-size: 20px;
            font-family: 'Merienda', cursive;
        }
    }
`
const FormWrap = styled.div`
    padding-top: 3rem;

    input{
        padding: 1rem 1.5rem;
        outline: none;
        width: 350px;
        height: 48px;
        border-radius: 50px;
        border: none;
        margin-right: 1rem;
    }

    @media screen and (maz-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0.1rem;

        input{
            margin-bottom: 1rem;
            width: 100%;
            margin-right: 0;
        }
    }
`
