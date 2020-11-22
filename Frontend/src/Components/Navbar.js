import React from 'react';
import "../Components/Navbar.css"
import { useTranslation } from "react-i18next"
import { Avatar } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
import unitedkingdom from "../Assets/unitedkingdom.png";
import argentina from "../Assets/argentina.png";
import { currentLanguaje } from "../index";

const Navbar = ({ refIntro, refProjects, refProjectsToEndSoon }) => {

    const [t, i18n] = useTranslation("global");
    const { loginWithRedirect } = useAuth0();

    const translatePage = () => {
        currentLanguaje().language === "es"
            ? i18n.changeLanguage("en")
            : i18n.changeLanguage("es")
    };

    const determinateImg = () => {
        return currentLanguaje().language === "es"
            ? unitedkingdom
            : argentina
    };

    return (
        <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#intro" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href={refIntro}> {t("navbar.home")} </a></li>
                <li><a className="smoothscroll" href={refProjects}> {t("navbar.projects")} </a></li>
                <li><a className="smoothscroll" href={refProjectsToEndSoon}> {t("navbar.projects-To-End-Soon")} </a></li>
                <li><a href="/profile"> {t("navbar.profile")} </a></li>
                <li><a className="smoothscroll" href="#"> <img src={determinateImg()} onClick={translatePage} style={{ width: "50px", borderRadius: "10px" }} /> </a></li>
                <li><a className="smoothscroll" href="#"> <Avatar onClick={() => loginWithRedirect()} /> </a></li>
            </ul>
        </nav>
    );
}
export default Navbar;