// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import Gradient from '../../Assets/Gradient.png'
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { LuMousePointerClick } from "react-icons/lu";
import GlobalStyle from '../GlobalStyle';

const Footer = () => {

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
    <GlobalStyle/>
    <FooterContainer>
      <GetStarted>
        <h1 style={{color: 'grey'}}>JOIN FORCES WITH US, AND LET'S NOT JUST CHASE SUCCESS<br/>-LET'S DEFINE IT.</h1>
        <Link to='/contact' onClick={handleScrollToTop}><Gbutn>GET STARTED <LuMousePointerClick /></Gbutn></Link>
      </GetStarted>
      <FotterLine/>
      <FooterContent>
        <FooterSection>
          <Link to='/' onClick={handleScrollToTop}><FooterLogo src={Gradient} alt="footerLogo"/></Link>
          <SocialLinks>
            <SocialLink href="#">
                <Instagram />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/digi-daksha/" target='_blank'>
                <Linkedin />
            </SocialLink>
            <SocialLink href="#">
              <Facebook />
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        <FooterSection>
          <div>
            <Stlink  to='/about' onClick={handleScrollToTop}><FooterNav>ABOUT US</FooterNav></Stlink>
            <Stlink to='/services' onClick={handleScrollToTop}><FooterNav>SERVICES</FooterNav></Stlink>
            <Stlink to='/contact' onClick={handleScrollToTop}><FooterNav>CONTACT US</FooterNav></Stlink>
            <Stlink to='/' onClick={handleScrollToTop}><FooterNav>HOME</FooterNav></Stlink>
          </div>
        </FooterSection>
      </FooterContent>
      <Copyright>© 2025 Digi Daksha. All rights reserved.</Copyright>
    </FooterContainer>
    </>
  );
};

const FooterContainer = styled.footer`
  background-color: #fff;
  color: #000;
  padding: 30px;
`;

const FooterNav= styled.h1`
font-family: 'bebas neue', sans-serif;
font-size: 22px;
margin-bottom: 5px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;

`
const Stlink= styled(Link)`
text-decoration: none;
color: black;
letter-spacing: 3px;
font-family: 'Bebas Neue', sans-serif;
`

const GetStarted= styled.div`
display: none;
flex-direction: column;
justify-content: space-between;
align-items:center;

@media (min-width: 768px){
  display: flex;
  flex-direction: row;
  h1{
    font-size: 25px;
  }
}
`
const Gbutn= styled.button`
background-color: black;
border-color: white;
width: 200px;
height: 50px;
color: white;
border-width: 2px;
border-style: bold;
border-radius: 10px;
cursor: pointer;
font-weight: bold;
&:hover {
    color: black;
    background-color: white;
    border-color: black;
  }

`

const FooterContent = styled.div`
 display: flex;
 justify-content: space-between;
 flex-direction: column;
 padding:10px;

 @media (min-width: 768px){
 flex-direction: row;
 justify-content: space-between;
 }
`;

const FooterSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;


const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  margin-top: 40px;
`;

const SocialLink = styled.a`
  color: #000;
  font-size: 1.5rem;
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 0.875rem;
  margin-top: 2rem;
`;

const FooterLogo = styled.img`
  height: 50px;
  width: 50px;
  cursor: pointer;
  margin-left:-10px;
  @media(min-width: 768px){
   height: 100px;
   width: 100px;

  }
`;

const FotterLine= styled.hr`
display: none;
@media(min-width: 768px){
   display: block;
}
`

export default Footer;