import React from "react";

import Button from "./Button";
import die from "../images/die.png";

const HomePage = () => {
  return (
    <div className="w-screen flex col items-center text-center">
      <section className="hero">
        <article className="col items-center sm:w-11/2 lg:w-11/12 mdlg:w-4/6">
          <h1>Generate unique SVG design assets</h1>
          <p className="">
            Haikei is a web app to generate unique SVG shapes, backgrounds, and
            patterns – ready to use with your design tools and workflow.
          </p>
          <Button
            text="Start designing for free"
            classes="w-80 flex-row-reverse"
            content={<img className="w-56" src={die} />}
          />
          <p className="font-normal">Free, no signups, no credit cards.</p>
        </article>
        <div className="col items-center rounded-full">
          <video
            className="rounded-xl w-full"
            src="/src/images/intro-video.mp4"
            autoPlay
            loop
            muted
          />
        </div>
      </section>
      <section className="col items-start">
        <article className="col items-start">
          <h2 className="text-left">
            Discover + create unlimited <br /> visuals for your designs
          </h2>
          <div></div>
        </article>
      </section>
    </div>
  );
};

const Card = (props: any) => {
  return (
    <div>
      <img src={props.src} />
      <div className="text-left col items-start">
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default HomePage;
