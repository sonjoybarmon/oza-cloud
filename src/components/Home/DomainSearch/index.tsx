import React from "react";
import Link from "next/link";

type Props = {
  // Define your props here (if any)
};

const DomainSearch: React.FC<Props> = (props) => {
  return (
    <section className="py-20 mt-12 bg-primaryShade desktop:py-32">
      <div className="flex flex-col justify-between oza-container laptop:flex-row">
        <div className="w-full pr-0 laptop:w-3/5 laptop:pr-16">
          <div>
            <form
              id="domain-search"
              className="m-0 undefined"
              action="/domains/"
            >
              <div className="flex">
                <div className="flex items-center w-full bg-white border border-gray-100 rounded-md rounded-l rounded-r-none shadow h-72 focus-within:shadow-md focus-within:border-gray-200">
                  <div className="relative flex items-center w-full pl-1 h-72">
                    <input
                      id="domain-search-input"
                      className="w-full p-2 text-2xl font-semibold leading-none rounded false placeholder:text-transparent focus:outline-none focus:pb-0 focus:-mb-half peer"
                      value=""
                      name="domain"
                    />
                    <label
                      id="domain-search-input"
                      className="absolute pointer-events-none transition-all ease-in-out duration-200 left-0 peer-focus:-translate-y-4 peer-focus:text[-11px] text-base lg:text-lg pl-3"
                    >
                      Find your perfect domain name...
                    </label>
                  </div>
                </div>
                <button
                  id="domain-search-button"
                  aria-hidden="true"
                  className="font-semibold btn-lg !leading-none inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:!no-underline bg-primary text-white hover:bg-primary-400 active:bg-primary-600 focus:ring-blue py-[14px] text-lg rounded max-h-[72px] rounded-r rounded-l-none border border-transparent shadow-sm bg-primary-600 hover:bg-primary-700 !ring-0 px-6 tablet:px-10 laptop:px-12"
                >
                  <div className="w-auto lg:w-[36px] px-2 lg:px- h-[36px] flex items-center justify-center">
                    <span className="hidden sr-only">Search</span>
                    <svg
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <clipPath id="a">
                        <path d="m0 0h24v24h-24z"></path>
                      </clipPath>
                      <g clip-path="url(#a)">
                        <path
                          d="m23.8359 21.9797-5.6906-5.6906c-.1078-.1079-.2484-.1641-.3984-.1641h-.6188c1.4766-1.7109 2.3719-3.9375 2.3719-6.375 0-5.38594-4.3641-9.75-9.75-9.75-5.38594 0-9.75 4.36406-9.75 9.75 0 5.3859 4.36406 9.75 9.75 9.75 2.4375 0 4.6641-.8953 6.375-2.3719v.6188c0 .15.0609.2906.1641.3984l5.6906 5.6906c.2203.2203.5765.2203.7969 0l1.0593-1.0593c.2203-.2204.2203-.5766 0-.7969zm-14.0859-4.7297c-4.14375 0-7.5-3.3562-7.5-7.5 0-4.14375 3.35625-7.5 7.5-7.5 4.1438 0 7.5 3.35625 7.5 7.5 0 4.1438-3.3562 7.5-7.5 7.5z"
                          fill="#fff"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </form>
            <div className="max-w-[1100px] mx-auto"></div>
          </div>
          <ul className="grid w-full grid-cols-3 mt-10 tablet:grid-cols-6 domain_logo justify-items-stretch tablet:justify-between gap-x-6 gap-y-12">
            <li className="m-0">
              <Link
                href="/domains/us/"
                className="flex flex-col w-auto text-secondary hover:no-underline"
              >
                <img
                  src="assets/icons/us.svg"
                  alt="us tld logo"
                  loading="lazy"
                  className="h-[32px] max-w-[100px] w-auto mx-auto"
                />
                <p className="m-0 mt-2 text-base font-medium text-center text-secondary">
                  $2.99
                </p>
              </Link>
            </li>
            <li className="m-0">
              <Link
                href="/domains/io/"
                rel="alternate"
                className="flex flex-col w-auto text-secondary hover:no-underline"
              >
                <img
                  src="assets/icons/domain2.svg"
                  alt="io tld logo"
                  loading="lazy"
                  className="h-[32px] max-w-[100px] w-auto mx-auto"
                />
                <p className="m-0 mt-2 text-base font-medium text-center text-secondary">
                  $39.99
                </p>
              </Link>
            </li>
            <li className="m-0">
              <Link
                href="/domains/site/"
                rel="alternate"
                className="flex flex-col w-auto text-secondary hover:no-underline"
              >
                <img
                  src="assets/icons/site.svg"
                  alt="site tld logo"
                  loading="lazy"
                  className="h-[32px] max-w-[100px] w-auto mx-auto"
                />
                <p className="m-0 mt-2 text-base font-medium text-center text-secondary">
                  $1.99
                </p>
              </Link>
            </li>
            <li className="m-0">
              <Link
                href="/domains/design/"
                rel="alternate"
                className="flex flex-col w-auto text-secondary hover:no-underline"
              >
                <img
                  src="assets/icons/design.svg"
                  alt="design tld logo"
                  loading="lazy"
                  className="h-[32px] max-w-[100px] w-auto mx-auto"
                />
                <p className="m-0 mt-2 text-base font-medium text-center text-secondary">
                  $7.99
                </p>
              </Link>
            </li>
            <li className="m-0">
              <Link
                href="/domains/xyz/"
                rel="alternate"
                className="flex flex-col w-auto text-secondary hover:no-underline"
              >
                <img
                  src="assets/icons/xyz.svg"
                  alt="xyz tld logo"
                  loading="lazy"
                  className="h-[32px] max-w-[100px] w-auto mx-auto"
                />
                <p className="m-0 mt-2 text-base font-medium text-center text-secondary">
                  $1.99
                </p>
              </Link>
            </li>
            <li className="m-0">
              <Link
                href="/domains/com/"
                rel="alternate"
                className="flex flex-col w-auto text-secondary hover:no-underline"
              >
                <img
                  src="assets/icons/com.svg"
                  alt="com tld logo"
                  loading="lazy"
                  className="h-[32px] max-w-[100px] w-auto mx-auto"
                />
                <p className="m-0 mt-2 text-base font-medium text-center text-secondary">
                  $7.99
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start w-full laptop:w-2/5 desktop:pl-10">
          <h2 className="text-4xl laptop::text-5.5xl mt-12 laptop:mt-0 font-bold text-secondary mb-4 tablet:mb-0 laptop:leading-tight">
            Find Your Perfect Domain Name
          </h2>
        </div>
      </div>
    </section>
  );
};

export default DomainSearch;
