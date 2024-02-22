import React, { useRef } from "react";
import FormField from "./FormField/FormField";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t4obump", "template_nufmvwq", form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
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

      <input type="submit" value={"Envoyer"}></input>
    </form>
  );
}

export default ContactForm;
