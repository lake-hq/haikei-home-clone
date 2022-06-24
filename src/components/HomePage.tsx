import React from "react";

import Button from "./Button";
import die from "../images/die.png";

import icon1 from "../images/icon-1.svg";
import icon2 from "../images/icon-2.svg";
import icon3 from "../images/icon-3.svg";
import icon4 from "../images/icon-4.svg";

const HomePage = () => {
  return (
    <div className="w-screen flex col items-center text-center">
      <section className="hero">
        <article className="col items-center sm:w-11/2 lg:w-11/12 mdlg:w-4/6">
          <h1>Generate unique SVG design assets</h1>
          <p className="text-textlighter">
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
      <section className="col items-start mt-20">
        <article className="col items-start">
          <h2 className="text-left">
            Discover + create unlimited <br /> visuals for your designs
          </h2>
          <div className="py-20">
            <Card
              imgSrc={icon1}
              heading="Growing number of generators"
              text="Get started with one of our flexible SVG generators that will help you create unique data-driven shapes without hassle. Choose between stacked or layered waves, steps, peaks, blobs, symbols, grids, gradients, and much more."
            />
          </div>
        </article>
      </section>
    </div>
  );
};

const Card = (props: any) => {
  return (
    <div className="w-1/2">
      <img src={props.imgSrc} className="bg-dark4 p-4 rounded-xl mb-8" />
      <div className="text-left col items-start">
        <h4>{props.heading}</h4>
        <p className="text-textdarker font-normal">{props.text}</p>
      </div>
    </div>
  );
};

export default HomePage;
