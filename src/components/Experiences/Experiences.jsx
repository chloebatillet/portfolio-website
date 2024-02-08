import React, { useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { GoPlus } from "react-icons/go";

import "./styles.scss";

gsap.registerPlugin(useGSAP);

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
    dates: "oct 2023 - dec 2023",
    company: "BeGuide",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corrupti praesentium magni, fugiat quasi cum! Non, tempore reiciendis dignissimos molestiae praesentium quisquam.",
  },
  {
    title: "Master Management - Innovation",
    dates: "sept 2022",
    company: "IAE Clermont Auvergne",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corrupti praesentium magni, fugiat quasi cum! Non, tempore reiciendis dignissimos molestiae praesentium quisquam, dolorem ea nulla impedit, repellat optio libero ipsum.",
  },
  {
    title: "Chargée de communication digitale",
    dates: "avr 2020 - sept 2022",
    company: "Michelin",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corrupti praesentium magni.",
  },
  {
    title: "Stage en communication",
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

  useGSAP(
    () => {
      gsap.to(".line", {
        scrollTrigger: {
          trigger: ".line",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
          markers: true,
        },
        width: "100%",
        delay: 0.5,
        stagger: 0.2,
        ease: "sine.out",
        force3D: true,
        containerAnimation: ".exeriences-wrapper",
      });

      //   gsap.set(".--open", {
      //     //width: "100%",
      //     scale: 1,
      //     opacity: 1,
      //     //ease: "sine.out",
      //   });
    },
    { scope: container }
  );

  return (
    <div
      className="experiences-wrapper"
      ref={container}
      onMouseOver={() => {
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
            key={el.name}
            className="experiences line"
            data-name={el.title}
            onMouseEnter={() => {
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
      <aside className="experience-bubble">{paragrapheBubble}</aside>
    </div>
  );
}

export default Experiences;
