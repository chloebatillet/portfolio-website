import "./styles.scss";

function Menu({ setMenuIsOpen }) {
  const nav = ["about", "projects", "experiences", "contacts"];

  return (
    <nav className="menu-nav">
      {/* Word ------------------------*/}
      {nav.map((e, index) => {
        return (
          <a
            href={`#${e}`}
            key={e}
            className={`word ${e}`}
            onClick={() => {
              setMenuIsOpen(false);
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
          </a>
        );
      })}
    </nav>
  );
}

export default Menu;
