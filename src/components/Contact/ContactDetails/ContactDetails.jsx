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
          <a href="https://github.com/chloebatillet">
            <FaGithub />
          </a>
          <a href="https://github.com/chloebatillet">
            <FaLinkedin />
          </a>
        </span>
      </div>

      <Avatar />
    </div>
  );
}

export default ContactDetails;
