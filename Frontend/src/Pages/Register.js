import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import ParticlesBg from "particles-bg";
import Navbar from "../Components/Navbar";
import RegisterComponent from "../Components/RegisterComponent";
import BackNext from "../Components/Generics/BackNext";
import { registerUser } from "../Utils/Api";


import "./Register.css";

const Register = () => {

  const history = useHistory();
  const [nick, setNick] = useState(null);
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState(null);

  const handleSumbit = () => {
    registerUser(email, nick, userName, password).then(response => {
      history.push("/login")
    });
  };

  return (
    <div>
      <ParticlesBg color="#83adf181" type="cobweb" bg={true} />

      <Navbar
        refIntro="#intro"
        refProjects="#currentProjects"
        refProjectsToEndSoon="#projectsToEndSoon"
      />
      <div className="authsContainer">
        <div className="auths">
          <RegisterComponent
            onChangeEmail={e => setEmail(e.target.value)}
            onChangeNick={e => setNick(e.target.value)}
            onChangePassword={e => setPassword(e.target.value)}
            onChangeRepeatPassword={e => setRepeatPassword(e.target.value)}
            onChangeUsername={e => setUserName(e.target.value)}
          />
        </div>
      </div>
      <BackNext
        onClickNext={handleSumbit}
        onClickBack={() => history.goBack()}
        width="35%"
        marginLeft="26%"
      />


    </div>
  )
};

export default Register;

