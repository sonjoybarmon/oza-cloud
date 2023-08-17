"use client";
import React, { useState } from "react";
type Props = {
  title: string;
  content: string;
};

const AccordionItem: React.FC<Props> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-6 border-b border-primaryShade">
      <h3
        className="flex justify-between text-xl font-bold faq-title desktop:text-2xl cursor-pointer"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <span className="">
          <img
            src="/assets/icons/plus-blue.svg"
            width="20"
            height="20"
            className={`transform ${isOpen ? "rotate-45" : ""}`}
          />
        </span>
      </h3>
      {isOpen && (
        <div className="text-sm leading-8 transition-all duration-300 faq-content desktop:text-xl font-domaine">
          <p className="py-6">{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
