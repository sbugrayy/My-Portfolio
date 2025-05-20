import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
              url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  overflow-y: auto;
  height: 100vh;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  letter-spacing: -0.5px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #00ff00;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SkillCard = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2.5rem;
  border-radius: 0;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    border-color: #00ff00;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: #00ff00;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  
  ${SkillCard}:hover & {
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SkillDescription = styled.p`
  color: #cccccc;
  line-height: 1.8;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const Skills = () => {
  const skillsData = [
    {
      icon: "🎮",
      title: "Oyun Geliştirme",
      description: "Hem PC hem de mobil platformlar için çeşitli oyun türlerinde geliştirme. Unity gibi güçlü araçlarla sürükleyici deneyimler tasarlama."
    },
    {
      icon: "🚀",
      title: "Roket Algoritması ve Uygulama",
      description: "Roket algoritmaları, haberleşme sistemleri kurma ve masaüstü uygulaması geliştirme. Algoritma ve haberleşme sisteminde Arduino (C++), kullanıcı arayüzü için PyQt5 kullanımı."
    },
    {
      icon: "💻",
      title: "Web Geliştirme",
      description: "Modern ve responsive web uygulamaları geliştirme. React, Node.js ve diğer modern teknolojileri kullanarak kullanıcı dostu arayüzler oluşturma."
    },
    {
      icon: "🖼️",
      title: "Görsel Programlama",
      description: "Modern ve responsive web uygulamaları geliştirme. React, Node.js ve diğer modern teknolojileri kullanarak kullanıcı dostu arayüzler oluşturma."
    },
    {
      icon: "🎨",
      title: "UI/UX Tasarım",
      description: "Kullanıcı deneyimini ön planda tutan, modern ve estetik arayüzler tasarlama. Material Design ve diğer modern tasarım prensiplerini uygulama."
    },
    {
      icon: "📊",
      title: "Veritabanı Yönetimi",
      description: "SQL veritabanları ile çalışma. Veritabanı tasarımı, optimizasyonu ve yönetimi konularında deneyim."
    },
    {
      icon: "🎵", 
      title: "Müzik Prodüksiyonu",
      description: "FL Studio kullanarak çeşitli türlerde müzik üretimi ve ses tasarımı."
    },
    {
      icon: "⚡️",
      title: "Performans Optimizasyonu",
      description: "Web ve masaüstü uygulamalarının performansını artırma, yükleme sürelerini optimize etme ve kullanıcı deneyimini iyileştirme."
    }
  ];

  return (
    <SkillsContainer>
      <ContentWrapper>
        <Title>Neler Yapabilirim?</Title>
        <SkillsGrid>
          {skillsData.map((skill, index) => (
            <SkillCard key={index}>
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillCard>
          ))}
        </SkillsGrid>
      </ContentWrapper>
    </SkillsContainer>
  );
};

export default Skills; 