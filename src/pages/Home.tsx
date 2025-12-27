import ServiceCard from "../components/ServiceCard";
import Container from "../components/Container";
import LinkButton from "../components/LinkButton";
import {
  faPlane,
  faAnchor,
  faTruck,
  faArrowRight,
  faGlobe,
  faShield,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import ValuePoints from "../components/ValuePoints";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      {/* hero section*/}
      <Hero />

      {/* services section */}
      <section className="bg-white mt-70 mb-10 md:mt-50">
        <Container className="text-center">
          <p className="text-green-600 ">OUR EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl my-2">Logistics Solutions</h2>
          <p>
            Comprehensive shipping services tailored to meet your unique
            business requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ServiceCard
              image="/air.jpg"
              title="Air Freight"
              text="Expedited delivery for time-sensitive cargo."
              icon={faPlane}
            />
            <ServiceCard
              image="/ship.jpg"
              title="Ocean Freight"
              text="Cost-effective global shipping for large volumes."
              icon={faAnchor}
            />
            <ServiceCard
              image="/truck.jpg"
              title="Road Transport"
              text="Flexible overland distribution networks."
              icon={faTruck}
            />
          </div>

          <Link
            to="/services"
            className="mt-8 inline-block text-green-600 px-6 py-3 rounded-lg 
           hover:bg-green-100/60 
           transition duration-300"
          >
            View All Services <Icon iconName={faArrowRight} size="sm" />
          </Link>
        </Container>
      </section>

      {/* choose us section */}
      <section className="bg-gray-900 py-20 text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <article>
              <span className="text-green-600 block text-center font-semibold tracking-wider uppercase text-sm md:inline">
                Why choose TredjeGruppen
              </span>
              <h2 className="text-3xl md:text-4xl my-2 text-center md:text-start">
                Delivering Confidence Through Excellence
              </h2>
              <p className="max-w-2xl text-wrap text-slate-400 my-8 text-center md:text-start">
                We understand that your supply chain is the backbone of your
                business. That's why we go beyond just moving goods – we deliver
                peace of mind through technology, expertise, and unwavering
                commitment.
              </p>

              <div className="space-y-6">
                <ValuePoints
                  title="Global Network"
                  description="Strategic partnerships in over 150 countries ensuring seamless transit."
                  icon={faGlobe}
                  bgColor="bg-slate-800"
                ></ValuePoints>
                <ValuePoints
                  title="Secure Handling"
                  description="Advanced monitoring and strict protocols for high-value cargo."
                  icon={faShield}
                  bgColor="bg-slate-800"
                ></ValuePoints>
                <ValuePoints
                  title="On-Time Delivery"
                  description="Optimized routing algorithms to ensure your deadlines are met."
                  icon={faClock}
                  bgColor="bg-slate-800"
                ></ValuePoints>
              </div>
              <div className="my-12 sm:mt-12">
                <LinkButton to="/track" bgColor="white" textcolor="green-600">
                  Learn More About Us
                </LinkButton>
              </div>
            </article>
            <article>
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-green-600/25">
                <img
                  className="w-full h-auto object-cover"
                  src="dubai.avif"
                  alt="dubai pic"
                />
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* choose us section */}
      <section className="bg-green-600 py-20 text-white text-center">
        <Container>
          <article className="space-y-6">
            <h2 className="text-3xl md:text-4xl">
              Ready to Move Your Business Forward?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto ">
              Get a competitive quote today and experience the difference of
              working with a world-class logistics partner
            </p>
            <LinkButton bgColor="white" textcolor="green-600" to="/contact">
              Get your Quote
            </LinkButton>
          </article>
        </Container>
      </section>
    </>
  );
};

export default Home;
