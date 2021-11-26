import '../styles/ProjectCard.css';
import TechIcon from './TechIcon';

const ProjectCard = (props) => {
    const { title, description, images, tech, learningGoals, links } =
        props.project;

    return (
        <article className="project-card">
            <picture className="screenshot">
                <source srcSet={images.desktop} media="(min-width: 500px)" />
                <img src={images.mobile} alt={'Screenshot of ' + title} />
            </picture>
            <div className="project-info">
                <h3>{title.toLowerCase()}</h3>
                <div className="project-links">
                    <a href={links.live}>live site</a>
                    <a href={links.github}>github</a>
                </div>
                <div className="project-desc">{description}</div>
                <div className="learning-goals-and-tech">
                    <h4>learning goals & tech</h4>
                    <ul className="learning-goals">
                        {learningGoals.map((goal) => (
                            <li key={goal}>{goal}</li>
                        ))}
                    </ul>
                    <ul className="project-tech">
                        {tech.map((tech) => (
                            <li key={tech}>
                                <TechIcon tech={tech} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
