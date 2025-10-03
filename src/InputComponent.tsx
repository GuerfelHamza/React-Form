import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function InputComponent(props: InputProps) {
  return <input {...props} className="border rounded px-2 py-1 w-full" />;
}
