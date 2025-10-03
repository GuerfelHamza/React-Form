import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}

export default function SelectComponent({ options, ...rest }: SelectProps) {
  return (
    <select {...rest} className="border rounded px-2 py-1 w-full">
      <option value="">--Choisir--</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
