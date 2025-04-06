import { ContactInfo } from "./contact-info";
import { ContactForm } from "./contact-form";
{/* <div className="container mx-auto px-4 py-12 max-w-4xl"></div> */}
export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl font-bold text-center mb-12 text-green-700">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
