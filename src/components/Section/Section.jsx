
function Section({ title, index, id, content }) {
  return (
    <section id={id} className="section-element --horizontal">
      {title && (
        <h2 className="section-title">
          <span className="index">{index}</span>.{title}
        </h2>
      )}
      {content}
    </section>
  );
}

export default Section;
