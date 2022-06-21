import React from "react";

const Button = (props: any) => {
  return (
    <a
      href={props.link}
      className={`btn bg-primaryPurple hover:bg-primaryPurpleDarker ${props.classes}`}
    >
      <h6 className={`text-white font-bold ${props.textClasses}`}>
        {props.text}
      </h6>
      {props.content}
    </a>
  );
};

export default Button;
