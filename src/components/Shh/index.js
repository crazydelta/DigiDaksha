import React, { useState } from 'react';
import styled from 'styled-components';
import HomeImage0 from '../../Assets/HomeImage0.png';
import HomeImage1 from '../../Assets/HomeImage1.png';
import HomeImage2 from '../../Assets/HomeImage2.png';

// Sample data
const items = [
  { id: 1, title: "Brand Building", image: HomeImage0 },
  { id: 2, title: "Digital Marketing",  image: HomeImage1 },
  { id: 3, title: "Legal Guardianship",  image: HomeImage2 },
];

// Styled components
const ListContainer = styled.div`
  width: 100vw;
  margin: 0 auto;
  text-align: center;
  overflow: hidden; /* Hide overflow to prevent showing items out of view */
`;

const ListItemContainer = styled.div`
  margin: 20px 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: translateY(${props => (props.isVisible ? 0 : -20)}); /* Slide effect */
`;

const Title = styled.h3`
  margin: 0;
`;

const NextButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Main List Component
const ListComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleNext = () => {
    setIsVisible(false); // Start the exit transition
    setTimeout(() => {
      if (currentIndex < items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0); // Loop back to the first item
      }
      setIsVisible(true); // Start the entry transition
    }, 500); // Match this duration with the CSS transition duration
  };

  return (
    <ListContainer>
      <ListItemContainer isVisible={isVisible}>
        <Title>{items[currentIndex].title}</Title>
        <div>
          <img src={items[currentIndex].image} alt={items[currentIndex].title} style={{ width: '80vw', height:'40vh' }} />
        </div>
        <NextButton onClick={handleNext}>Next</NextButton>
      </ListItemContainer>
    </ListContainer>
  );
};

export default ListComponent;