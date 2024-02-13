// src/components/Table/Table.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Table, TableHeader, TableBody, TableRow, TableCell } from './Table';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const Template: Story = (args) => (
  <Table {...args}>
    <TableHeader>
      <TableRow>
        <TableCell>Header 1</TableCell>
        <TableCell>Header 2</TableCell>
        <TableCell>Header 3</TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Row 1, Cell 1</TableCell>
        <TableCell>Row 1, Cell 2</TableCell>
        <TableCell>Row 1, Cell 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row 2, Cell 1</TableCell>
        <TableCell>Row 2, Cell 2</TableCell>
        <TableCell>Row 2, Cell 3</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const Default = Template.bind({});
