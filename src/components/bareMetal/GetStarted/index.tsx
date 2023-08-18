import React from 'react';

type Props = {
  // Define your props here (if any)
};

const GetStarted: React.FC<Props> = (props) => {
  return (
    <section>
      <div className="mt-20 oza-container">
        <h2 className="text-5.5xl font-extrabold mb-6 leading-tight text-center">
          Get started with our line of credit.
        </h2>
        <p className="text-sm leading-8 text-center desktop:text-xl font-domaine">
          First, provide basic information about your business. If approved, you
          can request funds from your online <br />
          dashboard and receive them in your account in as fast as 24 hours.1
        </p>
      </div>
      <div className="flex flex-col items-start justify-between mt-16 mb-40 oza-container tablet:items-center tablet:flex-row">
        <div className="w-full mx-0 mb-4 mr-0 laptop:w-1/2 desktop:mx-6 laptop:mb-0">
          <img
            className="rounded-tr-[45%]"
            src="assets/images/hosting-lady.jpg"
            alt="Business checking account no monthly fee"
            loading="lazy"
          />
        </div>
        <div className="laptop:w-1/2 w-full tablet:ml-[8.8%]">
          <div className="py-6">
            <h3 className="flex justify-between mb-4 text-2xl font-bold accordion-title desktop:text-4xl">
              Minimum qualifications
            </h3>

            <li className="text-2xl text-secondary">625+ FICO score</li>
            <li className="text-2xl text-secondary">24+ months in business</li>
            <li className="text-2xl text-secondary">$40,000 in monthly revenue</li>
            <li className="text-2xl text-secondary">
              Business is operating or incorporated
            </li>
          </div>
          <div className="pt-6 pb-14">
            <h3 className="flex justify-between mb-4 text-2xl font-bold accordion-title desktop:text-4xl">
              What you need to apply
            </h3>

            <li className="text-2xl text-secondary">
              Basic details about you and your business
            </li>
            <li className="text-2xl text-secondary">
              Bank connection or bank statements for
            </li>
            <li className="text-2xl text-secondary">
              Business is in good standing
            </li>
          </div>
          <a href="" className="tracking-wide btn-md">
            Start application
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;