import React from "react";

interface LabelProps {
  text: string;
}

export default function Label({ text }: LabelProps) {
  return <label className="font-medium">{text}</label>;
}
