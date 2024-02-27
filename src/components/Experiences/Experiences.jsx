import { useRef, useState } from "react";

import { GoPlus } from "react-icons/go";

import data from "../../assets/data.json";

import "./styles.scss";


function Experiences() {
  const [paragrapheBubble, setParagraphBubble] = useState("");
  const container = useRef();

  const isMobileOrTablet =
    /Android|webOS|iPhone|iPad|iPod|Macintosh|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const positionBubble = () => {
    const bubble = document.querySelector(".--open");

    if (bubble) {
      isMobileOrTablet
        ? window.addEventListener("mousemove", (e) => {
            bubble.style.top = `calc(${e.clientY}px + 20px)`;
          })
        : window.addEventListener("mousemove", (e) => {
            bubble.style.top = `calc(${e.clientY}px - 150px)`;
            bubble.style.left = `calc(${e.clientX}px + 30px)`;
          });
    }
  };

  return (
    <ul
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
      {data.experiences.map((el) => {
        return (
          <li
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
          </li>
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
    </ul>
  );
}

export default Experiences;
