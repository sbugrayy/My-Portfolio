import React from 'react';
import styled from 'styled-components';

/*
const PortfolyoContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 2rem;
  background-color: #1a1a1a;
  overflow-y: auto;
  height: 100vh;
`;
*/

const PortfolyoContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 8rem;
  background-color: #1a1a1a;
  overflow-y: auto;
  height: 100vh;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #2a2a2a;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #cccccc;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: #00ff00;
  color: #000000;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ProjectLink = styled.a`
  color: #00ff00;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Portfolyo = () => {
  const projects = [
    {
      title: "Hızlı Gol",
      description: "İki Kişilik Web Tabanlı Futbol Oyunu. HTML, CSS ve JavaScript kullanılarak geliştirildi.",
      image: "https://raw.githubusercontent.com/sbugrayy/portfolyo/main/public/images/futbolFoto.png",
      tags: ["HTML", "CSS", "JavaScript"],
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