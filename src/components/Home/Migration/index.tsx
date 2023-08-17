import React from 'react';

type Props = {
  // Define your props here (if any)
};

const Migration: React.FC<Props> = (props) => {
  return (
    <section>
      <div className="flex flex-col items-start justify-between my-20 desktop:my-32 oza-container tablet:items-center tablet:flex-row">
        <div className="laptop:w-1/2 w-full tablet:mr-[8.8%] ml-0">
          <h2 className="laptop:text-5.5xl text-4.5xl font-extrabold leading-tight mb-4 laptop:mb-12">
            EASY switch to OzaCloud
          </h2>
          <p className="text-sm leading-8 desktop:text-xl font-domaine">
            It will take less than an hour with zero downtime.
          </p>
          <div>
            <ul className="flex flex-col mt-8 text-secondary gap-y-6">
              <li className="flex items-start text-xl font-semibold laptop:items-center">
                <span className="min-w-[40px] min-h-[40px] border-2 rounded-full flex mr-4 justify-center items-center border-secondary font-bold">
                  1
                </span>
                Visit our Web hosting section and select the hosting package
                that aligns with your requirements.
              </li>
              <li className="flex items-start text-xl font-semibold laptop:items-center">
                <span className="min-w-[40px] min-h-[40px] border-2 rounded-full flex mr-4 justify-center items-center border-secondary font-bold">
                  2
                </span>
                Initiate a migration request within the client portal by
                furnishing the access details of the previous provider.
              </li>
              <li className="flex items-start text-xl font-semibold laptop:items-center">
                <span className="min-w-[40px] min-h-[40px] border-2 rounded-full flex mr-4 justify-center items-center border-secondary font-bold">
                  3
                </span>
                Afterwards, a member of our skilled Migration team will transfer
                your site(s) over to our platform.
              </li>
            </ul>
            <div className="flex items-center mt-8 bg-primaryShade p-7 rounded-tr-10rem rounded-bl-10rem">
              <div>
                <svg
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.0556 25.0556H4.88892V22H14.0556V25.0556Z"
                    fill="#020553"
                  />
                  <path
                    d="M34.5278 45.8334C43.1342 45.8334 50.1111 38.8565 50.1111 30.2501C50.1111 21.6436 43.1342 14.6667 34.5278 14.6667C25.9214 14.6667 18.9445 21.6436 18.9445 30.2501C18.9445 38.8565 25.9214 45.8334 34.5278 45.8334Z"
                    fill="white"
                  />
                  <path
                    d="M34.5277 45.8334C43.1342 45.8334 50.1111 38.8565 50.1111 30.2501C50.1111 21.6436 43.1342 14.6667 34.5277 14.6667C25.9213 14.6667 18.9444 21.6436 18.9444 30.2501C18.9444 38.8565 25.9213 45.8334 34.5277 45.8334Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.5277 42.8542C41.4888 42.8542 47.1319 37.2112 47.1319 30.2501C47.1319 23.289 41.4888 17.6459 34.5277 17.6459C27.5666 17.6459 21.9236 23.289 21.9236 30.2501C21.9236 37.2112 27.5666 42.8542 34.5277 42.8542ZM50.1111 30.2501C50.1111 38.8565 43.1342 45.8334 34.5277 45.8334C25.9213 45.8334 18.9444 38.8565 18.9444 30.2501C18.9444 21.6436 25.9213 14.6667 34.5277 14.6667C43.1342 14.6667 50.1111 21.6436 50.1111 30.2501Z"
                    fill="#D7E7FF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33 9.16664H29.3334V6.11108H39.7222V9.16664H36.0556V11.6728C45.6349 12.4499 53.1667 20.4704 53.1667 30.25C53.1667 40.5439 44.8218 48.8889 34.5278 48.8889C24.2338 48.8889 15.8889 40.5439 15.8889 30.25C15.8889 20.4704 23.4207 12.4499 33 11.6728V9.16664ZM34.5278 45.8333C43.1342 45.8333 50.1111 38.8564 50.1111 30.25C50.1111 21.6435 43.1342 14.6666 34.5278 14.6666C25.9214 14.6666 18.9445 21.6435 18.9445 30.25C18.9445 38.8564 25.9214 45.8333 34.5278 45.8333Z"
                    fill="#020553"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 31.7777H1.83331V28.7222H11V31.7777Z"
                    fill="#020553"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.0556 38.4999H4.88892V35.4443H14.0556V38.4999Z"
                    fill="#020553"
                  />
                  <path
                    d="M33 18.2188V29.9444H33.0048L33.0031 29.9461L42.4953 39.4384L44.656 37.2778L36.0556 28.6774L36.0556 18.2188H33Z"
                    fill="#020553"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl">
                  International payments are received in as fast as 24 hours.1
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-0 mb-4 laptop:w-1/2 desktop:mx-6 laptop:mb-0">
          <img
            src="assets/images/mobile.png"
            alt="Business checking account no monthly fee"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Migration;