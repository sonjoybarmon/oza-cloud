import { businessData } from "@/fakedata/business";
import React from "react";

type Props = {
  // Define your props here (if any)
};

const Business: React.FC<Props> = (props) => {
  return (
    <section className="py-24 bg-primaryShade">
      <div className="oza-container">
        <div className="">
          <div className="">
            <h2 className="laptop:text-5.5xl text-4.5xl font-extrabold leading-tight mb-12">
              More power to your
              <br className="hidden tablet:block" />
              business.
            </h2>
            <p className="text-sm leading-8 desktop:text-xl font-domaine">
              From self-guided resources to expert help from real people, you
              can count on
              <br className="" />
              dependable support services that are always there for you.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 mt-20 laptop:flex-row">
          {businessData?.map((business) => (
            <div className="w-full py-10 bg-white laptop:w-1/4 px-7">
              <a className="block-d3n h-ap6" href="#">
                <div className="h-ap6 bg-of8 px-eog py-9nk">
                  <div>
                    <img src={business?.image} width="55" height="55" />
                  </div>
                  <div>
                    <h3 className="mt-10 mb-5 text-3xl font-bold">
                      {business?.title}
                    </h3>
                    <p className="text-esa mb-9r3">{business?.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
