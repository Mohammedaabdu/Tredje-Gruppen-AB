import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Icon from "./Icon";

interface ServiceCardProps {
  image: string;
  title: string;
  text: string;
  icon: IconDefinition;
}

const ServiceCard = ({ image, title, text, icon }: ServiceCardProps) => {
  return (
    <article
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden
    hover:shadow-xl hover:cursor-pointer hover:text-green-600"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-115"
        />
      </div>

      <div className="absolute left-6 top-41 bg-white p-3 rounded-lg shadow-md">
        <Icon className="m-0!" iconName={icon} color="#16a34a" size="2xl" />
      </div>

      <div className="pt-10 px-6 pb-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
