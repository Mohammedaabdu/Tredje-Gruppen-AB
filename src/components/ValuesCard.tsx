import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Icon from "./Icon";

interface ValuesProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

const ValuesCard = ({ icon, title, description }: ValuesProps) => {
  return (
    <article className="flex flex-col items-center bg-slate-50 rounded-xl p-8 space-y-6 shadow-lg text-center h-full w-full max-w-md">
      <div className="bg-green-100/60 w-fit p-4 rounded-full h-fit text-green-700">
        <Icon iconName={icon} size="lg"></Icon>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-slate-600 whitespace-pre-line">{description}</p>
    </article>
  );
};

export default ValuesCard;
