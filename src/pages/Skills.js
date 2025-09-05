import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 6rem;
  background: transparent;
  background-size: cover;
  background-position: center;
  overflow: visible;
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

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #00ff00;
  text-align: center;
  font-weight: 700;
  letter-spacing: -0.5px;
  position: relative;
  cursor: default;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
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

const SkillCard = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2.5rem;
  border-radius: 0;
  cursor: default;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    border-color: #00ff00;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SkillIcon = styled(motion.div)`
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

const SkillTitle = styled(motion.h3)`
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SkillDescription = styled(motion.p)`
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
      title: "Masaüstü Uygulama Geliştirme",
      description: "Roket algoritmaları, sensör ve görüntü haberleşme sistemleri kurma ve masaüstü uygulaması geliştirme. Algoritmada ve sensör haberleşme sisteminde Arduino (C++), görüntü haberleşme sistemi için Python,kullanıcı arayüzü için PyQt kullanımı."
    },
    {
      icon: "💻",
      title: "Web Geliştirme",
      description: "Modern ve responsive web uygulamaları geliştirme. React ve diğer modern teknolojileri kullanarak kullanıcı dostu arayüzler oluşturma."
    },
    {
      icon: "🖼️",
      title: "Görsel Programlama",
      description: "PyQt ile seri port üzerinden veri okuma, verileri görsel olarak OpenGL ile grafiklerle sunma, modern arayüzlü uygulamalar geliştirme. C# Windows Forms kullanarak temel kullanıcı arayüzleri ve veri işleme özelliklerine sahip uygulamalar geliştirme. "
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <SkillsContainer>
      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Neler Yapabilirim?
        </Title>
        <SkillsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <SkillIcon
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {skill.icon}
              </SkillIcon>
              <SkillTitle
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              >
                {skill.title}
              </SkillTitle>
              <SkillDescription
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
              >
                {skill.description}
              </SkillDescription>
            </SkillCard>
          ))}
        </SkillsGrid>
      </ContentWrapper>
    </SkillsContainer>
  );
};

export default Skills; 