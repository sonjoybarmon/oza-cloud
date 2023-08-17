export interface HostingPlanProps {
  id?: number;
  name: string;
  description: string;
  price: number;
}

export const hostingPlanData: HostingPlanProps[] = [
  {
    id: 1,
    name: "Web Hosting",
    description:
      "Our hosting plans include everything you need to start building your dream online.",
    price: 2.95,
  },
  {
    id: 2,
    name: "Wordpress Hosting",
    description: "Blazing-fast WordPress hosting with an isolated environment",
    price: 2.99,
  },
  {
    id: 3,
    name: "Cloud Servers",
    description:
      " Right Instance for every workload. Start in seconds and scale up to resilient.",
    price: 9.95,
  },
  {
    id: 4,
    name: "Email Hosting",
    description:
      "Tell the world you mean business. Get professional email on your domain.",
    price: 1.95,
  },
];
