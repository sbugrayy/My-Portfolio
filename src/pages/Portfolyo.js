import React from 'react';
import styled from 'styled-components';

const PortfolyoContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 6rem;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
              url('https://png.pngtree.com/background/20230527/original/pngtree-d-laptop-pc-with-network-connected-teflon-surface-on-black-background-picture-image_2757429.jpg');
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProjectCard = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    border-color: #00ff00;
  }
  
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const ProjectImage = styled.img`
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

const ProjectContent = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  color: #cccccc;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const Tag = styled.span`
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

const ProjectLinks = styled.div`
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

const ProjectLink = styled.a`
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
      title: "Hızlı Gol",
      description: "İki Kişilik Web Tabanlı Futbol Oyunu. HTML, CSS ve JavaScript kullanılarak geliştirildi.",
      image: "https://raw.githubusercontent.com/sbugrayy/portfolyo/main/public/images/futbolFoto.png",
      tags: ["HTML", "CSS", "JavaScript", "FL Studio"],
      demoLink: "https://sbugrayy.github.io/internet-futbol-game/",
      githubLink: "https://github.com/sbugrayy/internet-futbol-game"
    },
    {
      title: "Yer İstasyonu",
      description: "Roket Telemetri Verileri İçin Yer İstasyonu. PyQt5 ve QtDesigner ile geliştirildi. Gizlilikten dolayı şuan paylaşılmıyor.",
      image: "https://raw.githubusercontent.com/sbugrayy/portfolyo/main/public/images/yerIstasyonu.png",
      tags: ["PyQt5", "QtDesigner", "OpenGL"],
      githubLink: "#"
    },
    {
      title: "Safir",
      description: "EgeKaf GameJam 2025'te geliştirilen ve 2.'likle sonuçlanan 2D platform pixel art oyunu. Unity ile geliştirildi.",
      image: "https://raw.githubusercontent.com/sbugrayy/portfolyo/main/public/images/safir.png",
      tags: ["Unity", "C#", "FL Studio"],
      demoLink: "https://lmergenl.itch.io/safir",
      githubLink: "https://github.com/llmergenll/AnlyanPolis"
    },
    { 
      title: "Terlikçi",
      description: "Balıkesir Teknokent'in düzenlediği GameJam 2025'te geliştirilen 2D pixel art oyunu. Unity ile geliştirildi.",
      image: "https://raw.githubusercontent.com/sbugrayy/portfolyo/main/public/images/terlikci.png",
      tags: ["Unity", "C#", "FL Studio"],
      githubLink: "https://github.com/sbugrayy/Gamejam-Proje"
    },
    { 
      title: "Notepad",
      description: "Notepad++ uygulamasına benzer masaüstü uygulaması. PyQt5 ve QtDesigner ile geliştirildi.",
      image: "https://raw.githubusercontent.com/sbugrayy/portfolyo/main/public/images/notepad.png",
      tags: ["PyQt5", "QtDesigner"],
      githubLink: "https://github.com/sbugrayy/Notepad"
    },
    { 
      title: "Hava Durumu",
      description: "OpenWeatherMap sitesindeki verileri çekerek yapılan masaüstü uygulaması. Hem C# Windows Forms ile hem de PyQt5 ile geliştirildi.",
      image: "https://raw.githubusercontent.com/sbugrayy/portfolyo/main/public/images/havaDurumu.jpg",
      tags: ["PyQt5", "C#"],
      githubLinks: {
        pyqt: "https://github.com/sbugrayy/HavaDurumuPy",
        csharp: "https://github.com/sbugrayy/Hava-Durumuu"
      }
    }
  ];

  return (
    <PortfolyoContainer>
      <ContentWrapper>
        <Title>Portfolyo</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  {project.title === "Hızlı Gol" && (
                    <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-arrow-up-right-from-square"></i> Demo
                    </ProjectLink>
                  )}

                  {project.title === "Safir" && (
                      <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-arrow-up-right-from-square"></i> Demo
                      </ProjectLink>
                  )}

                  {project.title === "Hava Durumu" ? (
                    <>
                      <ProjectLink href={project.githubLinks?.pyqt} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i> GitHub (PyQt5)
                      </ProjectLink>
                      <ProjectLink href={project.githubLinks?.csharp} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i> GitHub (C#)
                      </ProjectLink>
                    </>
                  ) : (
                    <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
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