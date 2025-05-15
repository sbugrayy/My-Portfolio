import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
              url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  color: #ffffff;
  overflow: hidden;
  overflow-y: auto;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 6rem;
  
  @media (max-width: 768px) {
    padding-top: 4rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #00ff00;
  text-align: center;
`;

const ContactForm = styled.form`
  background-color: #2a2a2a;
  padding: 2rem;
  border-radius: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
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

const TextArea = styled.textarea`
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

const SubmitButton = styled.button`
  background-color: #00ff00;
  color: #000000;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #00cc00;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialLink = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #00ff00;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData);
  };

  return (
    <ContactContainer>
      <ContentWrapper>
        <Title>İletişim</Title>
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Ad Soyad</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
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
            />
          </FormGroup>
          <SubmitButton type="submit">Gönder</SubmitButton>
        </ContactForm>
        <SocialLinks>
          <SocialLink href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </SocialLink>
          <SocialLink href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </SocialLink>
          <SocialLink href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </SocialLink>
        </SocialLinks>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default Contact; 