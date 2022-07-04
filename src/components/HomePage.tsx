import React from "react";

import Button from "./Button";
import Tabs from "./Tabs";

import die from "../images/die.png";
import icon1 from "../images/icon-1.svg";
import icon2 from "../images/icon-2.svg";
import icon3 from "../images/icon-3.svg";
import icon4 from "../images/icon-4.svg";

const HomePage = () => {
  return (
    <div className="w-screen flex col items-center text-center">
      <section className="hero">
        <article className="col items-center smallsec">
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
          <p className="font-normal text-textdarker">
            Free, no signups, no credit cards.
          </p>
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
        <article className="col items-start mb-0 pb-0">
          <h2 className="text-left">
            Discover + create unlimited <br /> visuals for your designs
          </h2>
          <div className="py-20 col">
            <div className="resprow items-center">
              <Card
                imgSrc={icon1}
                heading="Growing number of generators"
                text="Get started with one of our flexible SVG generators that will help you create unique data-driven shapes without hassle. Choose between stacked or layered waves, steps, peaks, blobs, symbols, grids, gradients, and much more."
              />
              <Card
                imgSrc={icon2}
                heading="Easy to integrate into your workflow"
                text="Whether you are creating a poster or a website, integrating Haikei into your workflow is easy! Export your background as PNG, SVG and continue working on it in any vector editing tool, CMS or code base."
              />
            </div>
            <div className="resprow">
              <Card
                imgSrc={icon3}
                heading="Customizable visuals"
                text="Our generators will help you create unique visuals that look good every time. Play with the settings to find the right parameters and use the dice button to generate a new visual every time."
              />
              <Card
                imgSrc={icon4}
                heading="Designs ready for production"
                text="Choose from a number of common canvas sizes to help you generate cool backgrounds, ready to share. You can also tweak the size and compare different generators across formats. Haikei will adapt to your needs."
              />
            </div>
          </div>
        </article>
      </section>
      <section className="mb-12">
        <article className="smallsec pb-4">
          <h2>Use cases</h2>
          <p>
            Haikei is primarily a creative tool that you can use in many
            different ways. Here are some examples of where Haikei can change
            the way you work.
          </p>
        </article>
        <Tabs />
      </section>
      <section>
        <article className="smallsec">
          <h2>Get Inspired!</h2>
          <p className="text-textlight">
            Use Haikei to create social media banners and posts, web pages,
            visual assets for your apps, product showcases and more! We can't
            wait to see what you create with Haikei.
          </p>
        </article>
        <div className="resprow items-start children-1by3 mb-16">
          <div className="col children-p-sm">
            <img
              src="https://haikei.app/_next/static/images/pastel-style-3-c59ea6cc12770c59040792519ae2b9c4.png"
              alt=""
            />
            <img
              src="https://haikei.app/_next/static/images/album-cover-aac34cc7c20b657da64b14b6f0623b46.png"
              alt=""
            />
            <img
              src="https://haikei.app/_next/static/images/pastel-style-4-77e2b42d38e882ffc45f5c1ba94f3238.png"
              alt=""
            />
          </div>
          <div className="col children-p-sm">
            <img
              src="https://haikei.app/_next/static/images/spotify-style-96565994b67a8eae7400dd10bc182b77.png"
              alt=""
            />
            <img
              src="https://haikei.app/_next/static/images/photo-event-d44056114e68cc07eb2baee96c173dd9.png"
              alt=""
            />
            <img
              src="https://haikei.app/_next/static/images/website-mockup-160747a2364a06fb3373835d192ce623.png"
              alt=""
            />
          </div>
          <div className="col children-p-sm">
            <img
              src="https://haikei.app/_next/static/images/neon-style-3-8aa2f24a5460c6e9d8322942eef02431.png"
              alt=""
            />
            <img
              src="https://haikei.app/_next/static/images/album-cover-2-b04e5a8192533c08d32a6ec2829c4e60.png"
              alt=""
            />
            <img
              src="https://haikei.app/_next/static/images/macarons-2-bef14d5ae795293a1d4b8d633bdf928e.png"
              alt=""
            />
          </div>
        </div>
        <Button text="Start designing for free" />
      </section>
      <section>
        <article className="smallsec">
          <h2>Newsletter</h2>
          <p>
            Sign up to stay in the loop with the latest features and generators!
          </p>
        </article>
      </section>
    </div>
  );
};

const Card = (props: any) => {
  return (
    <div className="md:w-1/2 py-4 px-4">
      <img src={props.imgSrc} className="bg-dark4 p-4 rounded-2xl mb-8" />
      <div className="text-left col items-start md:pr-20">
        <h4>{props.heading}</h4>
        <p className="text-textdarker font-normal">{props.text}</p>
      </div>
    </div>
  );
};

export default HomePage;
