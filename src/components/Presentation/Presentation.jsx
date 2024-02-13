import React from 'react'

import './styles.scss'

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
        <br />
        <p>
          Et j'aimerais maitriser celles-ci : react native, tree.js, flutter
        </p>
      </aside>
    </div>
  );
}

export default Presentation