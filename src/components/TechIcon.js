import '../styles/TechIcon.css';

const techIcons = {
    javascript:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    firebase:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    jest: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    webpack:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
};

const TechIcon = (props) => {
    const { tech } = props;

    return (
        <img
            className="tech-icon"
            src={techIcons[tech.toLowerCase()]}
            alt={tech}
        />
    );
};

export default TechIcon;
