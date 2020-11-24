import React from 'react';
import "../Components/Navbar.css"
import { useTranslation } from "react-i18next"
import { useHistory } from "react-router-dom";
import unitedkingdom from "../Assets/unitedkingdom.png";
import argentina from "../Assets/argentina.png";
import { currentLanguaje } from "../index";

const Navbar = ({ refIntro, refProjects, refProjectsToEndSoon }) => {

    const [t, i18n] = useTranslation("global");
    const history = useHistory();

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
                <li><a className="smoothscroll" href="#" onClick={() => {
                    localStorage.clear();
                    document.cookie.split(";").forEach(function (c) {
                        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
                    });
                    history.push("/");
                }}>{t("navbar.close-sesion")} </a></li>
                {localStorage.getItem("adminPermission") === "true" && <li><a className="smoothscroll" href="/newproject"> {t("navbar.create-project")} </a></li>}
                <li><a className="smoothscroll" href="#"> <img src={determinateImg()} onClick={translatePage} style={{ width: "50px", borderRadius: "10px" }} /> </a></li>
            </ul>
        </nav>
    );
}
export default Navbar;