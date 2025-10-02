export default function SelectComponent(props: { options: string[] }) {
  return (
    <select>
      {props.options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
}
