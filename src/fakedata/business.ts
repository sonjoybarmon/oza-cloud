export interface BusinessProps {
  id?: number;
  title: string;
  description: string;
  image: string;
}

export const businessData: BusinessProps[] = [
  {
    id: 1,
    title: "Self-guided resources",
    description: "Read through guides and FAQs to get the info you need, fast.",
    image: "/assets/icons/icon_product.svg",
  },
  {
    id: 2,
    title: "Help center",
    description:
      "Quickly find the articles and documents you need to reach your goals.",
    image: "/assets/icons/book.svg",
  },
  {
    id: 1,
    title: "Connect with us",
    description:
      "Contact us by phone during business hours or email us anytime.",
    image: "/assets/icons/together.svg",
  },
  {
    id: 1,
    title: "Live chat",
    description: "Get answers in a snap, right from your dashboard during business hours.",
    image: "/assets/icons/icon_support.svg",
  },
];
