import styles from './App.module.css';

import {Hero} from "./components/Hero/Hero";
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { Navbar } from './components/Navbar/Navbar';
import Education from './components/Education/Education';
function App() {
 return (   
       <div className={styles.App}>
         <Navbar />
         <Hero />
         <About />
         <Experience/>
         <Projects/>
         <Education/>
         <Contact/>
       </div>
  );
}

export default App;
