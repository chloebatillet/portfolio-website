import { Link } from "react-router-dom";
import "./styles.scss";

function Projetcs() {
  const changeCursor = (condition) => {
    if (condition) {
      document.querySelector(".inner-cursor").classList.add("--plus");
    } else {
      document.querySelector(".inner-cursor").classList.remove("--plus");
    }
  };

  return (
    <div className="projects-container">
      <article
        className="project-box one"
        onMouseOver={() => {
          changeCursor(true);
        }}
        onMouseOut={() => {
          changeCursor(false);
        }}
        onMouseDown={() => {
          changeCursor(false);
        }}
      >
        <Link to="/projet/12" className="link">
          <h3 className="article-name" data-text="TokTok">
            TokTok
          </h3>
          <p className="type">Application web</p>
        </Link>
      </article>
      <article
        className="project-box two"
        onMouseOver={() => {
          changeCursor(true);
        }}
        onMouseOut={() => {
          changeCursor(false);
        }}
      >
        <Link to="/projet/12" className="link">
          <h3 className="article-name" data-text="FitnessBuddy">
            FitnessBuddy
          </h3>
          <p className="type">Application web</p>
        </Link>
      </article>
      <article
        className="project-box three"
        onMouseOver={() => {
          changeCursor(true);
        }}
        onMouseOut={() => {
          changeCursor(false);
        }}
      >
        <Link to="/projet/12" className="link">
          <h3 className="article-name" data-text="Portfolio">
            Portfolio
          </h3>
          <p className="type">Site web</p>
        </Link>
      </article>
      <article
        className="project-box three"
        onMouseOver={() => {
          changeCursor(true);
        }}
        onMouseOut={() => {
          changeCursor(false);
        }}
      >
        <Link to="/projet/12" className="link">
          <h3 className="article-name" data-text="BeGuide">
            BeGuide
          </h3>
          <p className="type">Extension web</p>
        </Link>
      </article>
    </div>
  );
}

export default Projetcs;
