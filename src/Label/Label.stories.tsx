// src/components/Label/Label.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is a label',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Label',
  disabled: true,
};
