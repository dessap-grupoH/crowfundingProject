import React from 'react';
import "../Components/DetailHeader.css";

const DetailHeader = ({ projectName }) => {
  return (
    <div>
      <div className="headerContainer">
        <h2 className="projectDetails-title">{projectName}</h2>
      </div>
    </div>
  );
};

export default DetailHeader;