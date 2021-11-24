import PROJECTS from '../data/projects';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            {PROJECTS.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}
        </section>
    );
};

export default Projects;
