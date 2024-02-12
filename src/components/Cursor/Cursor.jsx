import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./styles.scss";

export default function Cursor() {
  useGSAP(() => {
    window.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".inner-cursor");

      gsap.to(cursor, {
        x: `${e.clientX - 5}`,
        y: `${e.clientY - 5}`,
        duration: 0.2,
      });
    });
  });

  window.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `calc(${e.clientY}px - 22.5px)`;
    cursor.style.left = `calc(${e.clientX}px - 22.5px)`;

    // const innerCursor = document.querySelector(".inner-cursor");
    // innerCursor.style.top = `calc(${e.clientY}px - 10px)`;
    // innerCursor.style.left = `calc(${e.clientX}px - 10px)`;
  });

  window.addEventListener("pointerdown", (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.classList.add("--pointer-down");
  });
  window.addEventListener("pointerup", (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.classList.remove("--pointer-down");
  });

  return (
    <>
      <div className="cursor"></div>
      <div className="inner-cursor"></div>
    </>
  );
}
