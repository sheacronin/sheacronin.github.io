import '../styles/ProjectCard.css';

const ProjectCard = (props) => {
    const { title, description, image } = props.project;

    return (
        <article className="project-card">
            <img src={image} alt={'Screenshot of ' + title} />
            <h3>{title}</h3>
            <div>{description}</div>
        </article>
    );
};

export default ProjectCard;
