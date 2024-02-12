import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { PiCoffee } from "react-icons/pi";

import "./styles.scss";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Contact() {
  const contactsContainer = useRef();
  const year = new Date().getFullYear();


  useGSAP(
    () => {

      gsap.to(".illustration-svg", {
        rotate: 360,
        scale: 1,
        scrollTrigger: {
          trigger: ".illustration-svg",
          start: "top 90%",
          end: "top 95%",
          scrub: 1,
          // markers: true,
        },
      });

      gsap.to(".hand", { rotate: -40, duration: 2, repeat: -1, yoyo: true });
    },
    { scope: contactsContainer }
  );

  return (
    <>
      <div className="contact-section-wrapper">
        <div className="contacts-details" ref={contactsContainer}>
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

          <div className="illustration">
            <svg
              className="illustration-svg"
              id="sw-js-blob-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#fe5920"
                d="M25.1,-22.1C30.8,-19.4,32.5,-9.7,31.5,-0.9C30.6,7.9,27.1,15.7,21.4,22.1C15.7,28.5,7.9,33.4,-0.2,33.6C-8.2,33.7,-16.3,29.1,-21.6,22.7C-26.9,16.3,-29.3,8.2,-28.8,0.5C-28.3,-7.2,-25,-14.4,-19.7,-17.2C-14.4,-19.9,-7.2,-18.2,1.2,-19.5C9.7,-20.7,19.4,-24.9,25.1,-22.1Z"
                width="100%"
                height="100%"
                transform="translate(50 50) scale(1.5)"
              ></path>
            </svg>
            <div className="hand"></div>
          </div>
        </div>

        <form action="get" className="contact-form">
          <h3>Ou communiquer par mail : </h3>
          {/* <label htmlFor="lastname">Nom</label>
      <input type="text" name="lastname" id="lastname" placeholder="MUSK" />

      <label htmlFor="name">Prénom</label>
      <input type="text" name="name" id="name" placeholder="Elon" /> */}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="elon.musk@laposte.net"
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="8"
            placeholder="Que voulez-vous me dire..."
          ></textarea>
          <input type="submit" value="Envoyer"></input>
        </form>
      </div>

      <footer className="footer" style={{ textAlign: "center" }}>
        Développé avec
        <GoHeart className="icon" />
        et
        <PiCoffee className="icon" />
        par Chloé Batillet © {year}
      </footer>
    </>
  );
}

export default Contact;
