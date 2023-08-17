import React from "react";

type Props = {
  // Define your props here (if any)
};

const Location: React.FC<Props> = (props) => {
  return (
    <section>
      <div className="flex flex-col items-start justify-between my-20 desktop:my-32 oza-container tablet:items-center tablet:flex-row">
        <div className="w-full mx-0 mb-4 laptop:w-1/2 desktop:mx-6 laptop:mb-0">
          <img
            className="w-full rounded-b-full rounded-tl-full tablet:w-1/2"
            src="/assets/images/oza-location.jpg"
            alt="Business checking account no monthly fee"
            loading="lazy"
          />
        </div>
        <div className="w-full laptop:w-1/2">
          <h2 className="laptop:text-5.5xl text-4.5xl font-extrabold leading-tight laptop:mb-12 mb-4">
            20+ global datacentre locations
          </h2>
          <p className="mb-8 text-sm leading-8 desktop:text-xl font-domaine">
            Discover Boundless Reach with Ozacloud. Our extensive network of
            Data center across 20+ global destinations guarantees exceptional
            speed and access, bringing your digital experience closer to you.
          </p>

          <a href="" className="tracking-wide btn-md">
            Explore Data Centers
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
