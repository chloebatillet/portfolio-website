import React, { useRef, useState } from "react";
import FormField from "./FormField/FormField";
import emailjs from "@emailjs/browser";

import { LuSendHorizonal } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";

function ContactForm() {
  const form = useRef();
  const submitBtn = useRef();
  const [btnValue, setBtnValue] = useState("Envoyer");
  const [btnIsActive, setBtnIsActive] = useState(false);
  const [icon, setIcon] = useState(<LuSendHorizonal />);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t4obump", "template_nufmvwq", form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          submitBtn.current.style.width = "200px";
          submitBtn.current.setAttribute("disabled", true);
          setBtnIsActive(false);
          setBtnValue("C'est dans ma boîte !");
          setIcon(<FaCheck />);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form className="contact-form" onSubmit={sendEmail} ref={form}>
      <h3>Ou communiquer par mail</h3>

      <FormField
        name={"email"}
        type={"email"}
        placeholder={"elon.musk@laposte.net"}
        required
      />
      <FormField
        name={"message"}
        type={"textarea"}
        placeholder={"Que voulez-vous me dire..."}
        required
      />

      <button
        type="submit"
        value={btnValue}
        className={btnIsActive ? "is-active" : ""}
        ref={submitBtn}
        onClick={() => {
          setBtnIsActive(true);
        }}
      >
        <span className="btn-icon">{icon}</span>
        <span className="value">{btnValue}</span>
      </button>
    </form>
  );
}

export default ContactForm;
