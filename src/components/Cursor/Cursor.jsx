import "./styles.scss";

export default function Cursor() {

  window.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `calc(${e.clientY}px - 10px)`;
    cursor.style.left = `calc(${e.clientX}px - 10px)`;
  });

  return (
    <>
      <div className="cursor"></div>
    </>
  );
}
