import React from "react";

type Props = {
  // Define your props here (if any)
};

const GetStarted: React.FC<Props> = (props) => {
  return (
    <section className="py-20 bg-primary">
      <div className="oza-container">
        <div className="flex flex-col justify-between text-white tablet:flex-row">
          <div className="w-5/6">
            <h2 className="text-3xl laptop:text-5.5xl font-extrabold leading-tight mb-8 laptop:mb-0 text-white">
              Experience the OzaCloud Hosting Difference Today!
            </h2>
          </div>
          <div className="">
            <a
              href="#modal"
              className="px-16 py-4 text-sm font-bold bg-white rounded text-primary desktop:text-xl font-gillix"
            >
              Get started
            </a>
            <p className="mt-8 text-sm text-white desktop:text-xl">
              Want to learn more?
              <br className="hidden tablet:block" />
              Explore our
              <a
                className="mt-2 text-sm text-white underline cursor-pointer desktop:text-xl"
                href="#"
              >
                Resources and Guides
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
