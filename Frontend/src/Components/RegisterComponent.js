import React, { useState } from 'react';
import "./RegisterComponent.css";
import { InputBase } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

const RegisterComponent = ({ onChangeEmail, onChangeNick,
  onChangePassword, onChangeRepeatPassword, onChangeUsername }) => {

  return (
    <div className="loginContainer">
      <div className="displayInB">
        <div className="floatL">
          <AlternateEmailIcon style={{ fontSize: "50px", marginTop: "5px", marginLeft: "8px" }} />
        </div>
        <div className="floatL">
          <p className="inputHeader"> Elija un email </p>
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
          <p className="inputHeader"> Elija un nombre de usuario</p>
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
          <p className="inputHeader"> Elija un nick </p>
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
          <p className="inputHeader"> Elija una constraseña </p>
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
      <div className="displayInB">
        <div className="floatL">
          <LockOpenIcon style={{ fontSize: "50px", marginTop: "5px", marginLeft: "8px" }} />
        </div>
        <div className="floatL">
          <p className="inputHeader"> Repita su contraseña </p>
        </div>
      </div>
      <InputBase
        className="input"
        id="pwidrepeat"
        fullWidth
        required
        type="password"
        inputProps={{ "aria-label": "naked" }}
        onChange={onChangeRepeatPassword}
      />
    </div>
  )
}

export default RegisterComponent;