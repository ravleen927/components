// src/components/RadioButton/RadioButton.types.tsx
export interface RadioButtonProps {
    options: string[];
    selectedOption: string;
    onChange: (selectedOption: string) => void;
    disabled?: boolean;
  }
  