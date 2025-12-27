import Card from "./Card";
import Container from "./Container";
import LinkButton from "./LinkButton";
import StatsIem from "./StatsIem";

const Hero = () => {
  return (
    <section className="relative bg-[url('/hero.jpg')] bg-cover bg-center">
      <Container>
        <div className="text-center ms-auto md:text-left py-32">
          <h1 className="text-white text-5xl mb-6">
            Global Logistics
            <br />
            <span className="text-green-600 text-5xl ">Redefined.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
            Seamless supply chain solutions connecting your business to the
            world. We deliver reliability, speed, and efficiency across every
            mile.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row  md:justify-start">
            <LinkButton to="/quote">Get a free Quote</LinkButton>
            <LinkButton to="/track" bgColor="white" textcolor="green-600">
              Track Shipment
            </LinkButton>
          </div>
        </div>
        <section className="absolute bottom-0 translate-y-4/5 left-1/2 -translate-x-1/2 w-full px-6 md:w-2/3">
          <Card>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-green-600">
              <StatsIem title="150+" text="Countries Served" />
              <StatsIem title="2M+" text="Percels Delivered" />
              <StatsIem title="500+" text="Corporate Clients" />
              <StatsIem title="24/7" text="Support Available" />
            </div>
          </Card>
        </section>
      </Container>
    </section>
  );
};

export default Hero;
