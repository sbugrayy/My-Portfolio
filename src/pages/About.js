import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 2rem 2rem 8rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
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

const ImageSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled(motion.img)`
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
`;

const TextSection = styled(motion.div)`
  color: #ffffff;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #00ff00;
  cursor: default;
  position: relative;
  z-index: 1;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  cursor: default;
  position: relative;
  z-index: 1;
`;

const SkillsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  cursor: default;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:before {
    content: "▹";
    color: #00ff00;
  }
`;

const About = () => {
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
    <AboutContainer>
      <ContentWrapper>
        <ImageSection
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ProfileImage
            src="../../images/profilFoto.webp"
            alt="Profil Fotoğrafı"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          />
        </ImageSection>
        <TextSection
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ben Kimim?
          </Title>
          <Description variants={itemVariants}>
            Merhaba! Ben Buğra Yıldırım. Yaklaşık 2 yıldır oyun geliştirme, savunma sanayi sistemleri,
            web geliştirme ve müzik yapımcılığı gibi alanlarla ilgilenen bilgisayar mühendisiyim.
            Bu süreçte, farklı disiplinleri bir araya getirerek hem teknik hem de sanatsal becerilerimi geliştirmeye odaklandım.
          </Description>
          <Description variants={itemVariants}>
            Oyun geliştirme alanında uzmanlaşmış olup,
            oyuncu deneyimini ön planda tutarak yaratıcı ve etkileşimli projeler geliştiriyorum.
            Oyunlara özel müzikler de üreterek projelere atmosfer ve derinlik katıyorum.
            Web geliştirme tarafında ise modern teknolojileri kullanarak kullanıcı deneyimini ön planda tutan projeler ürettim.
            Sürekli kendimi geliştiriyor, oyun motorları ve güncel teknolojileri yakından takip ediyorum.
          </Description>
          <SkillsList variants={containerVariants}>
            {[
              "Unity (C#)",
              "Python (PyQt5)",
              "React",
              "JavaScript",
              "Arduino (C++)",
              "SQL",
              "Git",
              "Java",
              "Windows Forms (C#)",
              "FL Studio"
            ].map((skill, index) => (
              <SkillItem
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10, color: "#00ff00" }}
              >
                {skill}
              </SkillItem>
            ))}
          </SkillsList>
        </TextSection>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About; 