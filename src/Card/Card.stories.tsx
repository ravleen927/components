// src/components/Card/Card.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p>This is a default card.</p>,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: <p>This card is disabled.</p>,
  disabled: true,
};
