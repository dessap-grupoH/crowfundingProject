import React from 'react';
import "./Login.css";
import { InputBase } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Login = () => {

  return (
    <div className="loginContainer">
      <div className="displayInB">
        <div className="floatL">
          <PersonIcon style={{ fontSize: "50px", marginTop: "5px", marginLeft: "8px" }} />
        </div>
        <div className="floatL">
          <p className="inputHeader"> Nombre de usuario</p>
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
      <div className="right">
        <NavigateNextIcon
          style={{
            fontSize: "65px",
            marginTop: "5px",
            cursor: "pointer",
          }} />
      </div>
    </div>
  )
}

export default Login;