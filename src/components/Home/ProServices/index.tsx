import React from "react";

type Props = {
  // Define your props here (if any)
};

const ProServices: React.FC<Props> = (props) => {
  return (
    <section>
      <div className="flex flex-col items-start justify-between my-20 desktop:my-32 oza-container tablet:items-center tablet:flex-row">
        <div className="laptop:w-1/2 w-full tablet:mr-[8.8%]">
          <h2 className="text-3xl desktop:text-4.5xl font-extrabold leading-tight mb-6 faq-title">
            Pro Services
          </h2>
          <div className="py-6 border-b border-primaryShade">
            <h3 className="flex justify-between text-xl font-bold accordion-title desktop:text-2xl">
              <span>Web Design</span>
              <span className="accordion-icon">
                <img
                  src="/assets/icons/plus-blue.svg"
                  width="20"
                  height="20"
                  className="flex laptop:hidden"
                />
              </span>
            </h3>
            <div className="hidden text-sm leading-8 transition-all duration-300 accordion-content desktop:text-xl font-domaine laptop:block">
              <div className="flex items-start gap-4 mb-6 tablet:items-center text-secondary">
                <img
                  src="./assets/icons/icon_team_management.svg"
                  className="mr-4"
                  alt=""
                />
                <div>
                  <p className="mt-3 text-xl">
                    Empower your business with Ozacloud's Pro Services and let
                    our experts craft your website while you concentrate on your
                    core priorities
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 border-b border-primaryShade">
            <h3 className="flex justify-between text-xl font-bold accordion-title desktop:text-2xl">
              <span>Site Management</span>
              <span className="accordion-icon">
                <img
                  src="assets/icons/plus-blue.svg"
                  width="20"
                  height="20"
                  className="flex laptop:hidden"
                />
              </span>
            </h3>
            <div className="hidden text-sm leading-8 transition-all duration-300 accordion-content desktop:text-xl font-domaine laptop:block">
              <div className="flex items-start gap-4 mb-6 tablet:items-center text-secondary">
                <img
                  src="./assets/icons/icon_move_money.svg"
                  className="mr-4"
                  alt=""
                />
                <div>
                  <p className="mt-3 text-xl">
                    Elevate your online presence through Ozacloud's Site
                    Management services, encompassing Hacked Site Repair, Site
                    Updates, and Site Optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 border-b border-primaryShade">
            <h3 className="flex justify-between text-xl font-bold accordion-title desktop:text-2xl">
              <span>Digital Markiting</span>
              <span className="accordion-icon">
                <img
                  src="assets/icons/plus-blue.svg"
                  width="20"
                  height="20"
                  className="flex laptop:hidden"
                />
              </span>
            </h3>
            <div className="hidden text-sm leading-8 transition-all duration-300 accordion-content desktop:text-xl font-domaine laptop:block">
              <div className="flex items-start gap-4 mb-6 tablet:items-center text-secondary">
                <img
                  src="./assets/icons/icon_product.svg"
                  className="w-16 mr-4"
                  alt=""
                />
                <div>
                  <p className="mt-3 text-xl">
                    Transform your brand's digital footprint with Ozacloud's
                    dynamic Digital Marketing strategies, driving growth,
                    engagement, and success in the online landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 mb-12 border-b border-primaryShade">
            <h3 className="flex justify-between text-xl font-bold accordion-title desktop:text-2xl">
              <span>Brand Management</span>
              <span className="accordion-icon">
                <img
                  src="assets/icons/plus-blue.svg"
                  width="20"
                  height="20"
                  className="flex laptop:hidden"
                />
              </span>
            </h3>
            <div className="hidden text-sm leading-8 transition-all duration-300 accordion-content desktop:text-xl font-domaine laptop:block">
              <div className="flex items-start gap-4 mb-6 tablet:items-center text-secondary">
                <img
                  src="./assets/icons/together.svg"
                  className="w-16 mr-4"
                  alt=""
                />
                <div>
                  <p className="mt-3 text-xl">
                    Shape and amplify your brand's narrative with Ozacloud's
                    meticulous Brand Management, fostering resonance,
                    recognition, and enduring customer connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a href="" className="tracking-wide btn-md">
            Explore Enterprise Service
          </a>
        </div>
        <div className="flex justify-end w-full mx-0 mb-4 mr-0 laptop:w-1/2 desktop:mx-6 laptop:mb-0">
          <img
            className="rounded-tl-[45%] rounded-br-[45%] laptop:w-11/12 w-full mt-12 laptop:mt-0"
            src="assets/images/pro-serv-ozacloud1.jpg"
            alt="Business checking account no monthly fee"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ProServices;
