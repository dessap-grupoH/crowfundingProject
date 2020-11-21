import React, { useState } from 'react';
import "./RegisterComponent.css";
import { InputBase } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

const RegisterComponent = () => {

  const [nick, setNick] = useState();

  return (
    <div className="loginContainer">
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
        id="userId"
        fullWidth
        required
        inputProps={{ "aria-label": "naked" }}
        onChange={e => setNick(e.target.value)}
      />
      <div className="continue">
        Contiunar
      </div>
    </div>
  )
}

export default RegisterComponent;