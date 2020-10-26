import React from 'react';
import './Home.css';
import "../global.css"
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';

const Home = () => (
  <div className="App">
    <Header />
    <Projects />
    <Footer />
  </div>
);


export default Home;
