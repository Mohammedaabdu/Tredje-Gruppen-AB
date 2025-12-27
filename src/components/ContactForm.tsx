import { useState } from "react";
import { faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Icon from "./Icon";
import Button from "./Button";
import Input from "./Input";
import { motion } from "motion/react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    origin: "",
    destination: "",
    freight_type: "Road",
    details: "",
  });
  type FreightType = "Air" | "Ocean" | "Road" | "Rail";
  interface FormData {
    name: string;
    email: string;
    phone: string;
    origin: string;
    destination: string;
    freight_type: FreightType;
    details: string;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleselectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      freight_type: e.target.value as FreightType,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        origin: "",
        destination: "",
        freight_type: "Road",
        details: "",
      });
    } catch (error) {
      console.error("Error submitting quote:", error);
    } finally {
      setLoading(false);
    }
  };
  return success ? (
    <article className="border border-slate-100 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl w-full h-full flex flex-col">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">
        Request a Quote
      </h2>
      <p className="text-slate-600 mb-6">
        Tell us about your shipment and we'll get back to you within 24 hours.
      </p>
      <div className="space-y-6 text-center flex flex-col grow justify-center">
        <div className="w-fit h-fit p-4 bg-green-100 rounded-full mx-auto text-green-700">
          <Icon
            className="rounded-full "
            iconName={faCircleCheck}
            size="xl"
          ></Icon>
        </div>
        <h3>Request Received!</h3>
        <p className="text-slate-600 mb-6 max-w-lg">
          Thank you for contacting Vanguard Freight. One of our logistics
          experts will review your details and send you a custom quote shortly.
        </p>
        <Button
          bgColor="white"
          textcolor="black"
          onClick={() => setSuccess(false)}
          className="font-medium w-fit border border-slate-100 mx-auto"
        >
          Send Another Request
        </Button>
      </div>
    </article>
  ) : (
    <motion.article
      animate={{ y: 0 }}
      initial={{ y: 100 }}
      transition={{ duration: 0.5, type: "tween" }}
      className="border border-slate-100 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl w-full h-full"
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-8">
        Request a Quote
      </h2>
      <p className="text-slate-600 mb-6">
        Tell us about your shipment and we'll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="inline-block" htmlFor="name">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              required
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label className="inline-block" htmlFor="email">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="inline-block" htmlFor="phone">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="inline-block" htmlFor="origin">
              Origin City/Port
            </label>
            <div className="relative">
              <Input
                id="origin"
                name="origin"
                placeholder="Shanghai, China"
                icon={faLocationDot}
                value={formData.origin}
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="inline-block" htmlFor="destination">
              Destination City/Port
            </label>
            <div className="relative">
              <Input
                id="destination"
                name="destination"
                placeholder="Los Angeles, USA"
                icon={faLocationDot}
                value={formData.destination}
                required
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="inline-block" htmlFor="freight_type">
            Freight Type
          </label>
          <div className="relative">
            <select
              name="freight_type"
              className="w-full border border-slate-200 rounded-sm p-2 appearance-none pr-10"
              value={formData.freight_type}
              onChange={handleselectChange}
            >
              <option value="Air">Air Freight</option>
              <option value="Ocean">Ocean Freight</option>
              <option value="Road">Road Transport</option>
              <option value="Rail">Rail Freight</option>
            </select>

            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        <div className="space-y-2">
          <label className="inline-block" htmlFor="details">
            Cargo Details (Dimensions, Weight, etc.)
          </label>
          <textarea
            id="details"
            name="details"
            placeholder="Please describe your shipment..."
            className="min-h-25 block w-full border p-2 border-slate-200 rounded-sm"
            value={formData.details}
            onChange={handleChange}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg cursor-pointer"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Request"}{" "}
          <Icon iconName={faPaperPlane} className=" w-4 h-4 ml-2" />
        </Button>
      </form>
    </motion.article>
  );
};

export default ContactForm;
