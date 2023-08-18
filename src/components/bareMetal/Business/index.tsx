import React from "react";

type Props = {
  // Define your props here (if any)
};

const Business: React.FC<Props> = (props) => {
  return (
    <section>
      <div className="my-28 oza-container">
        <div>
          <h1 className="text-3.5xl desktop:text-7xl font-bold text-secondary mb-6">
            Small business banking
            <br className="hidden tablet:block" />
            with big benefits.
          </h1>
          <p className="mb-6 text-sm leading-8 desktop:text-xl font-domaine">
            Save on fees, earn interest, and set your business up for success
            with an online
            <br className="hidden tablet:block" />
            business checking account.
          </p>
        </div>
        <div className="flex flex-col items-center my-12 tablet:flex-row tablet:gap-x-8 gap-x-0 tablet:justify-between gap-y-6 tablet:gap-y-0">
          <div className="w-full">
            <img
              src="assets/icons/icon_schedule_payments.svg"
              width="55"
              height="55"
            />

            <div>
              <h3 className="mx-2 mt-6 text-2xl font-bold desktop:text-3xl font-gillix leading:5 desktop:leading-tight tablet:min-h-0 mobile:min-h-0">
                No monthly fees
              </h3>
              <p className="text-base font-domaine font-extralight">
                Don’t worry about monthly or
                <br className="hidden tablet:block" />
                overdraft fees.
              </p>
            </div>
          </div>
          <div className="w-full">
            <img
              src="assets/icons/icon_no_minimum_balance.svg"
              width="55"
              height="55"
            />

            <div>
              <h3 className="mt-3 mb-6 text-3xl font-extrabold min-h-[65px]">
                No minimum
                <br className="hidden tablet:block" />
                balances
              </h3>
              <p className="text-base font-domaine font-extralight">
                Open an account with no <br className="hidden tablet:block" />
                minimum deposit required.
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src="assets/icons/icon_fastmoney.svg" width="55" height="55" />

            <div>
              <h3 className="mt-3 mb-6 text-3xl font-extrabold min-h-[65px]">
                Unlimited
                <br className="hidden tablet:block" />
                transactions
              </h3>
              <p className="text-base font-domaine font-extralight">
                Make all the deposits or payments
                <br className="hidden tablet:block" />
                you need with no limit on your
                <br className="hidden tablet:block" />
                number of transactions.
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src="assets/icons/icon_stock.svg" width="55" height="55" />

            <div>
              <h3 className="mt-3 mb-6 text-3xl font-extrabold min-h-[65px]">
                High-yield <br className="hidden tablet:block" />
                interest
              </h3>
              <p className="text-base font-domaine font-extralight">
                Earn 2.0% interest on your{" "}
                <br className="hidden tablet:block" />
                balance up to and including{" "}
                <br className="hidden tablet:block" />
                $250,000 if you meet a monthly
                <br className="hidden tablet:block" />
                activity goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
