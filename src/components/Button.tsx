import React from "react";

const Button = (props: any) => {
  return (
    <a href={props.link} className={`${props.classes}`}>
      <h4 className={`font-bold ${props.textClasses}`}>{props.text}</h4>
    </a>
  );
};

export default Button;
