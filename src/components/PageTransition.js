import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import styled from 'styled-components';

const TransitionContainer = styled(motion.div)`
  position: relative;
  min-height: 100vh;
`;

const PageTransition = ({ children }) => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 1,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 2
          }}
        />
        <Particles
          id="transitionParticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: 'transparent',
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'grab',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 2,
                },
                grab: {
                  distance: 140,
                  links: {
                    opacity: 0.5,
                  },
                },
              },
            },
            particles: {
              color: {
                value: ['#00ff00', '#00cc00', '#009900'],
              },
              links: {
                color: '#00ff00',
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: true,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 50,
              },
              opacity: {
                value: 0.4,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.2,
                },
              },
              shape: {
                type: ['circle', 'triangle'],
              },
              size: {
                value: { min: 1, max: 3 },
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 0.5,
                },
              },
              rotate: {
                value: {
                  min: 0,
                  max: 360
                },
                direction: 'random',
                animation: {
                  enable: true,
                  speed: 5
                },
                random: true
              },
            },
            detectRetina: true,
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </TransitionContainer>
    </AnimatePresence>
  );
};

export default PageTransition; 