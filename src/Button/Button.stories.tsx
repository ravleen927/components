// src/components/Button/Button.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Button',
  disabled: true,
};
