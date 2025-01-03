import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import styled from 'styled-components';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
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
                    <h1 className='main-heading'>DARE TO <br/> SUCCEED?</h1>
                    <h1 className='sub-para'>WE'LL HANDLE THE BORING STUFF</h1>
                  </div>
                  <div style={{marginLeft: '20px'}}>
                    <Link to='/contactform' onClick={handleScrollToTop}><GetInTouch>Get In Touch</GetInTouch></Link>
                    <div>
                        <SocialLinks>
                            <SocialLink href="#">
                              <Instagram />
                            </SocialLink>
                            <SocialLink href="https://www.linkedin.com/company/digi-daksha/">
                              <Linkedin />
                            </SocialLink>
                            <SocialLink href="#">
                              <Twitter />
                            </SocialLink>
                        </SocialLinks>
                    </div>
                  </div>
               </div>
            </div>
            <div className='whatWeDo'>
                <h1 className='main-heading'>WHAT DO WE DO?</h1>
                <hr/>
                <h4 style={{color: 'grey'}} className='sub-para'>Oh, just a little bit of everything to make sure your business doesn't just survive the digital jungle, but thrives like a king! At DigiDaksha, We don't just work for you; we work with you.
                Think of us as the secret sauce to your digital success</h4>
                <ScrollImage handleScrollToTop={handleScrollToTop}
                      HomeImage0={HomeImage0}
                      HomeImage1={HomeImage1}
                      HomeImage2={HomeImage2}
                      />
                <div>
                   <h1 className='main-heading'>HOW DO WE DO IT?</h1>
                   <hr/>
                   <h4 style={{color: 'grey'}} className='sub-para'>
                       At DigiDaksha, our approach is like a finely-tuned orchestra, but with less bow-tie and more ROl. We're not just throwing darts in the dark; we strategize, we implement, and we conquer. Here's how we turn your aspirations into success:
                   </h4>
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
                <div>
                    <h1 className='main-heading' style={{textAlign: 'center'}}>WHO NEED US?</h1>
                    <p style={{color:'grey'}} className='sub-para'>Ready to outshine your competition?
                    DigiDaksha is here! <br/>We specialize in transforming potential into prowess across various sectors:</p>
                </div>
                <div>
                    {whoNeedsUs.map(each=>{
                        return <div className='needuscard'>
                            <h2>{each}</h2>
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
border-radius: 10px;
height: 60px;
width: 100px;
padding: 5px;
color: white;
border-color: white;
font-weight: bold;
cursor: pointer;
margin-top: 20px;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
`;
