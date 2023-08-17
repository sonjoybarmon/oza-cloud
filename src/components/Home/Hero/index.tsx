import React from "react";

type Props = {
  // Define your props here (if any)
};

const Hero: React.FC<Props> = (props) => {
  return (
    <section className="flex flex-col-reverse justify-between pt-0 tablet:pt-12 oza-hero oza-container laptop:flex-row tablet:flex-row mobile:flex-col-reverse">
      <div className="w-full tablet:w-1/2">
        <h1
          data-testid="heading"
          className="text-3.5xl desktop:text-7xl font-bold text-secondary font-gillix mb-5 leading-tight desktop:mb-10"
        >
          Web Hosting That
          <br className="hidden tablet:block" />
          Simply Reliable
        </h1>
        <p
          data-testid="subheading"
          className="mb-6 text-base leading-5 desktop:text-2xl desktop:mb-10 desktop:leading-10"
        >
          Our streamlined
          <a className="text-primary mx-1 " href="./web-hosting.html">
            Webhosting
          </a>
          ,
          <a className="text-primary mx-1" href="./web-hosting.html">
            Busniess Email
          </a>
          , and
          <a className="text-primary mx-1 " href="./cloud-server.html">
            Cloud Server
          </a>
          make it easy to run your business with confidence.
        </p>
        <div className="flex flex-col gap-2 mb-8">
          <p className="flex items-center text-sm">
            <img src="/assets/icons/check-box.svg" className="mr-2" alt="" />
            Managed hosting built by cloud experts
          </p>
          <p className="flex items-center text-sm">
            <img src="/assets/icons/check-box.svg" className="mr-2" alt="" />
            Free website migrations from any host
          </p>
          <p className="flex items-center text-sm">
            <img src="/assets/icons/check-box.svg" className="mr-2" alt="" />
            Backed by the Most Helpful Humans in Hosting®
          </p>
          <p className="flex items-center text-sm">
            <img src="/assets/icons/check-box.svg" className="mr-2" alt="" />
            100% green hosting powered by renewable energy
          </p>
        </div>
        <a href="#modal" className="btn-lg mb-14">
          Get started
        </a>

        <div className="flex flex-row items-center mt-14">
          <img
            src="assets/icons/icon_growth.svg"
            className="me-7 me-md-0 w-14"
            width="68"
            height="40"
            alt="Better Business Bureau A+ rating. Bluevine is a financial technology company, not a bank. Bluevine deposits are FDIC-insured through Coastal Community Bank, Member FDIC."
            aria-hidden="false"
          />
          <p className="text-xs font-gillix">
            Proud to be carbon negative.
            <br className="block" />
            Host and grow your website with best green hosting provider
          </p>
        </div>
      </div>
      <div className="w-full mb-6 overflow-x-hidden tablet:w-1/2 flex items-center justify-start tablet:justify-end tablet:mb-0 mobile:w-88 mobile:ml-0 tablet:ml-4 laptop:ml-8">
        <img
          alt="Choose the best business banking products"
          aria-hidden="true"
          src="assets/images/ozabanner1.jpeg"
          //   className="rounded-tr-[45%] rounded-bl-[45%] w-[200px] tablet:w-88"
          className="rounded-tr-[45%] rounded-bl-[45%] w-88 tablet:w-88"
        />
      </div>
    </section>
  );
};

export default Hero;
