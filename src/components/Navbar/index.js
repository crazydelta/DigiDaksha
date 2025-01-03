import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbarlogo  from '../../Assets/Navbarlogo.png'
import DigiDakshaFinal from '../../Assets/DigiDakshaFinal.png'
import { Menu, X } from 'lucide-react';

// Styled Components
const Nav = styled.nav`
  background-color: transparent;
  backdrop-filter: blur(90px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  z-index: 50;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

const Logo = styled.img`
  height: 100px;
  width: 150px;
`;

const DesktopMenu = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

const MobileMenuButton = styled.button`
  color: #fff; 
  padding: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: #ddd;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh; /* Full height */
  width: 250px; /* Consistent width */
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 100;
  overflow-y: auto; /* Allow scrolling */
  padding: 20px;
  font-weight:bold;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 50;
`;

const NavItem = styled.a`
  color: #4a5568; 
  padding: 0.5rem 0.75rem; 
  border-radius: 0.375rem; 
  font-size: 30px; 
  transition: color 0.2s;
  text-decoration: none;

  &:hover {
    color: #2d3748;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #2d3748;
  }
`;
const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px; // Space from the top
`;
const Mmobile= styled.div`
display: flex;
justify-content: space-between;
width:250px;
margin-bottom: 40px;
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    document.body.style.overflowX = isOpen ? 'hidden' : ''; 
    return () => {
      document.body.style.overflowX = '';
    };
  }, [isOpen]);

  return (
    <>
      <Nav>
        <Container>
          <FlexContainer>
            <Link to='/'>
              <Logo src={DigiDakshaFinal} alt='DIGI DAKSHA' />
            </Link>
            <DesktopMenu>
              {navItems.map((item) => (
                <StyledLink key={item.label} to={item.path}>
                  <NavItem>{item.label}</NavItem>
                </StyledLink>
              ))}
            </DesktopMenu>

            <MobileMenuButton 
              onClick={toggleMenu} 
              aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"} 
              aria-expanded ={isOpen ? 'true' : 'false'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </MobileMenuButton>
          </FlexContainer>
        </Container>
      </Nav>
      <Overlay isOpen={isOpen} onClick={toggleMenu} />
      <MobileMenu isOpen={isOpen}>
        <Mmobile>
          <Logo src={Navbarlogo} alt="DIGI DAKSHA"/>
          <CloseButton onClick={toggleMenu}>×</CloseButton>
        </Mmobile>
        <Items>
          {navItems.map((item) => (
            <StyledLink key={item.label} to={item.path} onClick={toggleMenu}>
              <NavItem>{item.label}</NavItem>
            </StyledLink>
          ))}
        </Items>
      </MobileMenu>
    </>
  );
};

export default Navbar;