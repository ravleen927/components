// src/components/Dropdown/Dropdown.tsx
import React from 'react';

interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, disabled }) => {
  const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onSelect(selectedValue);
  };

  return (
    <select onChange={handleSelectionChange} disabled={disabled}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
