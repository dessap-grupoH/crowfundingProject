import React from 'react';
import './Home.css';
import "../global.css"
import Header from './Header';
import Projects from './Projects';
import ProjectsToEndSoon from './ProjectsToEndSoon';
import Footer from './Footer';

const Home = () => (
  <div className="App">
    <div className="appBack">
      <Header />
      <Projects />
      <ProjectsToEndSoon />
      <Footer />
    </div>
  </div>
);


export default Home;
