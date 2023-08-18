import React from "react";

type Props = {
  // Define your props here (if any)
};

const Packages: React.FC<Props> = (props) => {
  return (
    <section className="pt-10 pb-8 bg-secondary desktop:pt-14 desktop:pb-14">
      <div className="flex flex-col items-center justify-center oza-container">
        <h3 className="text-5.5xl font-extrabold mb-4 leading-tight text-white text-center">
          Do more with OzaCloud
        </h3>
        <p className="w-full mb-10 text-base text-center text-white">
          Discover our Bare Metal Servers, ideal for loads of projects. And why
          not backup your data, servers, sites and devices while you’re at it?
        </p>
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-y-7 laptop:gap-x-7">
          <div className="flex flex-col items-center justify-center h-full p-4 py-10 text-center bg-white px-7 pb-11">
            <img
              src="assets/icons/hosting.svg"
              alt="Business checking account no monthly fee"
              width="55"
              height="55"
              loading="lazy"
            />
            <h3 className="mx-2 mt-6 text-2xl font-bold desktop:text-3xl font-gillix leading:5 desktop:leading-tight tablet:min-h-0 mobile:min-h-0">
              Bare Metal Servers
            </h3>

            <p className="mx-4 my-6 text-sm leading-8 text-secondary desktop:text-xl font-domaine">
              The most affordable way to get all the basics for your WordPress
              website - perfect if you're new to WordPress.
            </p>
            <div className="mt-2 mb-4 space-y-1">
              <p className="mb-0 font-semibold text-secondary">Starting at</p>
              <div className="flex items-baseline justify-center mb-2 font-normal">
                <div className="flex items-center justify-center px-2">
                  <h4 className="my-2 text-5xl font-bold text-secondary">
                    $2.59/mo
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-6 space-y-2">
              <a href="#modal" className="btn-lg">
                Discover bare metal
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full p-4 py-10 text-center bg-white px-7 pb-11">
            <img
              src="assets/icons/cloud-server1.svg"
              alt="Business checking account no monthly fee"
              width="55"
              height="55"
              loading="lazy"
            />
            <h3 className="mx-2 mt-6 text-2xl font-bold desktop:text-3xl font-gillix leading:5 desktop:leading-tight tablet:min-h-0 mobile:min-h-0">
              Cyber Protect
            </h3>

            <p className="mx-4 my-6 text-sm leading-8 text-secondary desktop:text-xl font-domaine">
              The most affordable way to get all the basics for your WordPress
              website - perfect if you're new to WordPress.
            </p>
            <div className="mt-2 mb-4 space-y-1">
              <p className="mb-0 font-semibold text-secondary">Starting at</p>
              <div className="flex items-baseline justify-center mb-2 font-normal">
                <div className="flex items-center justify-center px-2">
                  <h4 className="my-2 text-5xl font-bold text-secondary">
                    $2.59/mo
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-6 space-y-2">
              <a href="#modal" className="btn-lg">
                Back up your project
              </a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-center text-white font-gillix desktop:mt-16">
          Proud to be carbon negative.
        </p>
      </div>
    </section>
  );
};

export default Packages;
