import React from 'react';
import './ProjectCard.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({
                         image = '',
                         title = 'Progetto Esempio',
                         description = 'Descrizione non disponibile.',
                         technologies = [],
                         liveUrl = null,
                         repoUrl = null
                     }) => {
    return (
        <div className="project-card">
            <div className="project-card-image">
                <img src={image} alt={`Screenshot ${title}`} loading="lazy" />
            </div>

            <div className="project-card-content">
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-description">{description}</p>

                {technologies && technologies.length > 0 && (
                    <div className="project-card-tags">
                        {technologies.map((tech) => (
                            <span key={tech} className="tag">{tech}</span>
                        ))}
                    </div>
                )}

                {(liveUrl || repoUrl) && (
                    <div className="project-card-links">
                        {liveUrl && (
                            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-button">
                                <FaExternalLinkAlt aria-hidden="true" /> Live Demo
                            </a>
                        )}
                        {repoUrl && (
                            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-link-button github-button">
                                <FaGithub aria-hidden="true" /> Codice Sorgente
                            </a>
                        )}
                    </div>
                )}


            </div>



        </div>
    );
};

export default ProjectCard;