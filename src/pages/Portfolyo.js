import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PortfolyoContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 6rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
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

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0;
  overflow: hidden;
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
    margin: 0 1rem;
  }
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const ProjectContent = styled(motion.div)`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProjectTitle = styled(motion.h3)`
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled(motion.p)`
  color: #cccccc;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const ProjectTags = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const Tag = styled(motion.span)`
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 0;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  background-color: #00ff00;
  color: #000000;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;

const ProjectLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ProjectLink = styled(motion.a)`
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: #00ff00;
    transform: translateX(5px);
  }
  
  i {
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Portfolyo = () => {
  const projects = [
    {
      title: "İKA Kontrol Sistemi",
      description: "Savunma Sanayi Uygulaması. WebRTC, PyQt6, PyQt6-WebEngine, FireBase, Python, JavaScript kullanılarak geliştirildi. Gizlilikten dolayı şuan paylaşılmıyor.",
      image: "../../images/ikaApp.webp",
      tags: ["WebRTC", "PyQt6", "PyQt6-WebEngine", "FireBase", "Python", "JavaScript", "HTML"],
      githubLink: "https://github.com/sbugrayy/IkaApp"
    },
    {
      title: "Yer İstasyonu",
      description: "Roket Telemetri Verileri İçin Yer İstasyonu. PyQt5 ve QtDesigner ile geliştirildi.",
      image: "../../images/yerIstasyonu.webp",
      tags: ["PyQt5", "QtDesigner", "OpenGL"],
      githubLink: "https://github.com/sbugrayy/Ground-Station"
    },
    {
      title: "Safir",
      description: "EgeKaf GameJam 2025'te geliştirilen ve 2.'likle sonuçlanan 2D platform pixel art oyunu. Unity ile geliştirildi.",
      image: "../../images/safir.webp",
      tags: ["Unity", "C#", "FL Studio"],
      demoLink: "https://lmergenl.itch.io/safir",
      githubLink: "https://github.com/llmergenll/AnlyanPolis"
    },
    {
      title: "Hızlı Gol",
      description: "İki Kişilik Web Tabanlı Futbol Oyunu. HTML, CSS ve JavaScript kullanılarak geliştirildi.",
      image: "../../images/futbolFoto.webp",
      tags: ["HTML", "CSS", "JavaScript", "FL Studio"],
      demoLink: "https://sbugrayy.github.io/internet-futbol-game/",
      githubLink: "https://github.com/sbugrayy/internet-futbol-game"
    },
    { 
      title: "Terlikçi",
      description: "Balıkesir Teknokent'in düzenlediği GameJam 2025'te geliştirilen 2D pixel art oyunu. Unity ile geliştirildi.",
      image: "../../images/terlikci.webp",
      tags: ["Unity", "C#", "FL Studio"],
      githubLink: "https://github.com/sbugrayy/Terlikci"
    },
    { 
      title: "Farm Game",
      description: "Udemy'deki bir kurs ile geliştirilen 3D izometrik hyper casual oyun. Unity ile geliştirildi.",
      image: "../../images/farmGame.webp",
      tags: ["Unity", "C#", "FL Studio"],
      githubLink: "https://github.com/sbugrayy/Farm-Game"
    },
    { 
      title: "Portfolyo Web Sitesi",
      description: "Musa Yücesan için yapılan portfolyo web sitesi. React, Framer Motion, Styled Components kullanılarak geliştirildi.",
      image: "../../images/portfolyoMusa.webp",
      tags: ["React", "JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/sbugrayy/portfolio-musa"
    },
    { 
      title: "Tobacco App",
      description: "Küçük işletmeler için yapılmış basit bir kayıt uygulaması. PyQt5, SQL, Python kullanılarak geliştirildi.",
      image: "../../images/tobaccoApp.webp",
      tags: ["PyQt5", "SQL", "Python"],
      githubLink: "https://github.com/sbugrayy/Tobacco-App"
    },
    { 
      title: "Notepad",
      description: "Notepad++ uygulamasına benzer masaüstü uygulaması. PyQt5 ve QtDesigner ile geliştirildi.",
      image: "../../images/notepad.webp",
      tags: ["PyQt5", "QtDesigner"],
      githubLink: "https://github.com/sbugrayy/Notepad"
    },
    { 
      title: "Hava Durumu",
      description: "OpenWeatherMap sitesindeki verileri çekerek yapılan masaüstü uygulaması. Hem C# Windows Forms ile hem de PyQt5 ile geliştirildi.",
      image: "../../images/havaDurumu.webp",
      tags: ["PyQt5", "C#"],
      githubLinks: {
        pyqt: "https://github.com/sbugrayy/Weather-App-Python",
        csharp: "https://github.com/sbugrayy/Weather-App"
      }
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
    <PortfolyoContainer>
      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolyo
        </Title>
        <ProjectsGrid
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ProjectImage
                src={project.image}
                alt={project.title}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
              <ProjectContent>
                <ProjectTitle
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                >
                  {project.title}
                </ProjectTitle>
                <ProjectDescription
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                >
                  {project.description}
                </ProjectDescription>
                <ProjectTags
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <Tag
                      key={tagIndex}
                      whileHover={{ scale: 1.1, backgroundColor: "#00cc00" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {tag}
                    </Tag>
                  ))}
                </ProjectTags>
                <ProjectLinks
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                >
                  {project.title === "Hızlı Gol" && (
                    <ProjectLink
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5, color: "#00ff00" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fas fa-arrow-up-right-from-square"></i> Demo
                    </ProjectLink>
                  )}

                  {project.title === "Safir" && (
                    <ProjectLink
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5, color: "#00ff00" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fas fa-arrow-up-right-from-square"></i> Demo
                    </ProjectLink>
                  )}

                  {project.title === "Hava Durumu" ? (
                    <>
                      <ProjectLink
                        href={project.githubLinks?.pyqt}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5, color: "#00ff00" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className="fab fa-github"></i> GitHub (PyQt5)
                      </ProjectLink>
                      <ProjectLink
                        href={project.githubLinks?.csharp}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5, color: "#00ff00" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className="fab fa-github"></i> GitHub (C#)
                      </ProjectLink>
                    </>
                  ) : (
                    <ProjectLink
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5, color: "#00ff00" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fab fa-github"></i> GitHub
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ContentWrapper>
    </PortfolyoContainer>
  );
};

export default Portfolyo; 