// src/components/RadioButton/RadioButton.tsx
import React from 'react';

interface RadioButtonProps {
  options: string[];
  selectedOption: string;
  onChange: (selectedOption: string) => void;
  disabled?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ options, selectedOption, onChange, disabled }) => {
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            value={option}
            checked={option === selectedOption}
            onChange={handleOptionChange}
            disabled={disabled}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
