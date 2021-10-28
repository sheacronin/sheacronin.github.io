import '../styles/ProjectCard.css';

const ProjectCard = (props) => {
    const { title, description, image } = props;

    return (
        <article>
            <h3>{title}</h3>
            <img src={image} alt={'Screenshot of ' + title} />
            <div>{description}</div>
        </article>
    );
};

export default ProjectCard;
