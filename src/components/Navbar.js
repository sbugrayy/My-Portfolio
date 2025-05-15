import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  background-color: rgba(0, 0, 0, 0.9);
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion(Link))`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #00ff00;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const MenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.95);
    padding: 1rem;
    gap: 1rem;
    backdrop-filter: blur(10px);
  }
`;

const NavLink = styled(motion(Link))`
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #00ff00;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
  
  &.active:after {
    width: 100%;
    background-color: #00ff00;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavContainer>
        <Logo 
          to="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Portfolyo
        </Logo>
        <MenuButton 
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MenuIcon />
        </MenuButton>
        <NavLinks
          isOpen={isOpen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <NavLink 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Ana Sayfa
          </NavLink>
          <NavLink 
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Ben Kimim?
          </NavLink>
          <NavLink 
            to="/skills"
            className={location.pathname === '/skills' ? 'active' : ''}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Neler Yapabilirim?
          </NavLink>
          <NavLink 
            to="/portfolyo"
            className={location.pathname === '/portfolyo' ? 'active' : ''}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Portfolyo
          </NavLink>
          <NavLink 
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            İletişim
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 