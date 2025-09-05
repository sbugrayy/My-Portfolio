import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const TransitionContainer = styled(motion.div)`
  position: relative;
  min-height: 100vh;
`;

const PageTransition = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <TransitionContainer
        key="page-transition"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ 
          duration: 1.2,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      >
        {children}
      </TransitionContainer>
    </AnimatePresence>
  );
};

export default PageTransition; 