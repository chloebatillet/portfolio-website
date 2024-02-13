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
      >
        <h3 className="article-name" data-text="TokTok">
          TokTok
        </h3>
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
        <h3 className="article-name" data-text="FitnessBuddy">
          FitnessBuddy
        </h3>
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
        <h3 className="article-name" data-text="Portfolio">
          Portfolio
        </h3>
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
        <h3 className="article-name" data-text="BeGuide">
          BeGuide
        </h3>
      </article>
    </div>
  );
}

export default Projetcs;
