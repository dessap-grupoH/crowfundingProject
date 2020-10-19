import React from 'react';
import "../Components/Navbar.css"

const Navbar = ({refIntro, refProjects, refDonate, refMyDonations}) => (
    <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
        <li className="current"><a className="smoothscroll" href={refIntro}> Inicio </a></li>
        <li><a className="smoothscroll" href={refProjects}> Proyectos </a></li>
        <li><a className="smoothscroll" href={refDonate}> Donar </a></li>
        <li><a className="smoothscroll" href={refMyDonations}> Mis donaciones </a></li>
        </ul>
    </nav>
);

export default Navbar;