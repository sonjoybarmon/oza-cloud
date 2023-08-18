"use client";
import { bareCloudData } from "@/fakedata/BareCloudData";
import { locationData } from "@/fakedata/location";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
  // Define your props here (if any)
};

const CloudService: React.FC<Props> = (props) => {
  const [tabShow, setTabShow] = useState<boolean>(false);

  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  // handleClick
  const handleClick = () => {
    setTabShow(!tabShow);
  };

  const active = "border-b-2 border-b-white border-solid";

  return (
    <section className="bg-secondary py-[40px]">
      <div className="py-20 oza-container">
        <div>
          <h3 className="text-3.5xl desktop:text-5xl text-center font-bold text-white mb-3">
            Choose one of our pre-built Cloud Servers
            <br className="hidden tablet:block" />
          </h3>
          <p className="text-center text-white">
            Whatever you’ll be using it for, our awesome pre-built packages have
            been specially put together to cover every type of project.
          </p>
        </div>
        <div className="py-6 mt-12 border-b cursor-pointer border-primaryShade">
          <h3
            onClick={handleClick}
            className="flex justify-center text-xl font-bold text-white gap-x-12 faq-title desktop:text-2xl"
          >
            33 Locations Filter by Location
            <span className="">
              <MdOutlineKeyboardArrowDown />
            </span>
          </h3>

          <div className={`${tabShow ? "block" : "hidden"}  `}>
            <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
              <button
                // type="button"
                onClick={() => handleTabClick(1)}
                className={`${
                  activeTab === 1 ? active : ""
                } px-4 py-2 -mb-px font-semibold text-white`}
                id="unstyled-tabs-item-1"
                data-hs-tab="#unstyled-tabs-1"
                aria-controls="unstyled-tabs-1"
                role="tab"
              >
                Americas
              </button>
              <button
                // type="button"
                onClick={() => handleTabClick(2)}
                className={`${
                  activeTab === 2 ? active : ""
                } px-4 py-2 -mb-px font-semibold text-white`}
                id="unstyled-tabs-item-2"
                data-hs-tab="#unstyled-tabs-2"
                aria-controls="unstyled-tabs-2"
                role="tab"
                // className="px-4 py-2 -mb-px font-semibold text-white"
              >
                Europe & Africa
              </button>
              <button
                // type="button"
                onClick={() => handleTabClick(3)}
                className={`${
                  activeTab === 3 ? active : ""
                } px-4 py-2 -mb-px font-semibold text-white`}
                id="unstyled-tabs-item-3"
                data-hs-tab="#unstyled-tabs-3"
                aria-controls="unstyled-tabs-3"
                role="tab"
                // className="px-4 py-2 -mb-px font-semibold text-white"
              >
                Asia & Australia
              </button>
            </nav>

            <div className="mt-[50px]">
              <div
                id="unstyled-tabs-1"
                role="tabpanel"
                aria-labelledby="unstyled-tabs-item-1"
              >
                <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-7">
                  {/* map locationData and filter by category */}
                  {locationData
                    .filter((data) => data.category.includes("Americas"))
                    .map((el) => (
                      <div className="flex items-center justify-between p-5 duration-300 bg-white rounded cursor-pointer text-secondary border-primary hover:bg-primaryShade">
                        <div>
                          <span className="text-xl font-semibold">
                            {el.name}
                          </span>
                          <p>{el.core}</p>
                        </div>
                        <div>
                          <img
                            src="/assets/icons/united-kingdom.svg"
                            className="w-8"
                            alt=""
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div
                id="unstyled-tabs-2"
                className="hidden"
                role="tabpanel"
                aria-labelledby="unstyled-tabs-item-2"
              >
                <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-7">
                  {locationData
                    ?.filter((data) =>
                      data.category.includes("Europe & Africa")
                    )
                    .map((el) => (
                      <div className="flex items-center justify-between p-5 duration-300 bg-white rounded cursor-pointer text-secondary border-primary hover:bg-primaryShade">
                        <div>
                          <span className="text-xl font-semibold">
                            Atlanta 2, GA
                          </span>
                          <p>Core</p>
                        </div>
                        <div>
                          <img
                            src="./assets/icons/united-kingdom.svg"
                            className="w-8"
                            alt=""
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div
                id="unstyled-tabs-3"
                className="hidden"
                role="tabpanel"
                aria-labelledby="unstyled-tabs-item-3"
              >
                <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-7">
                  {locationData
                    ?.filter((data) =>
                      data.category.includes("Asia & Australia")
                    )
                    ?.map((el) => (
                      <div className="flex items-center justify-between p-5 duration-300 bg-white rounded cursor-pointer text-secondary border-primary hover:bg-primaryShade">
                        <div>
                          <span className="text-xl font-semibold">
                            Atlanta 2, GA
                          </span>
                          <p>Core</p>
                        </div>
                        <div>
                          <img
                            src="./assets/icons/united-kingdom.svg"
                            className="w-8"
                            alt=""
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* tabs */}
        </div>
        <div className="grid grid-cols-1 mt-20 laptop:grid-cols-3 tablet:grid-cols-2 gap-7">
          {bareCloudData?.map((cloud) => (
            <div
              key={cloud?.id}
              className="flex flex-col py-6 bg-white h-fit px-7"
            >
              <p>{cloud?.title}</p>
              <h3 className="my-2 text-2xl font-bold desktop:text-3xl font-gillix leading:5 desktop:leading-tight tablet:min-h-0 mobile:min-h-0">
                {cloud?.type}
              </h3>

              <ul className="flex flex-col justify-center w-full">
                <div className="flex gap-x-4">
                  <li className="pr-2 border-r">
                    {cloud?.cores} cores, {cloud?.threads} threads
                  </li>
                  <li>{cloud?.ghz}Ghz</li>
                </div>
                <li>{cloud?.ram}GB RAM</li>
                <span className="my-2"> {cloud?.ssd}</span>
                <div className="my-3">
                  <li className="flex text-xl font-bold">
                    <img
                      src="/assets/icons/neatherland.svg"
                      className="-ml-1"
                      alt=""
                    />
                    {cloud?.location}
                  </li>
                  <li>
                    <i className="mr-1 fa-regular fa-clock"></i>
                    {cloud?.time} hours
                  </li>
                </div>
                <li>
                  <i className="fa-solid fa-check"></i>
                  {cloud?.bit}Gbit/s Guaranteed
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  {cloud?.storage}TB traffic per month
                </li>
              </ul>

              <div className="mt-4 mb-2 space-y-1">
                <p className="mb-0 font-semibold text-secondary">Starting at</p>
                <div className="flex items-baseline font-normal">
                  <div className="flex px-2">
                    <h4 className="my-2 text-3xl font-bold text-secondary">
                      €{cloud?.price} /mo
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full space-y-2">
                <a
                  href="#modal"
                  className="flex items-center justify-center btn btn-lg"
                >
                  Compare Plans
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudService;
