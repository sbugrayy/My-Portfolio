import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  height: 100vh;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
    cursor: default;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #00ff00;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: #ffffff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #00ff00;
  }
`;

const AnimatedText = styled(motion.div)`
  display: inline-block;
  margin-left: 0.5rem;
    cursor: default;
`;

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Game Developer', 'Backend Developer', 'Music Producer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, );

  return (
    <HomeContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Merhaba, Ben Buğra
      </Title>
      <AnimatePresence mode="wait">
        <AnimatedText
          key={currentRole}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Subtitle>{roles[currentRole]}</Subtitle>
        </AnimatedText>
      </AnimatePresence>
      <SocialLinks
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <SocialLink
          href="https://www.youtube.com/@subnine9937"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: '#00ff00' }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-youtube"></i>
        </SocialLink>
        <SocialLink
          href="https://github.com/sbugrayy"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: '#00ff00' }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-github"></i>
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/bu%C4%9Fra-y%C4%B1ld%C4%B1r%C4%B1m-b53b28298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: '#00ff00' }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-linkedin"></i>
        </SocialLink>
      </SocialLinks>
    </HomeContainer>
  );
};

export default Home;