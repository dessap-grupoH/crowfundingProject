import React from 'react';

const Button = ({ text, onClickButton, cssClass, icon }) => (
  <div className={cssClass} onClick={onClickButton}>
    {icon}{text}
  </div>
);

export default Button;