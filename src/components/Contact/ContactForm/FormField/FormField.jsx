import React, { useState } from "react";

function FormField({ name, type, placeholder, required }) {
  const [value, setValue] = useState("");

  return (
    <>
      <label style={{ textTransform: "capitalize" }} htmlFor={name}>
        {name}
      </label>

      {type === "textarea" ? (
        <textarea
          name={name}
          id={name}
          rows="8"
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </>
  );
}

export default FormField;
