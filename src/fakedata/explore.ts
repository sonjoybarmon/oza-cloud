export interface ExploreProps {
  id?: number;
  title: string;
  description: string;
  buttonText: string;
}

export const exploreData: ExploreProps[] = [
  {
    id: 1,
    title: `Cloud Servers`,
    description:
      "Getting the best out of your infrastructure shouldn’t be difficult. We’ll have you set up in no time, complete with mind-blowing performance and transparent pricing.",
    buttonText: "Explore Cloud Servers",
  },
  {
    id: 2,
    title: "Supported Migrations",
    description:
      "To the intricacies of manual backup procedures and convoluted cybersecurity setups. Acronis Cyber Protect simplifies the entire process.",
    buttonText: "Explore Acronis Cyber Protect",
  },
  {
    id: 3,
    title: "Acronis Cyber Backup",
    description:
      " Unsatisfied with your current hosting provider despite having other products? Make the switch to us and unlock a multitude of advantages.",
    buttonText: "Explore Enterprise Service",
  },
];
