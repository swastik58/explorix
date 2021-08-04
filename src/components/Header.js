import React from "react"
import { Link } from "gatsby";
import styled from 'styled-components';
import { menuData } from "../data/MenuData";

const Header = () => {
  return(
    <Nav id="header">
      <NavLink to='#video' >EXPLORIX</NavLink>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLinks to={item.Link} key={index}>
            {item.title}
          </NavLinks>
        ))}
      </NavMenu>
    </Nav>
  )
}
export default Header

const Nav = styled.nav`
  background: #0c0c0c;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1500px) / 2);
  z-idex: 100;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 2rem;
  }

`
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.1rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Shadows Into Light', cursive;
  font-size: 38px;
  font-weight: bold;
  letter-spacing: 3px;
  transition: 0.2s ease-in-out;

  &:hover{
    transform: scale(1.15);
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
    padding-top: 1rem;
  }

  @media screen and (max-width: 1200px) {
    padding-left: 1rem;
  }

  @media (max-width: 550px) {
    font-size: 25px;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -40px;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-top: 0.5rem;
    margin-bottom: 2rem;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-top: 0.1rem;
    margin-bottom: 2rem;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 1200px) {
    padding-right: 0.5rem;
  }
`
const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-right: 4.0rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Shadows Into Light', cursive;
  font-size: 30px;
  letter-spacing: 1.2px;
  transition: 0.2s ease-in-out;

  &:hover{
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }

  @media screen and (max-width: 520px) {
    font-size: 20px;
    padding: 0.5rem;
  }
`