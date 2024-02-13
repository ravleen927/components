// src/components/Dropdown/Dropdown.types.tsx
export interface DropdownProps {
    options: string[];
    onSelect: (selectedOption: string) => void;
    disabled?: boolean;
  }
  