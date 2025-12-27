import ContactInfo from "./ContactInfo";
import { info } from "../Services/InfoService";
import Button from "./Button";
const ContactCard = () => {
  return (
    <article className="border border-slate-100 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl flex flex-col justify-between w-full h-full">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Get In Touch</h2>
        <div className="space-y-8">
          {info.map((info, index) => (
            <ContactInfo
              key={index}
              description={info.contactInfo}
              icon={info.icon}
              title={info.title}
            ></ContactInfo>
          ))}
        </div>
      </div>
      <article className="border bg-slate-50 border-slate-100 rounded-xl shadow-lg p-6 mt-8">
        <h3 className="font-semibold text-slate-900">
          Need immediate assistance?
        </h3>
        <p className="text-slate-600 text-sm mb-4 ">
          Our dedicated support team is available 24/7 to help with urgent
          shipments.
        </p>
        <Button
          bgColor="white"
          textcolor="black"
          className="font-medium w-full border border-slate-100"
        >
          Call Support Now
        </Button>
      </article>
    </article>
  );
};

export default ContactCard;
