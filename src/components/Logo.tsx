import { faTruck } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
const Logo = () => {
  return (
    <div className="flex text-nowrap">
      <div className="md:hidden self-center">
        <Icon className="mr-2" iconName={faTruck} color="#16a34a" size="xl" />
      </div>

      <div className="hidden md:block">
        <Icon className="mr-2" iconName={faTruck} color="#16a34a" size="2xl" />
      </div>

      <h2 className="self-center text-xl md:text-4xl">
        Tredje<span className="text-green-600">Gruppen AB</span>
      </h2>
    </div>
  );
};

export default Logo;
