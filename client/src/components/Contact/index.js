import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import Navbar from '../Navbar';
import Footer from '../Footer';
import GlobalStyle from '../GlobalStyle';
import { Building2, User, Video, Mail, Phone, ArrowRight,MessageSquare} from 'lucide-react';

const ContactWrapper = styled.div`
  min-height: 100vh;
  background-color: #0a0a0a;
  color: #ffffff;
  padding: 2rem;
`;

const Header = styled.h1`
  font-size: 40px;
  letter-spacing: 3px;
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

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 800px;
  margin: 0 auto 4rem auto;
  line-height: 1.6;
`;

const OptionsSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const OptionTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const OptionCard = styled.div`
  background-color: transparent;
  border: 2px solid white;
  border-radius: 30px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    background-color: white;
    color: black;
    transform: translateY(-2px);
  }
 @media(min-width: 768px){
  border-radius: 100px;
 }
`;

const ContactInfo = styled.div`
  max-width: 800px;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center; /* Centers the content horizontally */
    align-items: center; /* Centers the content vertically */
  }
`;

const InfoItem = styled.div`
text-align: center;
padding:10px;
  h3 {
    color: #666;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin: 4rem 0;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const CTAButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem auto;
  transition: all 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
    transform: translateY(-2px);
    border-color: white;
    border-style: solid;
    border-width: 2px;
  }
`;

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
    <GlobalStyle/>
    <div style={{backgroundColor: '#000'}}>
    <Navbar/>
    <ContactWrapper>
      <Header>GET IN TOUCH</Header>
      <Subtitle>
        Have big ideas or big problems? Either way, you're in the right place. 
        At DigiDaksha, we turn digital dreams into market realities and legal 
        complexities into walks in the park.
      </Subtitle>

      <OptionsSection>
        <OptionTitle>PLEASE CHOOSE ONE OF THE OPTIONS</OptionTitle>
        <StyledLink to='/contactform' onClick={handleScrollToTop}><OptionCard onClick={() => setSelectedOption('small')}>
          <Building2 size={24} />
         <div>
            <h3>I RUN A SMALL BUSINESS</h3>
            <p>and I am looking for...</p>
          </div>
        </OptionCard></StyledLink>
        <StyledLink to='/contactform' onClick={handleScrollToTop}><OptionCard onClick={() => setSelectedOption('enterprise')}>
          <User size={24} />
          <div>
            <h3>I AM A PART OF A LARGE ENTERPRISE</h3>
            <p>and I am looking for...</p>
          </div>
        </OptionCard></StyledLink>
        <StyledLink to='/contactform' onClick={handleScrollToTop}><OptionCard onClick={() => setSelectedOption('creator')}>
          <Video size={24} />
          <div>
            <h3>I'M A SOLO CREATOR</h3>
            <p>and I am looking for...</p>
          </div>
        </OptionCard></StyledLink>
      </OptionsSection>

      <ContactInfo>
        <InfoItem>
          <h3>Shoot Us an Email:</h3>
          <p>
            <Mail size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            info@digidaksha.com
          </p>
        </InfoItem>
        <InfoItem>
          <h3>Swing By for a Chat:</h3>
          <p>
            <MessageSquare size={24}  style={{ marginRight: '8px', verticalAlign: 'middle' }}/>
            +91 8019612797
          </p>
        </InfoItem>
        <InfoItem>
          <h3>Give Us a Ring:</h3>
          <p>
            <Phone size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            +91 8019612797
          </p>
        </InfoItem>
      </ContactInfo>

      <CTASection>
        <CTATitle>PREFER TEXTING TO TALKING?</CTATitle>
        <p>Fill out our quick contact form and let's get the ball rolling:</p>
        <Link to='/contactform' onClick={handleScrollToTop}><CTAButton>
          FILL THE FORM
          <ArrowRight size={20} />
        </CTAButton></Link>
      </CTASection>
    </ContactWrapper>
      <Footer/>
    </div>
    </>
  );
};

export default Contact;


const StyledLink= styled(Link)`
color: white;
text-decoration: none;
`