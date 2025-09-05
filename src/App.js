import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolyo from './pages/Portfolyo';
import Contact from './pages/Contact';
import PageTransition from './components/PageTransition';
import FaultyTerminal from './components/FaultyTerminal';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
  position: relative;
  overflow: visible;
`;

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
        <Route path="/Portfolyo" element={<PageTransition><Portfolyo /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AppContainer>
        <FaultyTerminal
          scale={1.8}
          gridMul={[2.5, 1.2]}
          digitSize={1.4}
          timeScale={0.8}
          pause={false}
          scanlineIntensity={0.8}
          glitchAmount={1.2}
          flickerAmount={0.8}
          noiseAmp={0.6}
          chromaticAberration={0.1}
          dither={0.3}
          curvature={0.1}
          tint="#00ff00"
          mouseReact={true}
          mouseStrength={0.7}
          pageLoadAnimation={true}
          brightness={0.9}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -10,
            pointerEvents: 'none',
          }}
        />
        <Navbar />
        <AnimatedRoutes />
      </AppContainer>
    </Router>
  );
}

export default App;
