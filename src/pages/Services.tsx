import Container from "../components/Container";
import { services, processSteps } from "../Services/OurServices";
import OurServicesCard from "../components/OurServicesCard";
import ProcessStep from "../components/ProcessStep";
const Services = () => {
  return (
    <>
      {/* Our Services section */}
      <section className="bg-gray-900 text-center py-20 ">
        <Container className="space-y-4">
          <h1 className="text-4xl md:text-5xl text-white">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            End-to-end logistics solutions designed to optimize your supply
            chain and drive business growth.
          </p>
        </Container>
      </section>

      {/* Services */}
      <section className="-mt-10 pb-10">
        <Container className="space-y-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center place-items-stretch">
          {services.map((services, index) => (
            <OurServicesCard
              key={index}
              icon={services.icon}
              description={services.description}
              features={services.features}
              title={services.title}
            ></OurServicesCard>
          ))}
        </Container>
      </section>

      {/* How we Work */}

      <section className="py-20">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">How We Work</h2>
          <p className="text-slate-600 mt-4 mb-8">
            Simplified logistics in four easy steps
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-around">
            {processSteps.map((processStep, index) => (
              <ProcessStep
                key={index}
                number={processStep.number}
                title={processStep.title}
                description={processStep.description}
              ></ProcessStep>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
