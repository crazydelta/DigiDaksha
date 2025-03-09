import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import styled from 'styled-components';
import {Instagram, Linkedin, Facebook } from 'lucide-react';
import HomeImage0 from '../../Assets/HomeImage0.png'
import HomeImage1 from '../../Assets/HomeImage1.png'
import HomeImage2 from '../../Assets/HomeImage2.png'
import Footer  from '../Footer';
import './index.css'
import AnimatedList from '../Animatedlist';
import ScrollImage from '../ScrollImage';

const whoNeedsUs=['Startup Innovators', 'Creative Minds', 'Community Champions', 'Corporate Powerhouses', 'Business Builders', 'E-Commerce Platforms']

const Home= ()=>{
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

    return (
        <div className='cont'>
            <div className='home-top-section'>
               <Navbar/>
               <div className='top-content-home'>
                  <div className='succ' >
                    <h1 className='main-heading main-heading1' style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}}>DARE TO SUCCEED?</h1>
                    <h1 className='sub-para' style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'}}>We'll Handle The Boring Stuff</h1>
                  </div>
                  <div >
                    <Link to='/contactform' onClick={handleScrollToTop}><GetInTouch>Get In Touch</GetInTouch></Link>
                    <div>
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
                    </div>
                  </div>
               </div>
            </div>
            <div className='whatWeDo'>
                <h1 className='main-heading'>WHAT DO WE DO?</h1>
                <h4 style={{color: 'grey'}} className='sub-para'>Oh, just a little bit of everything to make sure your business doesn't just survive the digital jungle, but thrives like a king! At DigiDaksha, We don't just work for you; we work with you.
                Think of us as the secret sauce to your digital success</h4>
                <ScrollImage handleScrollToTop={handleScrollToTop}
                      HomeImage0={HomeImage0}
                      HomeImage1={HomeImage1}
                      HomeImage2={HomeImage2}
                      />
                <div>
                   <h1 className='main-heading'>HOW DO WE DO IT?</h1>
                   <h4 style={{color: 'grey'}} className='sub-para'>
                       At DigiDaksha, our approach is like a finely-tuned orchestra, but with less bow-tie and more ROl. We're not just throwing darts in the dark; we strategize, we implement, and we conquer. Here's how we turn your aspirations into success:
                   </h4>
                </div>
                <div style={{padding:'30px'}}>
                   <AnimatedList/>
                </div>
            </div>
            <div className='why'>
                <h1 className='main-heading'>WHY Digi Daksha?</h1>
                <p style={{color:'grey'}} className='sub-para'>Because "good enough" isn't in our dictionary.
                    At Digi Daksha, we lift the ordinary to the extraordinary. Partner with us and you're essentially choosing to win the business lottery-Our team? They re wizards, not just workers.
                    They transform branding into art and digital strategies into victories. And the legal landscape? We navigate it with the precision of a chess master, ensuring every move is perfectly legal and strategically sound
                    Choosing Digi Daksha means getting serious results with a team that doesn't take itself too seriously. After all, who says business transformation can't be fun?</p>
            </div>
            <div className='who-needs-us'>
                <div className='whncont'>
                    <h1 className='main-heading' style={{textAlign: 'left'}}>WHO NEED US?</h1>
                    <p style={{color:'grey'}} className='sub-para'>Ready to outshine your competition?
                    DigiDaksha is here! <br/>We specialize in transforming potential into prowess across various sectors:</p>
                </div>
                <div className='whncont wrapper'>
                    {whoNeedsUs.map((each,index)=>{
                        return <div className='needuscard menu-item' key={index}>
                            <h2 style={{fontWeight:'lighter'}}>{each}</h2>
                        </div>
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home


const GetInTouch= styled.button`
background-color: transparent;
border-style: solid;
border-width: 2px;
border-radius: 25px;
height: 60px;
width: 200px;
padding: 5px;
color: white;
border-color: white;
font-size:20px;
cursor: pointer;
margin-top: 20px;
&:hover {
    background-color: white;
    color: black;
  }
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  width: 50px; /* Set a fixed width */
  height: 50px; /* Set a fixed height */
  display: flex; /* Flexbox for centering */
  align-items: center; /* Center content vertically */
  justify-content: center; /* Center content horizontally */
  padding: 0; /* Remove extra padding to avoid size mismatch */
  color: #fff;
  font-size: 1.5rem;
  border-radius: 50%; /* Perfect circle */
  border-color: white;
  border-style: solid;
  border-width: 1px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

