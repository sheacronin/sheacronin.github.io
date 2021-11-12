import '../styles/About.css';
import selfImg from '../img/self.jpg';

const About = () => {
    return (
        <section id="about">
            <h2>About</h2>
            <div id="about-info-container">
                <img
                    src={selfImg}
                    alt="Shea with a background of fall leaves"
                />
                <div>
                    <p>
                        Shea is a self-taught, Philadelphia-based programmer
                        with a strong drive to learn every day and to put that
                        knowledge to use.
                    </p>
                    <p>
                        He has a background in film and video post-production,
                        collaborating with both technical and creative teams to
                        deliver polished projects.
                    </p>
                    <p>
                        He is a summa cum laude Honors graduate of Temple
                        University who works hard to give his best to everything
                        he does.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
