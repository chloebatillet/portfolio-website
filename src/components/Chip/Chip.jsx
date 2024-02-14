import React from "react";
import "./styles.scss";

export default function Chip({ text, icon }) {
  return (
    <span className="chip-tag">
      {/* {icon && <Icon icon={icon} />} */}
      {text}
    </span>
  );
}
