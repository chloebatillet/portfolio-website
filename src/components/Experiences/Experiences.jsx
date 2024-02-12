import React, { useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { GoPlus } from "react-icons/go";

import "./styles.scss";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const xpList = [
  {
    title: "Diplôme DWWM",
    dates: "dec 2023",
    company: "O'Clock",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corrupti praesentium magni, fugiat quasi cum!",
  },
  {
    title: "Stage Développeur React",
    color: "#E56399",
    dates: "oct 2023 - dec 2023",
    company: "BeGuide",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corrupti praesentium magni, fugiat quasi cum! Non, tempore reiciendis dignissimos molestiae praesentium quisquam.",
  },
  {
    title: "Master Management - Innovation",
    color: "#7F96FF",
    dates: "sept 2022",
    company: "IAE Clermont Auvergne",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corrupti praesentium magni, fugiat quasi cum! Non, tempore reiciendis dignissimos molestiae praesentium quisquam, dolorem ea nulla impedit, repellat optio libero ipsum.",
  },
  {
    title: "Chargée de communication digitale",
    color: "#03B5AA",

    dates: "avr 2020 - sept 2022",
    company: "Michelin",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corrupti praesentium magni.",
  },
  {
    title: "Stage en communication",
    color: "#E56399",

    dates: "sept 2022",
    company: "La Charrette Créole",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corrupti praesentium magni, fugiat quasi cum! Non, tempore reiciendis dignissimos molestiae praesentium quisquam, dolorem ea nulla impedit, repellat optio libero ipsum.",
  },
];

function Experiences() {
  const [paragrapheBubble, setParagraphBubble] = useState("");
  const container = useRef();

  const positionBubble = () => {
    const bubble = document.querySelector(".--open");

    if (bubble) {
      window.addEventListener("mousemove", (e) => {
        bubble.style.top = `calc(${e.clientY}px - 50px)`;
        bubble.style.left = `calc(${e.clientX}px - 50px)`;
      });
    }
  };

  // useGSAP(
  //   () => {
  //     gsap.to(".line", {
  //       scrollTrigger: {
  //         trigger: ".line",
  //         start: "top 90%",
  //         end: "top 10%",
  //         scrub: 1,
  //         markers: true,
  //       },
  //       width: "100%",
  //       delay: 0.5,
  //       stagger: 0.2,
  //       ease: "sine.out",
  //       force3D: true,
  //       containerAnimation: ".pin-spacer",
  //       revertOnUpdate: true,
  //     });
  //   }
  // );

  return (
    <div
      className="experiences-wrapper"
      ref={container}
      onMouseEnter={() => {
        document.querySelector(".experience-bubble").classList.add("--open");
        positionBubble();
      }}
      onMouseLeave={() => {
        document.querySelector(".experience-bubble").classList.remove("--open");
      }}
    >
      {xpList.map((el) => {
        return (
          <div
            key={el.title}
            className="experiences line"
            data-name={el.title}
            onMouseOver={() => {
              setParagraphBubble(el.details);              
            }}
          >
            <span className="experience-details">
              <p className="experience-name">{el.title}</p>
              <p className="experience-company">{el.company}</p>
            </span>
            <GoPlus />
          </div>
        );
      })}

      {/* ---------------------------------------------------------------
Voir pour la mettre au même niveau que le header pour mettre un zindex plus élevé 
--------------------------------------------------------------- */}
      <aside className="experience-bubble">
        {paragrapheBubble}
        <svg
          className="bubble-bg-svg"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#181717"
            d="M40.8,-69.3C55.2,-62.3,70.8,-56.1,77.2,-44.7C83.7,-33.2,81.1,-16.6,79.5,-1C77.8,14.7,77.1,29.4,71.1,41.7C65.2,54.1,53.9,64.1,41.2,71.6C28.5,79.2,14.2,84.4,-0.6,85.5C-15.4,86.5,-30.9,83.3,-45.1,76.6C-59.3,69.9,-72.4,59.6,-78.9,46.3C-85.4,32.9,-85.3,16.5,-85.4,-0.1C-85.5,-16.6,-85.8,-33.1,-78.2,-44.5C-70.6,-55.9,-55,-62.2,-40.7,-69.2C-26.3,-76.2,-13.2,-83.9,0,-83.9C13.2,-83.9,26.4,-76.3,40.8,-69.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </aside>
    </div>
  );
}

export default Experiences;
