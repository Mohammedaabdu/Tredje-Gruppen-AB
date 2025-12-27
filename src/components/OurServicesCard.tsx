import Icon from "./Icon";
import LinkButton from "./LinkButton";
import type { IService } from "../Services/OurServices";

const OurServicesCard = ({ icon, title, description, features }: IService) => {
  return (
    <article className="bg-white border border-slate-100/80 rounded-xl shadow-lg p-8 space-y-4 hover:shadow-2xl h-full flex flex-col justify-between min-w-0 max-w-full w-fit">
      <div className="bg-green-100/60 w-fit p-4 rounded-2xl h-fit text-green-700">
        <Icon iconName={icon} size="lg"></Icon>
      </div>
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
      <ul className="list-inside list-disc marker:text-green-600 space-y-2">
        {features.map((feature, idx) => (
          <li className="text-slate-500" key={idx}>
            {feature}
          </li>
        ))}
      </ul>
      <LinkButton
        to="/Contact"
        bgColor="white"
        textcolor="green-600"
        className="border border-green-600 self-center inline-block w-full text-center mt-6 hover:bg-green-100/50 hover:text-black!"
      >
        Get a Quote
      </LinkButton>
    </article>
  );
};

export default OurServicesCard;
