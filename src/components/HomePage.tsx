import React from "react";

import Button from "./Button";

const HomePage = () => {
  return (
    <div className="w-screen flex col text-center">
      <section className="hero">
        <article className="col items-center pt-40">
          <h1>Generate unique SVG design assets</h1>
          <p className="">
            Haikei is a web app to generate unique SVG shapes, backgrounds, and
            patterns – ready to use with your design tools and workflow.
          </p>
          <Button text="Start designing for free" classes="w-60" />
          <p className="font-normal">Free, no signups, no credit cards.</p>
          <div className="w-screen col items-center rounded-full">
            <video
              className="w-5/6 lg:w-4/6 rounded-xl"
              src="/src/intro-video.mp4"
              autoPlay
              loop
              muted
            />
          </div>
        </article>
      </section>
    </div>
  );
};

export default HomePage;
