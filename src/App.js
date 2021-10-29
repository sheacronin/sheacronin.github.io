import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Welcome from './components/Welcome';

function App() {
    return (
        <div>
            <Header />
            <main>
                <Welcome />
                <Projects />
                <Skills />
                <About />
                <Contact />
            </main>
        </div>
    );
}

export default App;
