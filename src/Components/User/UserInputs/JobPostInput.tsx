import React, { ChangeEvent } from "react";

interface JobPostInputProps {
  inputfieldName: string;
  value: string | number;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  type?: string;
  required?: boolean;
}

const JobPostInput: React.FC<JobPostInputProps> = ({
  inputfieldName,
  value,
  handleInputChange,
  placeHolder,
  type,
  required = false,
}) => {
  return (
    <div>
      <label htmlFor={inputfieldName} className="block mb-2 font-medium">
        {inputfieldName} {required && "*"}
      </label>
      <input
        id={inputfieldName}
        name={inputfieldName}
        required={required}
        placeholder={placeHolder}
        value={value}
        onChange={handleInputChange}
        type={type}
        className="w-full px-3 py-2 border rounded-md"
      />
    </div>
  );
};

export default JobPostInput;
