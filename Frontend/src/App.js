import React from 'react';
import './App.css';
import "./global.css"
import Header from './Pages/Header';
import Projects from './Pages/Projects';
import Donate from './Pages/Donate';
import MyDonations from './Pages/MyDonations';
import Footer from './Pages/Footer';

const App = () => (
  <div className="App">
    <Header />
    <Projects />
    <Donate />
    <MyDonations />
    <Footer />
  </div>
);



export default App;
