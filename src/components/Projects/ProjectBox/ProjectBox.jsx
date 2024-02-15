import React from 'react'
import { Link } from 'react-router-dom';

function ProjectBox({name, type, index}) {

      const changeCursor = (condition) => {
        if (condition) {
          document.querySelector(".inner-cursor").classList.add("--plus");
        } else {
          document.querySelector(".inner-cursor").classList.remove("--plus");
        }
      };

  return (
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
      <Link
        // to={`/projet/${name.toLowerCase()}`}
        to={`/projet`}
        state={{id: index}}
        className="link"
      >
        <h3 className="article-name" data-text={name}>
          {name}
        </h3>
        <p className="type">{type}</p>
      </Link>
    </article>
  );
}

export default ProjectBox