import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { InputBase, Select, MenuItem, LinearProgress } from '@material-ui/core';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import TodayIcon from '@material-ui/icons/Today';
import EventIcon from '@material-ui/icons/Event';
import { fetchTownsWithoutProject } from "../Utils/Api";

import "./NewProjectComponent.css";

const RegisterComponent = ({ onChangeTown, town, onChangeName, name,
  onChangeStartDate, startDate, onChangeEndDate, endDate,
  onChangePercentaje, percentaje, onChangePricePerHabitant, price }) => {

  const [t] = useTranslation("global");
  const [isLoading, setLoading] = useState(true);
  const [towns, setTowns] = useState("Seleccione una ciudad");

  const setApiTowns = () => {
    fetchTownsWithoutProject().then(response => {
      setTowns(response.data);
      setLoading(false);
    })
  };

  useEffect(() => { setApiTowns() }, []);

  const townsMenu = () => towns.map(town => <MenuItem value={town.name}>{town.name}</MenuItem>);


  return isLoading ? (
    <LinearProgress variant="indeterminate" />
  ) : (
      <div className="newPContainer">
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
          value={name}
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
          type="date"
          value={startDate}
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
          type="date"
          value={endDate}
          inputProps={{ "aria-label": "naked" }}
          onChange={onChangeName}
        />
        <Select
          style={{ width: "100%", marginTop: "20px" }}
          placeholder="Ciudad"
          labelId="townslabelid"
          id="townsid"
          value={town}
          onChange={onChangeTown}
        >
          {townsMenu()}
        </Select>
        <div className="displayInB">
          <div className="floatL">
            <p className="inputHeader"> Precio por habitante </p>
          </div>
        </div>
        <InputBase
          className="input"
          id="endateid"
          fullWidth
          required
          value={percentaje}
          inputProps={{ "aria-label": "naked" }}
          onChange={onChangePercentaje}
        />
        <div className="displayInB">
          <div className="floatL">
            <p className="inputHeader"> Porcentaje de completado </p>
          </div>
        </div>
        <InputBase
          className="input"
          id="endateid"
          fullWidth
          required
          value={price}
          inputProps={{ "aria-label": "naked" }}
          onChange={onChangePricePerHabitant}
        />
      </div>
    )
}

export default RegisterComponent;