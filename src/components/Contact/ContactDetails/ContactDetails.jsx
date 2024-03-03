import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from "../../Avatar/Avatar";

import "./styles.scss";

function ContactDetails() {
  return (
    <div className="contacts-details">
      <div>
        <h3>Envie de rester en contacts ?</h3>
        <p>On peut se rejoindre sur mes réseaux !</p>
        <span className="networks">
          <a
            href="https://github.com/chloebatillet"
            title="Visiter mon profil Github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/chlo%C3%A9-batillet-207390129/"
            title="Visiter mon profil Linkedin"
          >
            <FaLinkedin />
          </a>
        </span>
      </div>

      <Avatar />
    </div>
  );
}

export default ContactDetails;
