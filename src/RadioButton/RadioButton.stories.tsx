// src/components/RadioButton/RadioButton.stories.tsx
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta;

const Template: Story<RadioButtonProps> = (args) => {
  const [selectedOption, setSelectedOption] = useState(args.selectedOption);

  const handleOptionChange = (selectedOption: string) => {
    setSelectedOption(selectedOption);
  };

  return <RadioButton {...args} selectedOption={selectedOption} onChange={handleOptionChange} />;
};

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  selectedOption: 'Option 1',
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  selectedOption: 'Option 1',
  disabled: true,
};
