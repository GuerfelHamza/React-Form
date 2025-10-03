import React, { useState } from "react";
import "./App.css";
import InputComponent from "./InputComponent";
import Label from "./Label";
import SelectComponent from "./SelectComponent";
import ButtonSubmit from "./ButtonSubmit";
import Modal from "./Modal";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    employee: false,
    salary: "",
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);

  const validateForm = () => {
    const newErrors: string[] = [];

    if (!formData.name.trim()) newErrors.push("Your name is required");
    if (!formData.phone.trim()) newErrors.push("The phone number is required");
    if (!formData.age.trim()) {
      newErrors.push("The age is required");
    } else {
      const ageNum = parseInt(formData.age, 10);
      if (ageNum < 18) newErrors.push("Your age must be at least 18");
      if (ageNum > 100) newErrors.push("Your age must be at most 100");
    }
    if (!formData.salary) newErrors.push("The salary is required");

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    setShowModal(true);
  };

  return (
    <div className="App min-h-screen flex items-center justify-center bg-gray-100">
      <section className="bg-white p-6 rounded-lg shadow-md w-96">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Label text="Requesting a loan" />
          <hr />

          <Label text="Name" />
          <InputComponent
            type="text"
            minLength={5}
            maxLength={10}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <Label text="Phone Number" />
          <InputComponent
            type="text"
            maxLength={10}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />

          <Label text="Age" />
          <InputComponent
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />

          <Label text="Are you an employee" />
          <InputComponent
            type="checkbox"
            checked={formData.employee}
            onChange={(e) =>
              setFormData({ ...formData, employee: e.target.checked })
            }
          />

          <Label text="Your salary" />
          <SelectComponent
            options={["1000$", "2000$", "3000$"]}
            value={formData.salary}
            onChange={(e) =>
              setFormData({ ...formData, salary: e.target.value })
            }
          />

          <ButtonSubmit type="submit" text="Submit" />
        </form>
      </section>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {errors.length > 0 ? (
            <ul className="text-red-600 list-disc list-inside">
              {errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          ) : (
            <p className="text-green-600 font-semibold">
              ✅ Your form has been successfully submitted !
            </p>
          )}
        </Modal>
      )}
    </div>
  );
}

export default App;
