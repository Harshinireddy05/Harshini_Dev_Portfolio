import React from 'react';
import './Projects.css'; 
import quizImage from '../Assets/quiz.png'; 
import clockImage from '../Assets/clock.png';
import webImage from '../Assets/web.png';
import portfolioImage from '../Assets/portfolio.png';

function Projects() {
  const projects = [
    {
      title: 'Secure Chat App',
      description:
        'Android app with secure chat functionalities. (Work in Progress)',
      githubUrl: 'https://github.com/your-username/secure-chat-app', 
      imageUrl: webImage, 
    },
    {
      title: 'Quick Quiz App',
      description:
        'A Quick Quiz App made using HTML, CSS, and JavaScript.',
      githubUrl: 'https://github.com/Harshinireddy05/Quick-Quiz-Assignment-1.git',
      imageUrl: quizImage, 
    },
    {
      title: 'Analog Clock',
      description:
        'An Analog Clock made using HTML, CSS, and JavaScript.',
      githubUrl: 'https://github.com/Harshinireddy05/Analog-Clock.git',
      imageUrl: clockImage, 
    },
    {
      title: 'Portfolio Website',
      description:
        'My portfolio website made using React.',
      githubUrl: 'https://github.com/your-username/secure-chat-app', 
      imageUrl: portfolioImage,
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            {project.imageUrl && ( 
            <img
              src={project.imageUrl}
              alt={project.title + ' Project Screenshot'}
              className="project-card-image"
            />
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
