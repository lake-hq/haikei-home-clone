import React from "react";

const Tabs = (props: any) => {
  return (
    <div className="lg:flex hidden">
      <div className="w-1/2">
        <h3>Haikei for UI Design</h3>
        <p className="text-left text-textlight">
          Whether you are designing login screens, banner backgrounds, product
          showcases, or just need some cool visuals for your marketing pages,
          Haikei has you covered. Select one of our generators, choose your
          canvas size and add your brand colors to make the visuals yours.
        </p>
      </div>
      <div className="w-1/2">
        <img src="https://haikei.app/use-case-ui-design.svg" />
      </div>
    </div>
  );
};

export default Tabs;
