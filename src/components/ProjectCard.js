import '../styles/ProjectCard.css';
import TechIcon from './TechIcon';

const ProjectCard = (props) => {
    const { title, description, images, tech, learningGoals, links } =
        props.project;

    console.log(images);

    return (
        <article className="project-card">
            <img
                className="screenshot"
                src={images.mobile}
                alt={'Screenshot of ' + title}
            />
            <div className="project-info">
                <h3>{title}</h3>
                <div>
                    <a href={links.github}>GitHub</a>
                    <a href={links.live}>Live Site</a>
                </div>
                <div>{description}</div>
                <ul className="learning-goals">
                    {learningGoals.map((goal) => (
                        <li key={goal}>{goal}</li>
                    ))}
                </ul>
                <ul>
                    {tech.map((tech) => (
                        <TechIcon key={tech} tech={tech} />
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default ProjectCard;
