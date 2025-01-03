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

const About = () => {

  return (
    <>
      <HeroContainer>
        <Navbar />
        <AboutDes>
          <Headingtop>ABOUT DIGI DAKSHA</Headingtop>
          <ImageCont>
            <AboutImg src={AboutUs} alt="About_png" />
            <div>
              <h1>DIGIDAKSHA</h1>
              <h2 style={{ color: 'grey' }}>
                Together, "DigiDaksha" embodies our mission: to offer unmatched digital expertise with the precision of skilled professionals,
                developing innovative solutions that empower your business to succeed in the digital age.
              </h2>
            </div>
          </ImageCont>
          <h1>MEET THE TEAM</h1>
          <h2 style={{ color: 'grey' }}>
            Welcome to the Engine Room of DigiDaksha. Here, talent isn't just hired; it's supercharged. Creativity meets innovation at every desk.
            We're not your average team; we're a league of extraordinary strategists, ready to launch your business beyond the horizon.
          </h2>
          <h1 style={{textAlign: 'center'}}>The Captains:</h1>
          <Captions>
            <Card>
              <h1>Ravinder Reddy P.</h1>
              <h2 style={{ color: '#6b6a68' }}>FOUNDER</h2>
              <p style={{ color: '#6b6a68' }}>Visionary, strategist, digital guru. Ravinder isn't just at the helm of our ship; he's the compass guiding us through the digital seas. His foresight has propelled countless brands into the spotlight.</p>
              <img src={FounderMale} alt='founder' />
            </Card>
            <Card>
              <h1>SHYNI B.</h1>
              <h2 style={{ color: '#6b6a68' }}>CO-FOUNDER</h2>
              <p style={{ color: '#6b6a68' }}>The architect of innovation. Shyni brings a blend of creativity and strategic thinking that turns potential into success. Under her guidance, ideas transform into tangible results that exceed expectations.</p>
              <img src={FounderFemale} alt='founder' />
            </Card>
          </Captions>
          <Responsive/>
          <Blogs/>
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
  font-size: 40px;
  font-weight: 300; /* Use a valid weight value */
  font-family: 'Bebas Neue', sans-serif; /* Ensure the font is properly defined */
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
    font-weight: bold; /* This will apply bold weight */
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

  @media (min-width: 600px) {
    flex-direction: row;
    gap: 20px;
  }
`;

const AboutImg= styled.img`
  height: 500px;
  width: 100%;

  @media (min-width: 600px) {
    width: 40%;
    height: 400px;
  }
`;

const Captions = styled.div`
  padding: 20px;
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

  @media (min-width: 768px) {
    min-height: 400px;
    width: 80%;
  }
`;


export default About;