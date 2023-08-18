import React from "react";

type Props = {
  // Define your props here (if any)
};

const Hero: React.FC<Props> = (props) => {
  return (
    <section className="h-fit bg-primaryShade py-28 desktop:py-20">
      <div className="flex flex-col-reverse justify-between tablet:items-center mobile:items-start oza-container laptop:flex-row tablet:flex-row mobile:flex-col-reverse">
        <div className="w-full tablet:w-1/2">
          <h1
            data-testid="heading"
            className="text-3.5xl desktop:text-7xl font-extrabold text-secondary font-gillix mb-5 desktop:mb-10"
          >
            Business <br />
            checking
            <br />
            built for you.
          </h1>
          <p className="mb-10 text-base leading-5 font-extralight desktop:text-2xl desktop:mb-14 desktop:leading-10 font-domaine">
            Apply in minutes for no monthly or <br />
            overdraft fees and unlimited transactions
          </p>
          <a href="#modal" className="btn-lg mb-14">
            {" "}
            Open account
          </a>

          <div className="flex flex-row items-center mt-14">
            <img
              src="assets/images/hero-logos.png"
              className="me-7 me-md-0"
              width="68"
              height="40"
              alt="Better Business Bureau A+ rating. Bluevine is a financial technology company, not a bank. Bluevine deposits are FDIC-insured through Coastal Community Bank, Member FDIC."
              aria-hidden="false"
            />
            <p className="text-xs font-gillix">
              Bluevine is a financial technology company, not a bank.
              <br className="hidden tablet:block" />
              Bluevine deposits are
              <span className="fw-bold"> FDIC-insured </span>
              through Coastal Community Bank, Member FDIC.
            </p>
          </div>
        </div>
        <div className="w-full mb-6 overflow-x-hidden tablet:w-1/2 tablet:mb-0 mobile:justify-start mobile:w-88 mobile:ml-0 tablet:ml-4 laptop:ml-8">
          <img
            alt="Choose the best business banking products"
            aria-hidden="true"
            src="assets/images/hero-2.png"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
