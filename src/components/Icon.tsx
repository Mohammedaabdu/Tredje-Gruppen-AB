import type { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconProps {
  color?: string;
  iconName: any;
  size?: SizeProp | undefined;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}
const Icon = ({ color, iconName, size, className, onClick }: IconProps) => {
  return (
    <FontAwesomeIcon
      onClick={onClick}
      icon={iconName}
      size={size}
      style={{ color: color }}
      className={`self-center ${className}`}
    />
  );
};

export default Icon;
