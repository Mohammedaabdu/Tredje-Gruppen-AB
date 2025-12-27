import Container from "./Container";
import Icon from "./Icon";
import Logo from "./Logo";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
const Footer = () => {
  return (
    <section className="bg-gray-900 md:p-8 text-slate-400">
      <Container>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
          <div className="p-8">
            <div className=" text-white mb-6">
              <Logo />
            </div>
            <p className=" text-wrap">
              Global logistics partner delivering excellence across air, sea,
              and land. We move the world's commerce with reliability and speed.
            </p>
          </div>

          <div className="p-8 grid grid-cols ">
            <h2 className="text-white font-bold mb-4 text-3xl md:text-4xl">
              Services
            </h2>
            <Link to="/contact">Air Freight</Link>
            <Link to="/contact">Road Transport</Link>
            <Link to="/contact">Warehousing</Link>
            <Link to="/about">About Us</Link>
          </div>
          <div className="p-8 grid grid-cols ">
            <h2 className="text-white font-bold mb-4 text-3xl md:text-4xl">
              Support
            </h2>
            <Link to="/contact">Track shipment</Link>
            <Link to="/contact">Request Quote</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/about">Terms & Conditions</Link>
          </div>
          <div className="p-8 ">
            <h2 className="text-white font-bold mb-4 text-3xl md:text-4xl">
              Contact Us
            </h2>
            <div className="flex">
              <Icon
                iconName={faLocationDot}
                color="#16a34a"
                size="xs"
                className="self-start mt-2 mr-2"
              />
              <p className="">
                123 Logistics Way, Harbor District, New York, NY 10001
              </p>
            </div>
            <div className="flex my-2">
              <Icon
                iconName={faPhone}
                color="#16a34a"
                size="xs"
                className="self-start mt-2 mr-2"
              />
              <p className="">+46 70 123 45 67</p>
            </div>

            <div className="flex">
              <Icon
                iconName={faEnvelope}
                color="#16a34a"
                size="xs"
                className="self-start mt-2 mr-2"
              />
              <p className="">logistics@tredjegruppen.se</p>
            </div>
          </div>
        </div>
        <div className=" border-solid border-gray-700 border-t"></div>
        <div className="flex flex-col py-8 space-y-4 text-center md:flex-row md:justify-between">
          <div>
            <p>© 2025 Vanguard Freight. All rights reserved.</p>
          </div>

          <div className="flex justify-around">
            <Link className="hover:text-white! mr-4" to="/about">
              Privacy policy
            </Link>
            <Link className="hover:text-white!" to="/about">
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
