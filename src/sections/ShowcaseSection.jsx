import React from "react";

const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaseLayout">
          {/* LEFT  */}
          <div className="first-project-wrapper">
            <img src="/images/project1.png" alt="SEST" />
          </div>
          <div className="text-content">
            <h2>
              On-Demand Rides Made Simple with a Powerful, User-Friendly App
              called Ryde
            </h2>
            <p className="text-white-50 md:text-xl">
              An Web-Application that build with Php(laravel) and React.js. &
              Bootstrap for a fast, user-friendly experience.
            </p>
          </div>

          {/* RIGHT  */}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
