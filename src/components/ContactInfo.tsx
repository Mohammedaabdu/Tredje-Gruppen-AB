import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Icon from "./Icon";

interface contactInfoProps {
  icon: IconDefinition;
  title: string;
  description: string;
}
const ContactInfo = ({ icon, title, description }: contactInfoProps) => {
  return (
    <article className="flex gap-4">
      <div className="bg-green-100/60 w-fit p-4 rounded-2xl h-fit text-green-700">
        <Icon iconName={icon} size="lg"></Icon>
      </div>
      <div>
        <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
        <p className="text-slate-600 whitespace-pre-line">{description}</p>
      </div>
    </article>
  );
};

export default ContactInfo;
