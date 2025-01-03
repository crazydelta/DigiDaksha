import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import HomeImage0 from '../../Assets/HomeImage0.png'
import HomeImage1 from '../../Assets/HomeImage1.png'
import HomeImage2 from '../../Assets/HomeImage2.png'

interface SectionProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  height: fit-content;
  width: 80%;
  background-color: black;

  @media (min-width: 768px) {
    flex-direction: ${props => props.index % 2 === 0 ? 'row' : 'row-reverse'};
    justify-content: space-between;
    padding: 4rem 6rem;
  }
`;

const Content = styled(motion.div)`
  flex: 1;
  padding: 2rem;
  max-width: 600px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: white;
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.75;
  color: gray;
`;

const ImageWrapper = styled(motion.div)`
  flex: 1;
  padding: 2rem;
  max-width: 600px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const ScrollSection: React.FC<SectionProps> = ({ title, description, imageUrl, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    margin: "-100px",
    amount: 0.3,
    once: true
  });

  const contentVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: { opacity: 1, x: 0 }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Section ref={ref} index={index}>
      <Content
        variants={contentVariants}
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
      <ImageWrapper
        variants={imageVariants}
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <Image src={imageUrl} alt={title} loading="lazy" />
      </ImageWrapper>
    </Section>
  );
};

const Animation: React.FC = () => {
  const sampleData = [
    {
      title: "Brand Building",
      description: "Transforming ideas into reality through cutting-edge technology and innovative solutions. We help businesses navigate the digital landscape with confidence and creativity.",
      imageUrl: HomeImage0
    },
    {
      title: "Digital Marketing",
      description: "Transforming ideas into reality through cutting-edge technology and innovative solutions. We help businesses navigate the digital landscape with confidence and creativity.",
      imageUrl: HomeImage1
    },
    {
      title: "Legal Guardianship",
      description: " Pushing boundaries with bold, innovative designs that capture attention and inspire action. Our creative team brings fresh perspectives to every project.",
      imageUrl: HomeImage2
    },
    {
      title: "Smart Solutions",
      description: "Leveraging advanced technology to solve complex challenges. We deliver intelligent solutions that drive growth and efficiency for our clients.",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Future Forward",
      description: "Embracing tomorrow's technologies today. We help organizations stay ahead of the curve with forward-thinking solutions and strategic innovation.",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {sampleData.map((item, index) => (
        <ScrollSection
          key={index}
          index={index}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default Animation;