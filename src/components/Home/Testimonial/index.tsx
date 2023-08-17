"use client";
import { testimonialData } from "@/fakedata/testimonial";
import React from "react";
import Carousel from "react-multi-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

type Props = {
  // Define your props here (if any)
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testimonial: React.FC<Props> = (props) => {
  const ButtonGroup = ({ next, previous, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        <div className="flex items-center justify-end gap-6 mt-8 oza-container">
          <div
            className="flex items-center justify-center p-4 text-white rounded-full cursor-pointer bg-primary min-w-[40px] min-h-[40px] slick-arrow"
            id="prev-arrow"
            aria-disabled="false"
            onClick={() => previous()}
          >
            <AiOutlineLeft />
          </div>
          <div
            className="flex items-center justify-center p-4 text-white rounded-full cursor-pointer bg-primary min-w-[40px] min-h-[40px] slick-arrow"
            id="next-arrow"
            aria-disabled="false"
            onClick={() => next()}
          >
            <AiOutlineRight />
          </div>
        </div>
      </div>
    );
  };
  return (
    <section>
      <div className="my-20 desktop:my-32">
        <div className="oza-container">
          <h2 className="laptop:text-5.5xl text-4.5xl font-extrabold leading-tight mb-12">
            What our customers say
          </h2>
        </div>

        <div className="mx-5">
          <Carousel
            responsive={responsive}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
          >
            {testimonialData?.map((testimonial) => (
              <div className="w-full  px-3 rounded-br-75">
                <div className="bg-lightShade w-full py-10 mr-5  px-6">
                  <div className="flex flex-col items-start justify-start gap-4 mobile:items-center mobile:flex-row">
                    <div className="flex gap-1 pr-8 border-r">
                      <img
                        src="/assets/icons/star.svg"
                        className="w-4"
                        width="55"
                        height="55"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        className="w-4"
                        width="55"
                        height="55"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        className="w-4"
                        width="55"
                        height="55"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        className="w-4"
                        width="55"
                        height="55"
                      />
                      <img
                        src="/assets/icons/star.svg"
                        className="w-4"
                        width="55"
                        height="55"
                      />
                    </div>
                    <div className="flex items-center">
                      <img src="/assets/icons/Name.svg" alt="" />
                      <p className="ml-4 text-lg text-secondary">
                        reviewed by
                        <span className="font-semibold">
                          {testimonial?.author}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="pr-8">
                    <h3 className="mt-6 mb-2 text-2xl font-bold">
                      {testimonial?.title}
                    </h3>
                    <p className="text-sm">{testimonial?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* <div className="testimonial-slider testimonial-container">
          <div className="w-full py-10 mr-5 bg-lightShade laptop:w-1/3 px-7 rounded-br-75">
            <a href="#">
              <div>
                <div className="flex flex-col items-start justify-start gap-4 mobile:items-center mobile:flex-row">
                  <div className="flex gap-1 pr-8 border-r">
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                  </div>
                  <div className="flex items-center">
                    <img src=".//assets/icons/Name.svg" alt="" />
                    <p className="ml-4 text-lg text-secondary">
                      reviewed by
                      <span className="font-semibold">Stephen B.</span>
                    </p>
                  </div>
                </div>
                <div className="pr-8">
                  <h3 className="mt-6 mb-2 text-2xl font-bold">
                    Great Uk based hosting for a good…
                  </h3>
                  <p className="text-sm">
                    Great Uk based hosting for a good price. Very easy to use
                    also they have a one click installer system so it’s easy to
                    get Wordpress installed. Also I have my domain registered
                    previously with a different company but they make it easy to
                    link your hosting with domains registered elsewhere. Haven’t
                    needed to use their customer service yet so can’t review
                    that aspect. But 10/10 from me so far.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full py-10 mr-5 bg-lightShade laptop:w-1/3 px-7 rounded-br-75">
            <a href="#">
              <div>
                <div className="flex flex-col items-start justify-start gap-4 mobile:items-center mobile:flex-row">
                  <div className="flex gap-1 pr-8 border-r">
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                  </div>
                  <div className="flex items-center">
                    <img src=".//assets/icons/Name.svg" alt="" />
                    <p className="ml-4 text-lg text-secondary">
                      reviewed by
                      <span className="font-semibold">Stephen B.</span>
                    </p>
                  </div>
                </div>
                <div className="pr-8">
                  <h3 className="mt-6 mb-2 text-2xl font-bold">
                    Great Uk based hosting for a good…
                  </h3>
                  <p className="text-sm">
                    Great Uk based hosting for a good price. Very easy to use
                    also they have a one click installer system so it’s easy to
                    get Wordpress installed. Also I have my domain registered
                    previously with a different company but they make it easy to
                    link your hosting with domains registered elsewhere. Haven’t
                    needed to use their customer service yet so can’t review
                    that aspect. But 10/10 from me so far.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full py-10 mr-5 bg-lightShade laptop:w-1/3 px-7 rounded-br-75">
            <a href="#">
              <div>
                <div className="flex flex-col items-start justify-start gap-4 mobile:items-center mobile:flex-row">
                  <div className="flex gap-1 pr-8 border-r">
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                  </div>
                  <div className="flex items-center">
                    <img src=".//assets/icons/Name.svg" alt="" />
                    <p className="ml-4 text-lg text-secondary">
                      reviewed by
                      <span className="font-semibold">Stephen B.</span>
                    </p>
                  </div>
                </div>
                <div className="pr-8">
                  <h3 className="mt-6 mb-2 text-2xl font-bold">
                    Great Uk based hosting for a good…
                  </h3>
                  <p className="text-sm">
                    Great Uk based hosting for a good price. Very easy to use
                    also they have a one click installer system so it’s easy to
                    get Wordpress installed. Also I have my domain registered
                    previously with a different company but they make it easy to
                    link your hosting with domains registered elsewhere. Haven’t
                    needed to use their customer service yet so can’t review
                    that aspect. But 10/10 from me so far.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full py-10 mr-5 bg-lightShade laptop:w-1/3 px-7 rounded-br-75">
            <a href="#">
              <div>
                <div className="flex flex-col items-start justify-start gap-4 mobile:items-center mobile:flex-row">
                  <div className="flex gap-1 pr-8 border-r">
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                    <img
                      src="/assets/icons/star.svg"
                      className="w-4"
                      width="55"
                      height="55"
                    />
                  </div>
                  <div className="flex items-center">
                    <img src=".//assets/icons/Name.svg" alt="" />
                    <p className="ml-4 text-lg text-secondary">
                      reviewed by
                      <span className="font-semibold">Stephen B.</span>
                    </p>
                  </div>
                </div>
                <div className="pr-8">
                  <h3 className="mt-6 mb-2 text-2xl font-bold">
                    Great Uk based hosting for a good…
                  </h3>
                  <p className="text-sm">
                    Great Uk based hosting for a good price. Very easy to use
                    also they have a one click installer system so it’s easy to
                    get Wordpress installed. Also I have my domain registered
                    previously with a different company but they make it easy to
                    link your hosting with domains registered elsewhere. Haven’t
                    needed to use their customer service yet so can’t review
                    that aspect. But 10/10 from me so far.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div> */}
        {/* <div className="flex items-center justify-end gap-6 mt-8 oza-container">
          <div
            className="flex items-center justify-center p-4 text-white rounded-full cursor-pointer bg-primary min-w-50 min-h-52 slick-arrow"
            id="prev-arrow"
            aria-disabled="false"
          >
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <div
            className="flex items-center justify-center p-4 text-white rounded-full cursor-pointer bg-primary min-w-50 min-h-52 slick-arrow"
            id="next-arrow"
            aria-disabled="false"
          >
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonial;
