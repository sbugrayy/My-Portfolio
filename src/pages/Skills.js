import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 2rem;
  background-color: #1a1a1a;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #00ff00;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled.div`
  background-color: #2a2a2a;
  padding: 2rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: #00ff00;
  margin-bottom: 1rem;
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const SkillDescription = styled.p`
  color: #cccccc;
  line-height: 1.6;
`;

const Skills = () => {
  const skillsData = [
    {
      icon: "💻",
      title: "Web Geliştirme",
      description: "Modern ve responsive web uygulamaları geliştirme. React, Node.js ve diğer modern teknolojileri kullanarak kullanıcı dostu arayüzler oluşturma."
    },
    {
      icon: "📱",
      title: "Mobil Uyumluluk",
      description: "Tüm cihazlarda sorunsuz çalışan, responsive tasarımlar. Mobile-first yaklaşımı ile modern web uygulamaları geliştirme."
    },
    {
      icon: "🔧",
      title: "Backend Geliştirme",
      description: "RESTful API'ler, veritabanı yönetimi ve sunucu tarafı uygulamalar geliştirme. Node.js ve Express.js ile güvenli ve ölçeklenebilir backend sistemleri."
    },
    {
      icon: "🎨",
      title: "UI/UX Tasarım",
      description: "Kullanıcı deneyimini ön planda tutan, modern ve estetik arayüzler tasarlama. Material Design ve diğer modern tasarım prensiplerini uygulama."
    },
    {
      icon: "📊",
      title: "Veritabanı Yönetimi",
      description: "SQL ve NoSQL veritabanları ile çalışma. Veritabanı tasarımı, optimizasyonu ve yönetimi konularında deneyim."
    },
    {
      icon: "🚀",
      title: "Performans Optimizasyonu",
      description: "Web uygulamalarının performansını artırma, yükleme sürelerini optimize etme ve kullanıcı deneyimini iyileştirme."
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