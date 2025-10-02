import React from "react";
import "./App.css";
import InputComponent from "./InputComponent";
import Label from "./Label";
import SelectComponent from "./SelectComponent";
import ButtonSubmit from "./ButtonSubmit";
import "./MyCss.css";

function App() {
  return (
    <div className="App">
      <form action="">
        <Label text="Requesting a loan" />
        <hr />
        <Label text="Name" />
        <InputComponent type="text" minLength={5} maxLength={10} />

        <Label text="Phone Number" />
        <InputComponent type="text" maxLength={10} />
        <Label text="Age" />
        <InputComponent type="number" min={2} max={3} />
        <Label text="Are you an employee" />
        <InputComponent type="checkbox" />
        <Label text="Your salary" />
        <SelectComponent options={["1000$", "2000$", "3000$"]} />
        <ButtonSubmit text="Submit" />
      </form>
    </div>
  );
}

export default App;
