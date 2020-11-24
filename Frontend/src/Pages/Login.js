import React, { useState } from 'react';
import ParticlesBg from "particles-bg";
import { useHistory } from "react-router-dom";
import Navbar from "../Components/Navbar";
import LoginComponent from "../Components/LoginComponent";
import BackNext from "../Components/Generics/BackNext";
import Toast from "../Components/Generics/Toast";
import { loginUser } from "../Utils/Api";
import "./Login.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [succesToast, setSuccesToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const logUser = () => {
    loginUser(email, password).then(response => {
      localStorage.setItem("userID", response.data.id);
      localStorage.setItem("adminPermission", response.data.adminPermission);
      localStorage.setItem("nick", response.data.nick);
      localStorage.setItem("accessToken", response.data.token);
      setSuccesToast(true);
      setTimeout(() => { history.push("/") }, 2000);
    }).catch(() => {
      setError("Usuario invalido");
      setErrorToast(true);
    })
  };

  return (
    <div>
      <ParticlesBg color="#83adf181" type="cobweb" bg={true} />

      <Navbar
        refIntro="#intro"
        refProjects="#currentProjects"
        refProjectsToEndSoon="#projectsToEndSoon"
      />

      <div className="containerLog">
        <LoginComponent
          onChangeEmail={e => setEmail(e.target.value)}
          onChangePassword={e => setPassword(e.target.value)}
        />
      </div>
      <BackNext
        width="35%"
        marginLeft="26%"
        onClickNext={logUser}
      />

      <Toast
        open={succesToast}
        handleClose={() => setSuccesToast(false)}
        content={`Se logeo correctamente`}
        succes
      />

      <Toast
        open={errorToast}
        handleClose={() => setErrorToast(false)}
        content={error}
      />

    </div >
  )


};

export default Login;

