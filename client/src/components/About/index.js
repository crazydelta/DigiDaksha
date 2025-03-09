// src/components/About.js
import React from 'react';
import Responsive from './SliderComp';
import Navbar from '../Navbar';
import Footer from '../Footer';
import AboutUs from '../../Assets/AboutUs.png';
import FounderMale from '../../Assets/FounderMale.png';
import FounderFemale from '../../Assets/FounderFemale.png';
import styled from 'styled-components';
import Blogs from './Blogs';
import GlobalStyle from '../GlobalStyle';


const About = () => {

  return (
    <>
      <GlobalStyle/>
      <HeroContainer>
        <Navbar />
        <AboutDes>
          <Headingtop>ABOUT DIGI DAKSHA</Headingtop>
          <ImageCont>
            <AboutImg src={AboutUs} alt="About_png" />
            <Imgright>
              <h1 style={{margin:'0', textAlign:'start',fontFamily: 'Bebas Neue',letterSpacing:'3px',fontSize:'54px'}}>DIGIDAKSHA</h1>
              <h2 style={{ color: 'grey', fontFamily: 'montserrat'}}>
                Together, "DigiDaksha" embodies our mission: to offer unmatched digital expertise with the precision of skilled professionals,
                developing innovative solutions that empower your business to succeed in the digital age.
              </h2>
              <Imgright >
              <h1 style={{margin:'0',fontFamily: 'Bebas Neue',letterSpacing:'3px',fontSize:'54px'}}>MEET THE TEAM</h1>
              <h2 style={{ color: 'grey', fontFamily: 'montserrat'  }}>
                Welcome to the Engine Room of DigiDaksha. Here, talent isn't just hired; it's supercharged. Creativity meets innovation at every desk.
                We're not your average team; we're a league of extraordinary strategists, ready to launch your business beyond the horizon.
          </h2></Imgright>
            </Imgright>
          </ImageCont>
          <h1 style={{textAlign: 'center',fontFamily: 'Bebas Neue',letterSpacing:'3px',fontSize:'48px'}}>The Captains:</h1>
          <Captions>
            <Card>
              <h1>RAVINDER REDDY P.</h1>
              <h2 style={{ color: '#6b6a68' }}>FOUNDER</h2>
              <p style={{ color: '#6b6a68', fontFamily: 'montserrat' }} >Visionary, strategist, digital guru. Ravinder isn't just at the helm of our ship; he's the compass guiding us through the digital seas. His foresight has propelled countless brands into the spotlight.</p>
              <img src={FounderMale} alt='founder' />
            </Card>
            <Card>
              <h1>SHYNI B.</h1>
              <h2 style={{ color: '#6b6a68' }}>CO-FOUNDER</h2>
              <p style={{ color: '#6b6a68', fontFamily: 'montserrat'}}>The architect of innovation. Shyni brings a blend of creativity and strategic thinking that turns potential into success. Under her guidance, ideas transform into tangible results that exceed expectations.</p>
              <img src={FounderFemale} alt='founder' />
            </Card>
          </Captions>
          <Responsive/>
          <BlogsCont>
            <Blogs/>
          </BlogsCont>
        </AboutDes>
      </HeroContainer>
      <Footer />
    </>
  );
};

const HeroContainer = styled.div`
  background-color: #000;
  color: #fff;
`;

const Headingtop = styled.h1`
  font-size: 50px;
  letter-spacing: 3px;
  font-family: 'Bebas Neue', sans-serif;
  text-align: center;
  animation: fadeInUp 1.5s ease forwards; /* Apply the animation */

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 768px) {
    font-size: 100px;
  }
`;

const AboutDes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ImageCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

const BlogsCont= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const AboutImg= styled.img`
  height: 500px;
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 100%;
    height: 520px;
  }
`;

const Imgright= styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`

const Captions = styled.div`
  padding: 20px;
  padding-right: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;


const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1c1c1a;
  min-height: 300px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19);
  justify-content: center;
  align-items: center;
  padding: 10px;
  h1{
    font-size: 26px;
  }

  @media (min-width: 768px) {
    min-height: 400px;
    width: 80%;
    h1{
      font-size: 48px;
    }
  }
`;


export default About;