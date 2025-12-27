import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

interface IInfo {
  icon: IconDefinition;
  title: string;
  contactInfo: string;
}

export const info: IInfo[] = [
  {
    icon: faLocation,
    title: "Headquarters",
    contactInfo:
      "123 Logistics Way, Harbor District,\n New York, NY 10001, USA",
  },
  {
    icon: faPhone,
    title: "Phone",
    contactInfo: "+1 (800) 123-4567\n Mon-Fri 8am-8pm EST",
  },
  {
    icon: faEnvelope,
    title: "Email",
    contactInfo: "logistics@tredjegruppen.se\n24/7 Support",
  },
];
