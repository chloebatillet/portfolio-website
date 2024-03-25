import React, { useEffect } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import "./styles.scss";

function Avatar() {
  const container = document.querySelector(".contacts-details");

  useEffect(() => {
    const avatarContainer = document.querySelector(".avatar-container");
  }, [])
  

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
        },
      });

      gsap.to(".avatar-container", {
        y: -230,
        scrollTrigger: {
          trigger: ".illustration-svg",
          start: "center 85%",
          end: "center 85%",
          scrub: 1,
        },
      });

      let xPosition = 0; // pour fonctionnement sur mobile
      let yPosition;
      let storedXPosition;
      let storedYPosition;

      let boxHeight = window.innerHeight;
      let boxWidth = window.innerWidth;

      function updateWindowSize() {
        boxHeight = window.innerHeight;
        boxWidth = window.innerWidth;
      }
      window.addEventListener("resize", updateWindowSize);

      function updateMouseCoords(event, device) {
        if (device === "touchable") {
          xPosition = event.touches[0].clientX;
          yPosition = event.touches[0].clientY;
        } else {
          xPosition = event.clientX;
          yPosition = event.clientY;
        }
      }

      window.addEventListener("mousemove", (e) => {
        updateMouseCoords(e);
      });

      window.addEventListener("touchmove", (e) => {
        updateMouseCoords(e, "touchable");
      });

      function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
      }

      function movePointer() {
        if (storedXPosition === xPosition && storedYPosition === yPosition)
          return;

        if (yPosition >= 600) {
          yPosition = 600;
        }

        if (xPosition >= 1300) {
          xPosition = 1300;
        }

        let x = percentage(xPosition, boxWidth) - 50;
        let y = percentage(yPosition, boxHeight) - 50;

        window.requestAnimationFrame(movePointer);

        storedXPosition = x;
        storedYPosition = y;

        gsap.to(".girl-face", {
          x: `${x / 20}%`,
          y: `${y / 20}%`,
          duration: 0.2,
        });

        gsap.to(".girl-hair", {
          x: `-${x / 20}%`,
          y: `-${y / 20}%`,
          duration: 0.2,
        });
        gsap.to(".girl-bangs-right", {
          x: `-${x / 13}%`,
          y: `-${y / 13}%`,
          duration: 0.2,
        });
        gsap.to(".girl-bangs-left", {
          x: `-${x / 20}%`,
          y: `-${y / 20}%`,
          duration: 0.2,
        });

        gsap.to(".girl-head", {
          x: `-${x / 30}%`,
          y: `-${y / 30}%`,
          duration: 0.2,
        });
      }
      requestAnimationFrame(movePointer);
    },
    { scope: container, revertOnUpdate: true }
  );

  return (
    <div className="illustration">
      <svg
        className="illustration-svg"
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="myClipPath">
          <path
            d="M25.1,-22.1C30.8,-19.4,32.5,-9.7,31.5,-0.9C30.6,7.9,27.1,15.7,21.4,22.1C15.7,28.5,7.9,33.4,-0.2,33.6C-8.2,33.7,-16.3,29.1,-21.6,22.7C-26.9,16.3,-29.3,8.2,-28.8,0.5C-28.3,-7.2,-25,-14.4,-19.7,-17.2C-14.4,-19.9,-7.2,-18.2,1.2,-19.5C9.7,-20.7,19.4,-24.9,25.1,-22.1Z"
            width="100%"
            height="100%"
            transform="translate(150 150) scale(4.5)"
          ></path>
        </clipPath>
        <path
          id="path-shape"
          d="M25.1,-22.1C30.8,-19.4,32.5,-9.7,31.5,-0.9C30.6,7.9,27.1,15.7,21.4,22.1C15.7,28.5,7.9,33.4,-0.2,33.6C-8.2,33.7,-16.3,29.1,-21.6,22.7C-26.9,16.3,-29.3,8.2,-28.8,0.5C-28.3,-7.2,-25,-14.4,-19.7,-17.2C-14.4,-19.9,-7.2,-18.2,1.2,-19.5C9.7,-20.7,19.4,-24.9,25.1,-22.1Z"
          width="100%"
          height="100%"
          transform="translate(50 50) scale(1.5)"
        ></path>
      </svg>
      <div className="avatar-wrapper">
        <div className="avatar-box">
          <div className="avatar-container">
            <div className="girl-container">
              <div className="girl-body"></div>
              <div className="girl-arm">
                <div className="girl-hand"></div>
              </div>
              <div className="girl-head">
                <div className="girl-ear left"></div>
                <div className="girl-ear right"></div>
              </div>

              <div className="girl-neck"></div>
              <div className="girl-neck --shadow"></div>
              <div className="girl-hair"></div>
              <div className="girl-hair --shadow"></div>
              <div className="girl-bangs-right"></div>
              <div className="girl-bangs-left"></div>
              <div className="girl-face">
                <div className="blush left"></div>
                <div className="blush right"></div>
                <div className="eyebrow left"></div>
                <div className="eyebrow right"></div>
                <div className="eye-left"></div>
                <div className="eye-right"></div>
                <div className="nose"></div>
                <div className="mouth">
                  <div className="tongue"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
