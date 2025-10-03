import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function ButtonSubmit({ text, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
    >
      {text}
    </button>
  );
}
