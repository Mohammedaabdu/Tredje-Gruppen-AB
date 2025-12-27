import {
  faAnchor,
  faPlane,
  faTruck,
  faWarehouse,
  faBoxOpen,
  faShield,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export interface IService {
  icon: IconDefinition;
  title: string;
  description: string;
  features: string[];
}

interface IProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: IProcessStep[] = [
  {
    number: "01",
    title: "Request Quote",
    description: "Submit your shipment details online or contact our team.",
  },
  {
    number: "02",
    title: "Book & Plan",
    description:
      "We secure capacity and plan the optimal route for your cargo.",
  },
  {
    number: "03",
    title: "Transport",
    description: "Your goods are moved efficiently with real-time tracking.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Safe and timely arrival at the final destination.",
  },
];

export const services: IService[] = [
  {
    icon: faAnchor,
    title: "Ocean Freight",
    description:
      "Our ocean freight services offer a cost-effective solution for large shipments. We handle FCL (Full Container Load), LCL (Less than Container Load), and special projects cargo with a global network of carriers.",
    features: [
      "Port-to-Port & Door-to-Door",
      "Customs Brokerage",
      "Cargo Insurance",
      "Real-time Tracking",
    ],
  },
  {
    icon: faPlane,
    title: "Air Freight",
    description:
      "When speed is critical, our air freight solutions ensure your goods arrive on time. We offer express, standard, and deferred air services to balance cost and urgency.",
    features: [
      "Next Flight Out",
      "Charter Services",
      "Consolidation",
      "Temperature Controlled",
    ],
  },
  {
    icon: faTruck,
    title: "Road Transportation",
    description:
      "Flexible and reliable ground transport across the continent. From urban delivery to cross-border trucking, we have the fleet to move your cargo efficiently.",
    features: [
      "FTL & LTL Services",
      "Express Van Delivery",
      "Heavy Haulage",
      "Cross-border Logistics",
    ],
  },
  {
    icon: faWarehouse,
    title: "Warehousing & Distribution",
    description:
      "Strategically located warehouses to optimize your supply chain. We offer storage, pick & pack, inventory management, and last-mile distribution services.",
    features: [
      "Short & Long-term Storage",
      "Order Fulfillment",
      "Inventory Management",
      "Value-added Services",
    ],
  },
  {
    icon: faBoxOpen,
    title: "Customs Clearance",
    description:
      "Navigating complex customs regulations can be challenging. Our experts ensure compliance and smooth clearance for your imports and exports globally.",
    features: [
      "Import/Export Declarations",
      "Duty & Tax Calculation",
      "Compliance Consulting",
      "Document Preparation",
    ],
  },
  {
    icon: faShield,
    title: "Project Cargo",
    description:
      "Specialized handling for oversized, heavy, or complex shipments. We engineer logistics solutions for industrial projects, construction, and energy sectors.",
    features: [
      "Route Surveys",
      "Heavy Lift Planning",
      "On-site Supervision",
      "Multimodal Transport",
    ],
  },
];
