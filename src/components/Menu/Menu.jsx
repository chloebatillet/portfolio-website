import { useLocation } from "react-router-dom";
import "./styles.scss";
import { useEffect, useState } from "react";

function Menu({ setMenuIsOpen }) {
  const nav = ["about", "projects", "experiences", "contacts"];
  const location = useLocation();

  //console.log(location.pathname.includes('projet'));

  const [screenWidth, setScreenWidth] = useState(0);

  // useEffect(() => {
  //   setScreenWidth(document.querySelector("#container").offsetHeight * 1);
  //   console.log("first use effect: " + screenWidth);
  // }, []);

  // console.log(screenWidth);
  // console.log(window.innerWidth * 4);
  // console.log(document.querySelector("#container"));

  // function reportWindowSize() {
  //   console.log("h: " + window.innerHeight, "w: " + window.innerWidth);
  //   setScreenWidth(document.querySelector("#container").offsetHeight);
  // }

  // window.onresize = reportWindowSize;

  return (
    // Voir pour ajouter balise nav
    <>
      {/* <div className="menu-container"> */}
      {/* Word ------------------------*/}
      {nav.map((e, index) => {
        return (
          <div
            // href={`#${e}`}
            key={e}
            className="word"
            onClick={() => {
              setMenuIsOpen(false);
              window.scrollTo({
                top: (screenWidth / 3) * index,
                behavior: "smooth",
              });
            }}
          >
            <span className="index">0{index}.</span>
            {/* Each letter of the word -----------------*/}
            {e.split("").map((l, index) => {
              return (
                <span key={e.concat(index)} className="letter">
                  {l}
                </span>
              );
            })}
          </div>
        );
      })}
      {/* </div> */}
    </>
  );
}

export default Menu;
