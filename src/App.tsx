import React from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/navBar";
import MyResume from "./components/myResume";
import Projects from "./components/myProjects";
import HeroLanding from "./components/heroLanding";
import Skills from "./components/skills";
import Contact from './contact'; 
import Name from "./components/name";
import './floatingBackground.css';

function HomePage() {
  return (
    <div className="big-padding big-margin text light">
      <div className="floating-bg">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>
      <section>
        <div className="m-5">
          <Name 
            names="Honorine Ishimwe Twahirwa"
            intro="I am a tech enthusiast"
          />
        </div>
      </section>

      <section id="hero">
        <HeroLanding 
          imageUrl="/Headshot.jpg"
          altText="Hero image of Honorine Ishimwe"
          description="Ambitious and results-driven Computer Science student with hands-on experience in software development, academic projects, and web technologies. Skilled in both technical and client-facing roles through prior experience in customer support, administration, and healthcare. Strong communication, adaptability, and attention to detail, with a passion for learning and using technologies to solve real-world problems."
        />
      </section>

      <section id="projects">
        <Projects 
          imageUrl='/spotify_logo.png'
          name='SpotMood'
          description='A Spotify mood-based music recommendation app that uses the Spotify API...'
        />
        <Projects
          imageUrl="/pet_pic.jpeg"
          name="Pet Adoption App"
          description="Designed and implemented a responsive, full-stack web platform for pet adoption..."
        />
      </section>

      <section id="skills">
        <Skills
          skillsClasses={[
            "devicon-react-original",
            "devicon-javascript-plain",
            "devicon-python-plain",
            "devicon-html5-plain",
            "devicon-css3-plain",
            "devicon-bootstrap-plain",
            "devicon-nodejs-plain",
            "devicon-express-original",
            "devicon-mongodb-plain",
            "devicon-git-plain",
            "devicon-github-original",
            "devicon-java-plain-wordmark",
            "devicon-csharp-plain",
            "devicon-tailwindcss-original colored",
            "devicon-linux-plain",
            "devicon-unix-original",
            "devicon-typescript-plain",
            "devicon-numpy-plain"
          ]}
        />
      </section>

      <section id="resume">
        <MyResume
          resumeUrl="/Users/icespice/Desktop/Honorine/Personal documents/Honorine_Ishimwe_Resume.pdf"
        />
      </section>
    </div>
  );
}

function App() {
  return (
    <>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div>About Page Coming Soon</div>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;