import { Link } from "react-scroll";

import "./styles.scss";

function Menu({ setMenuIsOpen }) {
  const nav = ["about", "projects", "experiences", "contacts"];
  return (
    // Voir pour ajouter balise nav
    <>
      {/* <div className="menu-container"> */}
      {/* Word ------------------------*/}
      {nav.map((e, index) => {
        return (
          <Link
            key={e}
            activeClass="is-active"
            className="word"
            to={e}
            spy={true}
            smooth={true}
            // offset={-100}
            duration={500}
            onClick={()=>{setMenuIsOpen(false)}}
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
          </Link>
        );
      })}
      {/* </div> */}
    </>
  );
}

export default Menu;
