import React from 'react';
import { InputBase } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import googleAuth from "../Assets/googleAuth.png";
import { useAuth0 } from "@auth0/auth0-react";

import "./LoginComponent.css";

const LoginComponent = () => {

  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <img src={googleAuth} className="authGoogleButt" onClick={loginWithRedirect} />
      <div className="loginComponentContainer">
        <div className="displayInB">
          <div className="floatL">
            <PersonIcon style={{ fontSize: "50px", marginTop: "5px", marginLeft: "8px" }} />
          </div>
          <div className="floatL">
            <p className="inputHeader"> Email </p>
          </div>
        </div>
        <InputBase
          className="input"
          id="userId"
          fullWidth
          required
          inputProps={{ "aria-label": "naked" }}
        />
        <hr className="authSeparator"></hr>
        <div className="displayInB">
          <div className="floatL">
            <LockIcon style={{ fontSize: "45px", marginTop: "5px", marginLeft: "8px" }} />
          </div>
          <div className="floatL">
            <p className="inputHeader"> Contraseña</p>
          </div>
        </div>
        <InputBase
          className="input"
          id="userId"
          fullWidth
          required
          inputProps={{ "aria-label": "naked" }}
        />
      </div>
    </div>
  );
};

export default LoginComponent;