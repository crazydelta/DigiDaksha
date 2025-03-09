import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle'

// Styled components
const ListContainer = styled.ol`
  list-style-type: decimal-leading-zero;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ListItem = styled.li`
  margin: 8vh 0; /* Adds space between items for smoother transitions */
  margin-top: 2vh;
  margin-left: 10px;
  width: 100%; /* Ensures full width */
  h1 {
    margin: 0;
    top: 20%; /* Adjust position relative to the viewport */
    background: black;
    color: white;
    z-index: 2;
  }
  h4 {
    color: grey;
    margin: 20px 0;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    max-height: ${({ isVisible }) => (isVisible ? '500px' : '0')};
    overflow: hidden;
    transition: opacity 1.5s ease, max-height 0.5s ease, visibility 0s ease ${({ isVisible }) =>
        isVisible ? '0s' : '0.5s'};
  }
  hr {
    border: 0;
    height: 1px;
    background: #393a3b;
    margin: 10px 0;
  }
`;

// React Component
const AnimatedList = () => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const listRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportTop = window.innerHeight / 3; // Adjust as necessary
     // const viewportBottom = window.innerHeight; // Adjust to expand range
      const newIndex = listRefs.current.findIndex((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= viewportTop; // Adjust range for smooth transitions
        }
        return false;
      });
      setFocusedIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const listData = [
    {
      title: 'Consultancy & Discovery',
      description:
        "First, we put on our detective hats. This is the 'getting to know you' phase. We sit down, sip some coffee, and explore your dreams, challenges, and opportunities. We're all ears figuring out how to make your brand not just survive, but thrive.",
    },
    {
      title: 'Strategy Development',
      description:
        "Using the insights gathered, we design a master plan. Think of it as a blueprint for brilliance, as unique as your brand, customized just for you. This isn't off-the-shelf; it's off-the-charts.",
    },
    {
      title: 'Implementation',
      description:
        'With the roadmap in hand, we roll up our sleeves (yes, even the fancy ones) and bring your vision to life. This is where the magic happens and by magic, we mean hard work paying off.',
    },
    {
      title: 'Analysis & Optimization',
      description:
        "The launch isn't the finish line; it's just the beginning. We monitor, analyze, and refine. Think of us as your business's personal trainers always pushing you to your peak performance.",
    },
  ];

  return (
    <>
    <GlobalStyle/>
    <ListContainer>
      {listData.map((item, index) => (
        <ListItem
          key={index}
          isVisible={index === focusedIndex}
          ref={(el) => (listRefs.current[index] = el)}
        >
          <h1 className="list-topics">{item.title}</h1>
          <h4 className="sub-para">{item.description}</h4>
          <hr />
        </ListItem>
      ))}
    </ListContainer>
    </>
  );
};

export default AnimatedList;



