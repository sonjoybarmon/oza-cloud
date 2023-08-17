import React from "react";
import AccordionItem from "./AccordionItem"; // Adjust the path as needed

const FAQs = () => {
  return (
    <section>
      <div className="my-20 oza-container desktop:my-32">
        <h2 className="laptop:text-5.5xl text-4.5xl font-extrabold leading-tight mb-12">
          Frequently asked questions
        </h2>

        <AccordionItem
          title="What is web hosting and why do I need it?"
          content="Web hosting is a service that allows individuals and businesses to..."
        />

        <AccordionItem
          title="How does OzaCloud's Cloud Server differ from traditional hosting?"
          content="OzaCloud's Cloud Server offers a more flexible and scalable solution..."
        />

        <AccordionItem
          title="What are the benefits of using Office 365 emails for my business?"
          content="Office 365 emails, provided by OzaCloud, offer numerous advantages..."
        />

        <AccordionItem
          title="How secure is OzaCloud's hosting and cloud services?"
          content="At OzaCloud, we take security seriously. Our hosting and cloud services..."
        />

        <AccordionItem
          title="Can I migrate my existing website and emails to OzaCloud's services?"
          content="Absolutely! OzaCloud offers seamless migration services to help you..."
        />
      </div>
    </section>
  );
};

export default FAQs;
