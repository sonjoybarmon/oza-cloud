import { servicesData } from "@/fakedata/Services";
import React from "react";

type Props = {
  // Define your props here (if any)
};

const Services: React.FC<Props> = (props) => {
  return (
    <section>
      <div className="flex flex-col items-start justify-between my-20 desktop:my-32 oza-container tablet:items-center tablet:flex-row">
        <div className="w-full mx-0 mb-4 mr-0 laptop:w-1/2 desktop:mx-6 laptop:mb-0">
          <img
            className="rounded-tl-[45%] rounded-br-[45%]"
            src="/assets/images/Enterprise_Services_by_ozacloud.png"
            alt="Business checking account no monthly fee"
            loading="lazy"
          />
        </div>
        <div className="laptop:w-1/2 w-full tablet:ml-[8.8%]">
          <h2 className="text-3xl desktop:text-4.5xl font-extrabold leading-tight mb-6 faq-title">
            Enterprise Services
          </h2>

          {servicesData?.map((service) => (
            <div
              className="py-6 border-b border-primaryShade"
              key={service?.id}
            >
              <h3 className="flex justify-between text-xl font-bold accordion-title desktop:text-2xl">
                <span> {service?.title} </span>
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
                <p>{service?.description}</p>
              </div>
            </div>
          ))}

          <a href="" className="tracking-wide btn-md">
            Explore Enterprise Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
