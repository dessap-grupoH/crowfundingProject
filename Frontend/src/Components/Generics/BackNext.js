import React from "react";
import Button from "./Button";
import back from "../../Assets/back.png";
import next from "../../Assets/next.png";

const BackNext = ({ onClickBack, onClickNext }) => (
  <div style={{
    display: "inline-block",
    textAlign: "center",
    minWidth: "95%",
    marginTop: "3%"
  }}>
    <Button
      icon={
        <img
          src={back}
          style={{
            width: "60px",
            marginLeft: "10%",
            float: "left",
            cursor: "pointer"
          }} />}
      onClickButton={onClickBack}
    />
    <Button
      icon={<img
        src={next}
        style={{
          width: "60px",
          marginLeft: "10%",
          marginRight: "5%",
          float: "right",
          cursor: "pointer"
        }} />}
      onClickButton={onClickNext}
    />
  </div>
);

export default BackNext;