import React from 'react';
import "../Components/Navbar.css"
import { useTranslation } from "react-i18next"

const Navbar = ({ refIntro, refProjects, refMyDonations }) => {

    const [t, i18n] = useTranslation("global");

    return (
        <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href={refIntro}> {t("navbar.home")} </a></li>
                <li><a className="smoothscroll" href={refProjects}> {t("navbar.projects")} </a></li>
                <li><a className="smoothscroll" href={refMyDonations}> {t("navbar.projects-To-End-Soon")} </a></li>
                <li><a className="smoothscroll" href="#" onClick={() => i18n.changeLanguage("en")}> Ingles </a></li>
                <li><a className="smoothscroll" href="#" onClick={() => i18n.changeLanguage("es")}> Español </a></li>
            </ul>
        </nav>
    );
}
export default Navbar;