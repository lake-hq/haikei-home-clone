import React from "react";

const Button = (props: any) => {
  return (
    <a
      href={props.link}
      className={`transition-colors duration-300 bg-primaryPurple hover:bg-primaryPurpleDarker w-48 mx-8 py-4 text-center hover:cursor-pointer rounded-full ${props.classes}`}
    >
      <h6 className={`text-white font-bold ${props.textClasses}`}>
        {props.text}
      </h6>
    </a>
  );
};

export default Button;
