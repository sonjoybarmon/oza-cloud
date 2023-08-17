import { exploreData } from "@/fakedata/explore";
import Link from "next/link";
import React from "react";

type Props = {
  // Define your props here (if any)
};

const Explore: React.FC<Props> = (props) => {
  return (
    <section className="py-20 bg-primaryShade">
      <div className="oza-container">
        <div className="">
          <div className="">
            <h2 className="laptop:text-5.5xl text-4.5xl font-extrabold leading-tight laptop:mb-12 mb-4">
              Affordable Cloud Power That's Easily Scalable
            </h2>
            <p className="text-sm leading-8 desktop:text-xl font-domaine">
              Getting the best out of your infrastructure shouldn’t be
              difficult. We’ll have you set up in no time,
              <br className="hidden tablet:block" />
              complete with mind-blowing performance and transparent pricing.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-20 gap-7 laptop:grid-cols-3">
          {exploreData?.map((explore) => (
            <div
              className="w-full py-10 bg-white rounded px-7"
              key={explore?.id}
            >
              <Link href="/">
                <div className="min-h-[78px]">
                  <h2 className="text-2xl font-bold leading-tight tablet:text-4xl mb-7 ">
                    {explore?.title}
                  </h2>
                </div>
                <div className="mb-9">
                  <p className="min-h-90">{explore?.description}</p>
                </div>
              </Link>
              <a href="" className="btn-md">
                {explore?.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
