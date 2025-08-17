import React from "react";

const Tabs = (props: any) => {
  return (
    <div className="col">
      <div className="btn-tab-holder w-full flex justify-between hidden md:inline">
        <button className="active">
          Haikei for <br /> UI Design
        </button>
        <button>
          Haikei for <br /> slide decks
        </button>
        <button>
          Haikei for <br /> blog posts
        </button>
        <button>
          Haikei for <br /> social media
        </button>
      </div>
      <TabContent />
    </div>
  );
};

const TabContent = (props: any) => {
  return (
    <div className="flex flex-col md:flex-row my-12 w-full px-6">
      <div className="md:w-1/2 text-left mr-8">
        <h2>Haikei for UI Design</h2>
        <p className="text-textlight">
          Whether you are designing login screens, banner backgrounds, product
          showcases, or just need some cool visuals for your marketing pages,
          Haikei has you covered. Select one of our generators, choose your
          canvas size and add your brand colors to make the visuals yours.
        </p>
        <p className="text-sm pb-4">
          You can start with <a className="underline">Blob scene</a>,{" "}
          <a className="underline">Low poly grid</a>, or{" "}
          <a className="underline">Layered waves</a>
        </p>
      </div>
      <div className="md:w-1/2 flex items-center justify-end">
        <img src="https://haikei.app/use-case-ui-design.svg" className="" />
      </div>
    </div>
  );
};

export default Tabs;
