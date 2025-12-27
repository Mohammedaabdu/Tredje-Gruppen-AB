import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      {/* Contact & Quote */}
      <section className="bg-gray-900 text-center py-20 ">
        <Container className="space-y-4">
          <h1 className="text-4xl md:text-5xl text-white">Contact & Quote</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to move your cargo? Fill out the form below for a free quote
            or get in touch with our team.
          </p>
        </Container>
      </section>

      <section>
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto py-16">
          <ContactCard></ContactCard>
          <ContactForm></ContactForm>
        </Container>
      </section>
    </>
  );
};

export default Contact;
