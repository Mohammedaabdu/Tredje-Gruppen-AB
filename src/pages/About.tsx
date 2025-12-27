import Container from "../components/Container";
import { motion, useInView } from "framer-motion";
import ValuePoints from "../components/ValuePoints";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { valueCardList, teamList } from "../Services/AboutService";
import ValuesCard from "../components/ValuesCard";
import TeamsCard from "../components/TeamsCard";
import { useRef } from "react";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-slate-50">
      {/*Hero section */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="globe.avif"
            alt="Hero img world map"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative px-4 z-10 text-center text-white"
        >
          <Container>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Moving the World Forward
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Since 1995, Vanguard Freight has been the silent engine behind
              global commerce, connecting businesses and communities through
              reliable logistics solutions.
            </p>
          </Container>
        </motion.div>
      </section>

      {/*Mission section */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <article>
              <span className="text-green-600 block text-center font-semibold tracking-wider uppercase text-sm md:inline">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl my-2 text-center md:text-start">
                Reliability in Every Shipment
              </h2>
              <p className="max-w-2xl text-wrap text-slate-600 my-8 text-center md:text-start">
                Our mission is to provide seamless, efficient, and transparent
                logistics solutions that empower businesses to grow without
                borders. We believe that distance should never be a barrier to
                opportunity.
              </p>

              <div className="space-y-6">
                <ValuePoints
                  title="Customer First"
                  description="We prioritize your needs and deadlines above all else."
                  icon={faCheckCircle}
                ></ValuePoints>
                <ValuePoints
                  title="Integrity"
                  description="Transparent pricing and honest communication at every step."
                  icon={faCheckCircle}
                ></ValuePoints>
                <ValuePoints
                  title="Innovation"
                  description="Leveraging technology to optimize routes and reduce carbon footprint."
                  icon={faCheckCircle}
                ></ValuePoints>
              </div>
            </article>
            <article className="grid grid-cols-2 gap-4">
              <img
                src="Meeting.jpg"
                alt="Team Meeting"
                className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
              />
              <img
                src="lab.avif"
                alt="Warehouse Operations"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </article>
          </div>
        </Container>
      </section>

      {/*Cards section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
            {valueCardList.map((card, index) => (
              <ValuesCard
                key={index}
                description={card.description}
                icon={card.icon}
                title={card.title}
              ></ValuesCard>
            ))}
          </div>
        </Container>
      </section>

      {/*Cards section */}
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, type: "tween" }}
        className="py-20 max-w-7xl mx-auto"
        ref={ref}
      >
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Meet Our Leadership
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Decades of combined experience in global supply chain management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
            {teamList.map((person, index) => (
              <TeamsCard
                key={index}
                image={person.image}
                role={person.role}
                name={person.name}
              ></TeamsCard>
            ))}
          </div>
        </Container>
      </motion.section>
    </div>
  );
};

export default About;
