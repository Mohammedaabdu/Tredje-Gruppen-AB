import Container from "./Container";
import Icon from "./Icon";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
const TopBar = () => {
  return (
    <div className="bg-slate-900 text-slate-400 text-sm md:text-md">
      <Container>
        <div className="flex justify-evenly md:justify-between">
          <div className="text-xs items-center space-x-8 md:text-lg">
            <span>
              <Icon
                className="mr-2"
                iconName={faPhone}
                color="#AFC3C6"
                size="xs"
              />
              +46 70 123 45 67
            </span>

            <span>
              <Icon
                className="mr-2"
                iconName={faEnvelope}
                color="#AFC3C6"
                size="xs"
              />
              logistics@tredjegruppen.se
            </span>
          </div>
          <div className="hidden my-auto md:inline-block">
            <Icon
              iconName={faLinkedinIn}
              color="#AFC3C6"
              className="cursor-pointer"
            />
            <Icon
              iconName={faTwitter}
              color="#AFC3C6"
              className="cursor-pointer"
            />
            <Icon
              iconName={faFacebookF}
              color="#AFC3C6"
              className="cursor-pointer"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
