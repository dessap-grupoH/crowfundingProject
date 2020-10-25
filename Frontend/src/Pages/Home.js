import React from 'react';
import './Home.css';
import "../global.css"
import Header from './Header';
import Projects from './Projects';
import MyDonations from './MyDonations';
import Footer from './Footer';

const Home = () => (
  <div className="App">
    <Header />
    <Projects />
    <MyDonations />
    <Footer />
  </div>
);



export default Home;
