import ContactDetails from "./ContactDetails/ContactDetails";
import ContactForm from "./ContactForm/ContactForm";

import "./styles.scss";

function Contact() {
  return (
      <div className="contact-section-wrapper">
        <ContactDetails />
        <ContactForm />
      </div>
  );
}

export default Contact;
