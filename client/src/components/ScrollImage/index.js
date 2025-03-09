import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GlobalStyle from '../GlobalStyle'

// Styled components
const ListContainer = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.div`
  position: relative;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;

  h1 {
    position: sticky;
    top: 0;
    background: black;
    color: white;
    z-index: 2;
    width: 100%;
    text-align: left;
    padding: 20px 10px;
    margin: 0;
    letter-spacing: 3px;
    font-family: 'Bebas Neue', sans-serif;
  }
  @media (min-width: 768px){
    h1{
      font-size: 80px;
    }
  }

  hr {
    width: 100%;
    border: 0;
    height: 1px;
    background: #393a3b;
  }

  .image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    transition: transform 0.5s ease, opacity 0.2s ease;
    transform: scale(${({ scale }) => scale});
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    overflow: hidden;
  }

  img {
    width: 100vw;
    object-fit: cover;
  }
`;

const GetInTouch = styled.button`
    background-color: transparent;
    border-style: solid;
    border-width: 2px;
    border-radius: 20px;
    height: 60px;
    width: 130px;
    padding: 5px;
    color: white;
    border-color: white;
    cursor: pointer;
    margin-top: 20px;
    font-size: 20px;

  &:hover {
    background-color: white;
    color: black;
    transform: translateY(-2px);
    border-color: white;
    border-style: solid;
    border-width: 2px;
  }
`;

// React Component
const ScrollImage = ({ handleScrollToTop, HomeImage0, HomeImage1, HomeImage2 }) => {
  const [scales, setScales] = useState([]);
  const listRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;

      const newScales = listRefs.current.map((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const positionInViewport = Math.min(
            Math.max((viewportHeight - rect.top) / viewportHeight, 0),
            1
          );

          if (rect.top < viewportHeight && rect.bottom > 0) {
            // Item within viewport
            return 0.5 + positionInViewport * 0.5;
          } else if (rect.top > viewportHeight) {
            // Item below the viewport, fully scaled down
            return 0.5;
          } else {
            // Item above the viewport, gradually scaling down
            return Math.max(0.5, (rect.bottom / viewportHeight) * 0.5);
          }
        }
        return 0.5;
      });

      setScales(newScales);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const listData = [
    {
      title: 'Brand Building',
      image: HomeImage0,
    },
    {
      title: 'Digital Marketing',
      image: HomeImage1,
    },
    {
      title: 'Legal Guardianship',
      image: HomeImage2,
    },
  ];

  return (
    <>
    <GlobalStyle/>
    <ListContainer>
      {listData.map((item, index) => {
        const scale = scales[index] || 0.5;

        return (
          <ListItem
            key={index}
            ref={(el) => (listRefs.current[index] = el)}
            scale={scale}
            isVisible={scale > 0.5}
          >
            <h1 className='main-heading'>{item.title}</h1>
            <hr />
            <div className="image-container">
              <img src={item.image} alt={item.title} style={{width:'100%'}}/>
            </div>
          </ListItem>
        );
      })}
      <Link to="/contactform" onClick={handleScrollToTop}>
        <GetInTouch>Contact Us</GetInTouch>
      </Link>
    </ListContainer>
    </>
  );
};

export default ScrollImage;




