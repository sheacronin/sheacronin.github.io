import javascriptImg from '../img/icons/javascript.png';
import reactImg from '../img/icons/react.png';
import gitImg from '../img/icons/git.png';
import htmlImg from '../img/icons/html.png';
import cssImg from '../img/icons/css.png';
import '../styles/Skills.css';

const skillIcons = {
    javascriptImg,
    reactImg,
    gitImg,
    htmlImg,
    cssImg,
};

const Skills = () => {
    const skills = ['Javascript', 'React', 'Git', 'HTML', 'CSS'];

    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill) => (
                    <SkillItem key={skill} skill={skill} />
                ))}
            </ul>
        </section>
    );
};

const SkillItem = (props) => {
    const { skill } = props;

    return (
        <li className="skill-item">
            <img
                className="skill-icon"
                src={skillIcons[`${skill.toLowerCase()}Img`]}
                alt={skill}
            />
            {skill}
        </li>
    );
};

export default Skills;
