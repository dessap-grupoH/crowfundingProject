import React from 'react';
import { useTranslation } from "react-i18next";
import { InputBase } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import "./RegisterComponent.css";

const RegisterComponent = ({ onChangeEmail, onChangeNick,
  onChangePassword, onChangeUsername }) => {

  const [t] = useTranslation("global");

  return (
    <div className="loginContainer">
      <div className="displayInB">
        <div className="floatL">
          <AlternateEmailIcon style={{ fontSize: "50px", marginTop: "5px", marginLeft: "8px" }} />
        </div>
        <div className="floatL">
          <p className="inputHeader"> {`${t("login-register.email")}`}</p>
        </div>
      </div>
      <InputBase
        className="input"
        id="userId"
        fullWidth
        required
        inputProps={{ "aria-label": "naked" }}
        onChange={onChangeEmail}
      />
      <div className="displayInB">
        <div className="floatL">
          <PermContactCalendarIcon style={{ fontSize: "50px", marginTop: "5px", marginLeft: "8px" }} />
        </div>
        <div className="floatL">
          <p className="inputHeader"> {`${t("login-register.username")}`}</p>
        </div>
      </div>
      <InputBase
        className="input"
        id="usernameid"
        fullWidth
        required
        inputProps={{ "aria-label": "naked" }}
        onChange={onChangeUsername}
      />
      <div className="displayInB">
        <div className="floatL">
          <PersonIcon style={{ fontSize: "50px", marginTop: "5px", marginLeft: "8px" }} />
        </div>
        <div className="floatL">
          <p className="inputHeader">{`${t("login-register.nickname")}`}</p>
        </div>
      </div>
      <InputBase
        className="input"
        id="nickid"
        fullWidth
        required
        inputProps={{ "aria-label": "naked" }}
        onChange={onChangeNick}
      />
      <div className="displayInB">
        <div className="floatL">
          <LockOpenIcon style={{ fontSize: "50px", marginTop: "5px", marginLeft: "8px" }} />
        </div>
        <div className="floatL">
          <p className="inputHeader"> {`${t("login-register.password")}`} </p>
        </div>
      </div>
      <InputBase
        className="input"
        id="pwid"
        fullWidth
        required
        type="password"
        inputProps={{ "aria-label": "naked" }}
        onChange={onChangePassword}
      />
    </div>
  )
}

export default RegisterComponent;