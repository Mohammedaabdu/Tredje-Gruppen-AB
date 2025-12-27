import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Icon from "./Icon";

interface ValuePointsProps {
  title: string;
  description: string;
  icon: IconDefinition;
  bgColor?: string;
}

const ValuePoints = ({
  title,
  description,
  icon,
  bgColor,
}: ValuePointsProps) => {
  return (
    <div className="flex gap-4">
      <div className={`${bgColor ?? ""} rounded-lg shadow-md p-3 h-fit`}>
        <Icon className="m-0! text-green-700" iconName={icon}></Icon>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
};

export default ValuePoints;
