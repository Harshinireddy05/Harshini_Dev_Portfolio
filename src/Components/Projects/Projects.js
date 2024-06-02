import React from 'react';
import './Projects.css'; // Assuming the file is in the same directory

function Projects() {
  const projects = [
    {
      title: 'Quick Quiz App',
      description:
        'A Quick Quiz App made using HTML, CSS, and JavaScript.',
      githubUrl: 'https://github.com/Harshinireddy05/Quick-Quiz-Assignment-1.git',
      imageUrl: './quiz.png', 
    },
    {
      title: 'Analog Clock',
      description:
        'An Analog Clock made using HTML, CSS, and JavaScript.',
      githubUrl: 'https://github.com/Harshinireddy05/Analog-Clock.git',
      imageUrl: './quiz.png',
    },
    {
      title: 'Secure Chat App',
      description:
        'Android app with secure chat functionalities. (Work in Progress)',
      githubUrl: 'https://github.com/your-username/secure-chat-app', 
      imageUrl:'C:/Users/harsh/OneDrive/Desktop/Trimester 4/Development/my_portfolio/src/Components/Projects/quiz.png'
    },
    {
      title: 'Secure Chat App',
      description:
        'Android app with secure chat functionalities. (Work in Progress)',
      githubUrl: 'https://github.com/your-username/secure-chat-app', 
      imageUrl: './quiz.png',
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            {project.imageUrl && ( // Check if imageUrl exists before rendering
            <img
              src={project.imageUrl}
              alt={project.title + ' Project Screenshot'} // Descriptive alt text
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