import React from 'react';
import styled from 'styled-components';

const PortfolyoContainer = styled.div`
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
      title: "E-Ticaret Platformu",
      description: "Modern bir e-ticaret platformu. React ve Node.js kullanılarak geliştirildi.",
      image: "https://via.placeholder.com/400x200",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Blog Uygulaması",
      description: "Kişisel blog uygulaması. Kullanıcılar yazılarını paylaşabilir ve yorum yapabilir.",
      image: "https://via.placeholder.com/400x200",
      tags: ["React", "Firebase", "Material-UI"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Yönetim Uygulaması",
      description: "Takım projeleri için görev yönetim uygulaması. Gerçek zamanlı güncelleme özelliği.",
      image: "https://via.placeholder.com/400x200",
      tags: ["React", "Socket.io", "Express"],
      demoLink: "#",
      githubLink: "#"
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
                  <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Demo
                  </ProjectLink>
                  <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                  </ProjectLink>
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