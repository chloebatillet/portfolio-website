import React from "react";

import Chip from "../Chip/Chip";

import "./styles.scss";
import data from "../../assets/data.json";

function Presentation() {
  return (
    <div className="presentation-wrapper">
      <article className="text">
        <h2 className="section-title">Qui suis-je ?</h2>
        <p>
          {data.about.presentation}
        </p>
        <br />
      </article>
      <aside className="techno">
        <p>J'ai déjà travaillé avec ces technos :</p>
        <div className="tags">
          {data.about.techno.map((e) => {
            return <Chip key={e} text={e} />;
          })}
        </div>
        <br />
        <p>Et ces outils :</p>
        <div className="tags">
          {data.about.tools.map((e) => {
            return <Chip key={e} text={e} />;
          })}
        </div>
      </aside>
    </div>
  );
}

export default Presentation;
