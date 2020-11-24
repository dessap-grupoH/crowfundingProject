import React from 'react';
import { InputBase } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next"
import googleAuth from "../Assets/googleAuth.png";

import "./LoginComponent.css";

const LoginComponent = ({ email, password, onChangeEmail, onChangePassword }) => {

  const { loginWithRedirect } = useAuth0();
  const history = useHistory();
   const [t] = useTranslation("global");

  return (
    <div>
      <img src={googleAuth} className="authGoogleButt" onClick={loginWithRedirect} />
      <div className="loginComponentContainer">
        <div className="displayInB">
          <div className="floatL">
            <PersonIcon style={{ fontSize: "50px", marginTop: "5px", marginLeft: "8px" }} />
          </div>
          <div className="floatL">
            <p className="inputHeader"> {`${t("login-register.email")}`} </p>
          </div>
        </div>
        <InputBase
          className="input"
          id="userId"
          fullWidth
          value={email}
          required
          inputProps={{ "aria-label": "naked" }}
          onChange={onChangeEmail}
        />
        <hr className="authSeparator"></hr>
        <div className="displayInB">
          <div className="floatL">
            <LockIcon style={{ fontSize: "45px", marginTop: "5px", marginLeft: "8px" }} />
          </div>
          <div className="floatL">
            <p className="inputHeader"> {`${t("login-register.password")}`}</p>
          </div>
        </div>
        <InputBase
          className="input"
          id="passid"
          fullWidth
          value={password}
          required
          type="password"
          inputProps={{ "aria-label": "naked" }}
          onChange={onChangePassword}
        />
        <p onClick={() => history.push("/register")} className="goRegister"> {`${t("login-register.registerLink")}`} </p>
      </div>
    </div >
  );
};

export default LoginComponent;