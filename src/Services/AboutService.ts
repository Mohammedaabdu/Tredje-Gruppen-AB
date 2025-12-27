import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBullseye, faAward } from "@fortawesome/free-solid-svg-icons";

interface ITeam {
  name: string;
  image: string;
  role: string;
}

interface IValueCard {
  icon: IconDefinition;
  title: string;
  description: string;
}

export const valueCardList: IValueCard[] = [
  {
    icon: faBullseye,
    title: "Precision",
    description: "99.8% on-time delivery rate across all our global routes.",
  },
  {
    icon: faHeart,
    title: "Care",
    description:
      "We treat every package as if it were our own, ensuring safe handling.",
  },
  {
    icon: faAward,
    title: "Excellence",
    description:
      'Recognized as "Logistics Provider of the Year" for 3 consecutive years.',
  },
];

export const teamList: ITeam[] = [
  {
    name: "Robert Chen",
    role: "CEO & Founder",
    image: "Robert.avif",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Operations",
    image: "Sarah.avif",
  },
  {
    name: "Michael Ross",
    role: "Global Logistics Director",
    image: "Mike.avif",
  },
  {
    name: "Emily Davis",
    role: "Customer Success Lead",
    image: "Emily.avif",
  },
];
