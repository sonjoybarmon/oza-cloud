import React from "react";
import AccordionItem from "../../common/AccordionItem"; // Adjust the path as needed

const data = [
  {
    title: "Quick credit decisions",
    content: "Find out if you’re approved in just a few minutes.",
  },
  {
    title: "How does OzaCloud's Cloud Server differ from traditional hosting?",
    content:
      "OzaCloud's Cloud Server offers a more flexible and scalable solution...",
  },
  {
    title: "What are the benefits of using Office 365 emails for my business?",
    content:
      "Office 365 emails, provided by OzaCloud, offer numerous advantages...",
  },
  {
    title: "How secure is OzaCloud's hosting and cloud services?",
    content:
      "At OzaCloud, we take security seriously. Our hosting and cloud services...",
  },
  {
    title:
      "Can I migrate my existing website and emails to OzaCloud's services?",
    content:
      "Absolutely! OzaCloud offers seamless migration services to help you...",
  },
];

const FAQs = () => {
  return (
    <section>
      <div className="my-20 oza-container desktop:my-32">
        <h2 className="laptop:text-5.5xl text-4.5xl font-extrabold leading-tight mb-12">
          Online business checking FAQs
        </h2>

        {data.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
