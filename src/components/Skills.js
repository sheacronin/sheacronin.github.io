import '../styles/Skills.css';
import TechIcon from './TechIcon';

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
            <TechIcon tech={skill} />
            {skill}
        </li>
    );
};

export default Skills;
