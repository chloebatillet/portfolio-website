import React from "react";

import Chip from "../Chip/Chip";

import "./styles.scss";
import data from "../../assets/data.json";

function Presentation() {
  return (
    <div className="presentation-wrapper">
      <article className="text">
        <h2>Qui suis-je ?</h2>
        <p>
          Il y a 1 an, j'ai choisi le développement web. J'y ai trouvé ce que je
          cherchais : un moyen de satisfaire ma curiosité, beaucoup de
          créativité et surtout des heures à me creuser la tête !
          <br />
          Aujourd'hui, je recherche à approfondir mes connaissances avant
          d’intégrer une entreprise qui sera prête à m’accompagner dans cette
          nouvelle carrière ☺
        </p>
      </article>
      <aside className="techno">
        <p>J'ai déjà travaillé avec ces technos :</p>
        <div className="tags">
          {data.about.techno.map((e) => {
            return <Chip text={e} />;
          })}
        </div>
        <br />
        <p>Et ces outils :</p>
        <div className="tags">
          {data.about.tools.map((e) => {
            return <Chip text={e} />;
          })}
        </div>
      </aside>
    </div>
  );
}

export default Presentation;
