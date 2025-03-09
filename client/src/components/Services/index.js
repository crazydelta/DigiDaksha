import {Link} from 'react-router-dom'
import Navbar from '../Navbar';
import Footer from '../Footer';
import InfoCard from './InfoCard';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';

const startups=[
    {
        heading: 'BRAND IDENTITY',
        displaytext: ['Logo Design', 'Brand Kit', 'Corporate Identity', 'Package Design', 'Typography']
    },
    {
        heading: 'WEBSITE DESIGN & DEVELOPMENT',
        displaytext: ['User Interface (UI) Design', 'User Experience (UX) Design', 'Mobile Optimization', 'SEO Basics']
    },
    {
        heading: 'DIGITAL MARKRTING',
        displaytext: ['SEO Strategy', 'Pay-Per--Click (PPC) Campaigns', 'Social Media Management', 'Email Marketing', 'Content Marketing']
    },
    {
        heading: 'LEGAL CONSULTANCY',
        displaytext: ['Intellectual Property Rights', 'Contract Review and Negotiation', 'Compliance Advice']
    }
]

const business=[
    {
        heading: 'CORPORATE BRANDING',
        displaytext: ['Brand Strategy', 'Corporate Identity', 'Brand Guidelines', 'Executive Branding']
    },
    {
        heading: 'WEBSITE DESIGN & DEVELOPMENT',
        displaytext: ['Enterprise Web Solutions', 'E-Commerce Solutions']
    },
    {
        heading: 'PACKAGE DESIGNS',
        displaytext: ['Industrial Designs', 'Sustainable Packaging', 'Retail Packaging']
    },
    {
        heading: 'DIGITAL MARKETING',
        displaytext: ['Content Marketing', 'Online Reputation Management', 'Lead Generation', 'Corporate Communications']
    },
    {
        heading:'LEGAL CONSULTANCY',
        displaytext: ['Corporate Compliance', 'Mergers & Acquisitions', 'Intellectual Property Management', 'HR Policies', 'Employee Policies and Contract Drafting']
    }
]

const creativeMinds=[
    {
        heading: 'BRAND IDENTITY',
        displaytext: ['Personal Branding', 'Logo Design', 'Visual Style Guide']
    },
    {
        heading: 'WEBSITE DESIGN & dEVELOPMENT',
        displaytext: ['Portfolio Websites', 'Personal Blogs', 'E-Commerce for Creators']
    },
    {
        heading: 'SOCIAL MEDIA MARKETING',
        displaytext: ['Profile Otimization', 'Engagement Strategies', 'Influencer Collaborations']
    },
    {
        heading: 'CONTENT MARKETING',
        displaytext: ['Content Stratergy', 'Content Creation', 'Distribution Management']
    },
    {
        heading: 'LEGAL CONSULTANCY',
        displaytext: ['Copyright and Trademark Advice', 'Contract Negotiations', 'Online Rights Management']
    },
]

const packages= ['Brand Building', 'Brand Building + Digital Marketing', 'Brand Building + Digital Marketing + Corporate Legal Audit']

const Services = ()=>{
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
      };
    
    return(
        <>
        <GlobalStyle/>
        <MainCont>
           <Navbar/>
           <Pad>
            <ServicesHead>
                <Sh>Services</Sh>
            </ServicesHead>
            <div>
                <TitleItem>FOR START-UPS</TitleItem>
                <p>Kick-Start your empire with branding so sharp, it cuts through the digital noise like a hot knife through
                Butter</p>
                <hr style={{borderColor: 'gray'}}/>
            </div>
            {startups.map((startup, index) => (
                <InfoCard 
                    key={index} // Add a key for each InfoCard
                    heading={startup.heading} 
                    displaytext={startup.displaytext} 
                />
            ))}
            <div>
                <TitleItem >FOR BUSINESS BUILDERS</TitleItem>
                <p>Boost your business with strategies so clever, they'll make your rivals need a Band-Aid</p>
                <hr style={{borderColor: 'gray'}}/>
            </div>
            {business.map((startup, index) => (
                <InfoCard 
                    key={index} // Add a key for each InfoCard
                    heading={startup.heading} 
                    displaytext={startup.displaytext} 
                />
            ))}
            <div>
                <TitleItem>FOR CREATIVE MINDS</TitleItem>
                <p>Ignite your creativity with solutions that transform 'aha' moments into 'oh wow' results.</p>
                <hr style={{borderColor: 'gray'}}/>
            </div>
            {creativeMinds.map((startup, index) => (
                <InfoCard 
                    key={index} // Add a key for each InfoCard
                    heading={startup.heading} 
                    displaytext={startup.displaytext} 
                />
            ))}
            <div style={{marginTop:'8vh'}}>
                <h1 style={{fontFamily: 'montserrat', fontWeight: 'bold',fontSize:'48px'}}>PACKAGES</h1>
                <p>Our all-in-one packages---your Swiss Army knife for slicing through business challenges!</p>
                <hr/>
            </div>
                <StyledItems>
                   {packages.map(each=> <StyledItem><p>{each}</p></StyledItem>)}
                </StyledItems>
            <BottomCont>
                <div>
                    <TitleItem>Ready to start a project?</TitleItem>
                    <p style={{color: 'gray'}}>We have a whole team of programmers who are always ready to start your project right now.</p>
                </div>
               <Link to='/contactform' onClick={handleScrollToTop}><StyledButton>Contact Us</StyledButton></Link>
            </BottomCont>
           </Pad>
           <Footer/>
        </MainCont>
        </>
    )
}

export default Services

const MainCont= styled.div`
background-color: #000;
min-height: 100vh;
padding:0px;
margin: 0px;
color: #ffff;
font-family: 'montserrat', sans-serif;
`
const TitleItem= styled.h1`
font-size: 38px;

@media(min-width: 768px){
  font-size: 70px;
}
`
const Sh= styled.h1`
  letter-spacing: 3px;
  font-size: 70px;
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
const Pad= styled.div`
padding:30px;
`
const ServicesHead= styled.div`
display: flex;
justify-content: center;
padding: 10px;
margin-top: 10px;
`
const StyledItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 10px;
    margin-bottom:20px;
`;
const StyledItem = styled.div`
    display: inline-block; 
    border-style: solid;
    border-width: 1.5px;
    border-radius: 10px;
    padding: 10px; 
    border-color: #c0c5ca;
`;

const BottomCont=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 

@media(min-width: 768px){
flex-direction: row;
justify-content: space-between;
}
`
const StyledButton= styled.button`
height: 60px;
width: 100px;
background-color: transparent;
color: #ffff;
border-style: solid;
border-width: 1.5px;
border-color: grey;
border-radius: 10px;
margin-left: 10px;
font-weight: bold;
cursor: pointer;
&:hover {
    background-color: white;
    color: black;
  }
`