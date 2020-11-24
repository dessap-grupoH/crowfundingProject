import React from 'react';
import { useTranslation } from "react-i18next";
import { InputBase } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StreetviewIcon from '@material-ui/icons/Streetview';
import PeopleIcon from '@material-ui/icons/People';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import TodayIcon from '@material-ui/icons/Today';
import EventIcon from '@material-ui/icons/Event';

import "./NewProjectComponent.css";

const RegisterComponent = ({ onChangeLocation, onChangeProvince,
  onChangePopulation, onChangeName, onChangeStartDate, onChangeEndDate }) => {

  const [t] = useTranslation("global");

  return (
    <div className="newPContainer">
      <div className="displayInB">
        <div className="floatL">
          <LocationOnIcon style={{ fontSize: "50px", marginTop: "5px", marginLeft: "8px" }} />
        </div>
        <div className="floatL">
          <p className="inputHeader"> {t("new-project.location")}</p>
        </div>
      </div>
      <InputBase
        className="input"
        id="locationid"
        fullWidth
        required
        inputProps={{ "aria-label": "naked" }}
        onChange={onChangeLocation}
      />
      <div className="displayInB">
        <div className="floatL">
          <StreetviewIcon style={{ fontSize: "50px", marginTop: "5px", marginLeft: "8px" }} />
        </div>
        <div className="floatL">
          <p className="inputHeader"> {t("new-project.province")}</p>
        </div>
      </div>
      <InputBase
        className="input"
        id="provinceid"
        fullWidth
        required
        inputProps={{ "aria-label": "naked" }}
        onChange={onChangeProvince}
      />
      <div className="displayInB">
        <div className="floatL">
          <PeopleIcon style={{ fontSize: "50px", marginTop: "5px", marginLeft: "8px" }} />
        </div>
        <div className="floatL">
          <p className="inputHeader">{t("new-project.population")}</p>
        </div>
      </div>
      <InputBase
        className="input"
        id="populationid"
        fullWidth
        required
        inputProps={{ "aria-label": "naked" }}
        onChange={onChangePopulation}
      />
      <div className="displayInB">
        <div className="floatL">
          <FolderSpecialIcon style={{ fontSize: "50px", marginTop: "5px", marginLeft: "8px" }} />
        </div>
        <div className="floatL">
          <p className="inputHeader"> {t("new-project.project-name")} </p>
        </div>
      </div>
      <InputBase
        className="input"
        id="nameid"
        fullWidth
        required
        inputProps={{ "aria-label": "naked" }}
        onChange={onChangeStartDate}
      />
      <div className="displayInB">
        <div className="floatL">
          <TodayIcon style={{ fontSize: "50px", marginTop: "5px", marginLeft: "8px" }} />
        </div>
        <div className="floatL">
          <p className="inputHeader"> {t("new-project.start-date")} </p>
        </div>
      </div>
      <InputBase
        className="input"
        id="startdateid"
        fullWidth
        required
        inputProps={{ "aria-label": "naked" }}
        onChange={onChangeEndDate}
      />
      <div className="displayInB">
        <div className="floatL">
          <EventIcon style={{ fontSize: "50px", marginTop: "5px", marginLeft: "8px" }} />
        </div>
        <div className="floatL">
          <p className="inputHeader"> {t("new-project.end-date")} </p>
        </div>
      </div>
      <InputBase
        className="input"
        id="endateid"
        fullWidth
        required
        inputProps={{ "aria-label": "naked" }}
        onChange={onChangeName}
      />

    </div>
  )
}

export default RegisterComponent;