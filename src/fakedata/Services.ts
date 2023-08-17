export interface ServicesProps {
  id?: number;
  title: string;
  description: string;
}

export const servicesData: ServicesProps[] = [
  {
    id: 1,
    title: "Strategy & Consulting",
    description:
      "Whether it be a first-time deployment, a new migration or perhaps service improvements, we're here to offer our expert advice.",
  },
  {
    id: 2,
    title: "Cloud Management",
    description:
      "Supplement your in-house skills and plug any gaps with our cost-effective management services.",
  },
  {
    id: 3,
    title: "DevOps",
    description:
      "Helping you design and implement the DevOps architecture and cultural change required to facilitate efficient software development.",
  },
  {
    id: 4,
    title: "Cloud Migration",
    description:
      "Remove the hassle of migrating cloud providers. Our team can manage the whole process for you.",
  },
];
