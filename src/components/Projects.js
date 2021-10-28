import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
    return (
        <section id="projects">
            {projects.map((project) => (
                <ProjectCard project={project} />
            ))}
        </section>
    );
};

export default Projects;
