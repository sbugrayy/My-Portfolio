import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 2rem 2rem 8rem;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
              url('https://raw.githubusercontent.com/sbugrayy/portfolyo/main/public/images/laptop1.webp');
  background-size: cover;
  background-position: center;
  color: #ffffff;
  overflow: hidden;
  overflow-y: auto;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding-top: 6rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-top: 4rem;
  }
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
`;

const TextSection = styled.div`
  color: #ffffff;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #00ff00;
  cursor: default;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  cursor: default;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  cursor: default;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:before {
    content: "▹";
    color: #00ff00;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <ContentWrapper>
        <ImageSection>
          <ProfileImage
            src="https://raw.githubusercontent.com/sbugrayy/portfolyo/main/public/images/profilFoto.webp"
            alt="Profil Fotoğrafı"
          />
        </ImageSection>
        <TextSection>
          <Title>Ben Kimim?</Title>
          <Description>
            Merhaba! Ben Buğra, 1 yıllık deneyime sahip bir Game Developer'ım.
            Yazılım geliştirme tutkum ve sürekli öğrenme isteğimle, modern ve eğlenceli
            oyunlar geliştiriyorum.
          </Description>
          <Description>
            Oyun geliştirme alanında uzmanlaşmış olup,
            oyuncu deneyimini ön planda tutarak yaratıcı ve etkileşimli projeler geliştiriyorum.
            Oyunlara özel müzikler de üreterek projelere atmosfer ve derinlik katıyorum.
            Sürekli kendimi geliştiriyor, oyun motorları ve güncel teknolojileri yakından takip ediyorum.
          </Description>
          <SkillsList>
            <SkillItem>Unity (C#)</SkillItem>
            <SkillItem>Python (PyQt5)</SkillItem>
            <SkillItem>React</SkillItem>
            <SkillItem>JavaScript</SkillItem>
            <SkillItem>Arduino (C++)</SkillItem>
            <SkillItem>SQL</SkillItem>
            <SkillItem>Git</SkillItem>
            <SkillItem>Java</SkillItem>
            <SkillItem>Windows Forms (C#)</SkillItem>
            <SkillItem>FL Studio</SkillItem>
          </SkillsList>
        </TextSection>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About; 