import React from 'react';
import './index.css';

// Structure de données pour les projets
const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
    logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
    link: "https://github.com"
  },
  {
    id: 2,
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
    logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/php/php.png",
    link: "https://github.com"
  },
  // Ajoutez plus de projets ici en suivant le même format
];

function Project() {
  return (
    <div className='homepage-projects'>
      <div className="all-projects-container">
        {projectsData.map((project) => (
          <div className="all-projects-project" key={project.id}>
            <div className="project">
              <a href={project.link}>
                <div className="project-container">
                  <div className="project-logo">
                    <img src={project.logo} alt="logo"/>
                  </div>
                  <div className="project-title">
                    {project.title}
                  </div>
                  <div className="project-description">
                    {project.description}
                  </div>
                  <div className="project-link">
                    <div className="project-link-icon">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="link" className="svg-inline--fa fa-link " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="currentColor" d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"></path>
                      </svg>
                    </div>
                    <div className="project-link-text">
                      View Project
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
