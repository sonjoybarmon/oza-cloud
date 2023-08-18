import React from "react";

type Props = {
  // Define your props here (if any)
};

const FeatureCloud: React.FC<Props> = (props) => {
  return (
    <section className="pb-24 pt-24">
      <div className="oza-container">
        <div className="">
          <div className="">
            <h2 className="text-5.5xl font-extrabold mb-6 leading-tight">
              Funding that’s fast
              <br className="hidden tablet:block" />
              and flexible.
            </h2>
            <p className="text-sm leading-8 desktop:text-xl font-domaine">
              Get on-demand access to a revolving line of credit
              <br className="" />
              with no monthly fees.1
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-8 mt-20 laptop:flex-row">
          <div className="w-full laptop:w-1/4">
            <a href="#">
              <div>
                <div>
                  <img src="assets/icons/together.svg" width="55" height="55" />
                </div>
                <div>
                  <h3 className="mt-10 mb-5 text-3xl font-bold">
                    Access to revolving credit.
                  </h3>
                  <p className="text-esa mb-9r3">
                    Your credit line replenishes as you make repayments.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full laptop:w-1/4">
            <a href="#">
              <div>
                <div>
                  <img src="assets/icons/together.svg" width="55" height="55" />
                </div>
                <div>
                  <h3 className="mt-10 mb-5 text-3xl font-bold">
                    Access to revolving credit.
                  </h3>
                  <p className="text-esa mb-9r3">
                    Your credit line replenishes as you make repayments.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full laptop:w-1/4">
            <a href="#">
              <div>
                <div>
                  <img src="assets/icons/together.svg" width="55" height="55" />
                </div>
                <div>
                  <h3 className="mt-10 mb-5 text-3xl font-bold">
                    Access to revolving credit.
                  </h3>
                  <p className="text-esa mb-9r3">
                    Your credit line replenishes as you make repayments.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full laptop:w-1/4">
            <a href="#">
              <div>
                <div>
                  <img src="assets/icons/together.svg" width="55" height="55" />
                </div>
                <div>
                  <h3 className="mt-10 mb-5 text-3xl font-bold">
                    Access to revolving credit.
                  </h3>
                  <p className="text-esa mb-9r3">
                    Your credit line replenishes as you make repayments.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCloud;
