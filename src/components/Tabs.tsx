import React from "react";

const Tabs = (props: any) => {
  return (
    <div className="btn-tab-holder">
      <button>Haikei for UI Design</button>
      <button>Haikei for slide decks</button>
      <button>Haikei for blog posts</button>
      <button>Haikei for social media</button>
    </div>
  );
};

const TabContent = (props: any) => {
  return (
    <div className="lg:flex hidden justify-between mb-24">
      <div className="w-1/2 px-8">
        <h3>Haikei for UI Design</h3>
        <p className="text-left text-textlight">
          Whether you are designing login screens, banner backgrounds, product
          showcases, or just need some cool visuals for your marketing pages,
          Haikei has you covered. Select one of our generators, choose your
          canvas size and add your brand colors to make the visuals yours.
        </p>
        <p className="text-sm py-0">
          You can start with <a className="underline">Blob scene</a>,{" "}
          <a className="underline">Low poly grid</a>, or{" "}
          <a className="underline">Layered waves</a>
        </p>
      </div>
      <div className="w-1/2">
        <img
          src="https://haikei.app/use-case-ui-design.svg"
          className="w-3/4"
        />
      </div>
    </div>
  );
};

export default Tabs;
