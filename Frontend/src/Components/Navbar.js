import React from 'react';
import "../Components/Navbar.css"
import { useTranslation } from "react-i18next"
import { Avatar } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const Navbar = ({ refIntro, refProjects, refProjectsToEndSoon }) => {

    const [t, i18n] = useTranslation("global");
    const history = useHistory();

    return (
        <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#intro" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href={refIntro}> {t("navbar.home")} </a></li>
                <li><a className="smoothscroll" href={refProjects}> {t("navbar.projects")} </a></li>
                <li><a className="smoothscroll" href={refProjectsToEndSoon}> {t("navbar.projects-To-End-Soon")} </a></li>
                <li><a href="/profile"> {t("navbar.profile")} </a></li>
                <li><a className="smoothscroll" href="#" onClick={() => i18n.changeLanguage("en")}> Ingles </a></li>
                <li><a className="smoothscroll" href="#" onClick={() => i18n.changeLanguage("es")}> Español </a></li>
                <li><a className="smoothscroll" href="#"> <Avatar onClick={() => history.push("/auth")} /> </a></li>
            </ul>
        </nav>
    );
}
export default Navbar;