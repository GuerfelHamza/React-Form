import React from "react";

interface InputProps {
  type: string;
  maxLength?: number;
  minLength?: number;
  min?: number;
  max?: number;
}

export default function InputComponent(props: InputProps) {
  return (
    <div>
      <input
        type={props.type}
        // Pour texte : on applique minLength/maxLength
        {...(props.type === "text" && {
          minLength: props.minLength,
          maxLength: props.maxLength,
        })}
        // Pour nombre : on applique min/max
        {...(props.type === "number" && {
          min: props.min,
          max: props.max,
        })}
        required
      />
    </div>
  );
}
