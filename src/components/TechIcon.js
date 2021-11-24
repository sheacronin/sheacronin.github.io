import javascriptImg from '../img/icons/javascript.png';
import reactImg from '../img/icons/react.png';
import gitImg from '../img/icons/git.png';
import htmlImg from '../img/icons/html.png';
import cssImg from '../img/icons/css.png';
import '../styles/TechIcon.css';

const techIcons = {
    javascriptImg,
    reactImg,
    gitImg,
    htmlImg,
    cssImg,
};

const TechIcon = (props) => {
    const { tech } = props;

    return (
        <img
            className="tech-icon"
            src={techIcons[`${tech.toLowerCase()}Img`]}
            alt={tech}
        />
    );
};

export default TechIcon;
