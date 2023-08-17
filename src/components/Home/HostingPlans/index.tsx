import { hostingPlanData } from "@/fakedata/hostingPlan";
import Link from "next/link";
import React from "react";

type Props = {
  // Define your props here (if any)
};

const HostingPlans: React.FC<Props> = (props) => {
  return (
    <section className="py-20 desktop:py-32">
      <div className="oza-container">
        <div className="">
          <div className="text-center">
            <h2 className="laptop:text-5.5xl text-4.5xl font-extrabold leading-tight mb-4 laptop:mb-12">
              Hosting Plans For Every Website
            </h2>
            <p className="text-sm leading-8 desktop:text-xl font-domaine">
              Whether you're looking for affordable shared hosting or robust
              virtual private servers, <br />
              we have the right solution for your website.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-8 mt-20 laptop:flex-row">
          {hostingPlanData?.map((plan) => (
            <div className="w-full laptop:w-1/4">
              <Link href="/">
                <div className="flex flex-col items-center laptop:items-start">
                  <div>
                    <img
                      src="assets/icons/together.svg"
                      width="55"
                      height="55"
                    />
                  </div>
                  <div className="flex flex-col items-center laptop:items-start">
                    <h3 className="mt-10 mb-5 text-3xl font-bold text-center laptop:text-start">
                      {plan?.name}
                    </h3>
                    <p className="text-sm text-center laptop:text-start">
                      {plan?.description}
                    </p>
                    <div className="mt-5">
                      <p>Starting at</p>
                      <p className="mt-3 mb-5 text-xl font-bold text-secondary">
                        <span className="text-2xl laptop:text-3xl">
                          ${plan?.price}
                        </span>
                        /mo
                      </p>
                      <a
                        href=""
                        className="flex items-center justify-start text-lg font-semibold duration-200 text-secondary group hover:text-primary"
                      >
                        Learn more
                        <img
                          src="/assets/icons/right-capret.svg"
                          className="hidden duration-300 translate-x-1 group-hover:flex"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingPlans;
