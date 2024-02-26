import ContactDetails from "./ContactDetails/ContactDetails";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "../Footer/Footer";

import "./styles.scss";

function Contact() {

  return (
    <>
      <div className="contact-section-wrapper">
        <ContactDetails />
        <ContactForm />
      </div>

      <Footer />
    </>
  );
}

export default Contact;
