import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactContainer = styled(motion.div)`
  min-height: 100vh;
  padding: 2rem 2rem 8rem;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
              url('https://raw.githubusercontent.com/sbugrayy/portfolyo/main/public/images/klavye.jpg');
  background-size: cover;
  background-position: center;
  color: #ffffff;
  overflow: hidden;
  overflow-y: auto;
  height: 100vh;
`;

const ContentWrapper = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 6rem;
  
  @media (max-width: 768px) {
    padding-top: 4rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #00ff00;
  text-align: center;
`;

const ContactForm = styled(motion.form)`
  background-color:rgba(42, 42, 42, 0);
  padding: 2rem;
  border-radius: 10px;
`;

const FormGroup = styled(motion.div)`
  margin-bottom: 1.5rem;
`;

const Label = styled(motion.label)`
  display: block;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #404040;
  border-radius: 5px;
  background-color: #1a1a1a;
  color: #ffffff;
  
  &:focus {
    outline: none;
    border-color: #00ff00;
  }
`;

const TextArea = styled(motion.textarea)`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #404040;
  border-radius: 5px;
  background-color: #1a1a1a;
  color: #ffffff;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #00ff00;
  }
`;

const SubmitButton = styled(motion.button)`
  background-color: #00fd00;
  color: #000000;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background-color: rgba(0, 253, 0, 0.57);
    color: white;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #404040;
    color: #808080;
    cursor: not-allowed;
    transform: none;
  }
`;

const StatusMessage = styled(motion.div)`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  background-color: ${props => props.success ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)'};
  color: ${props => props.success ? '#00ff00' : '#ff0000'};
  border: 1px solid ${props => props.success ? '#00ff00' : '#ff0000'};
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialLink = styled(motion.a)`
  color: #ffffff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #00ff00;
  }
`;

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ show: false, success: false, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ show: false, success: false, message: '' });

    try {
      await emailjs.sendForm( 
        form.current,
      );

      setStatus({
        show: true,
        success: true,
        message: 'Mesajınız başarıyla gönderildi!'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        show: true,
        success: false,
        message: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer>
      <ContentWrapper>
        <Title>İletişim</Title>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Ad Soyad</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">E-posta</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Mesaj</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </FormGroup>
          <SubmitButton 
            type="submit" 
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
          </SubmitButton>
          {status.show && (
            <StatusMessage success={status.success}>
              {status.message}
            </StatusMessage>
          )}
        </ContactForm>
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
      </ContentWrapper>
    </ContactContainer>
  );
};

export default Contact; 