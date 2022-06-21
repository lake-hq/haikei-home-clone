import React from "react";

import Button from "./Button";

const ButtonDark = (props: any) => {
  return (
    <a
      href={props.link}
      className={`btn bg-dark2 hover:bg-dark3 ${props.classes}`}
    >
      <h6 className={`text-white font-bold ${props.textClasses}`}>
        {props.text}
      </h6>
      {props.content}
    </a>
  );
};

export default ButtonDark;
