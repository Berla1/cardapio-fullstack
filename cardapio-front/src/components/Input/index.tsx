import React from "react";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

const Input: React.FC<InputProps> = ({ label, value, updateValue }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(event.target.value);
  };

  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="rounded-[4px] outline-none border border-black"
      />
    </>
  );
};

export default Input;
