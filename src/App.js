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
import ParticlesBackground from './components/ParticlesBackground';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
  position: relative;
  overflow: hidden;
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
        <ParticlesBackground />
        <Navbar />
        <AnimatedRoutes />
      </AppContainer>
    </Router>
  );
}

export default App;
