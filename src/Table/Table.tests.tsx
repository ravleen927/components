// src/components/Table/Table.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

test('Table renders with correct children', () => {
  render(
    <Table>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
          <td>Row 1, Cell 3</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
          <td>Row 2, Cell 3</td>
        </tr>
      </tbody>
    </Table>
  );
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();
});

test('Table renders with reduced opacity when disabled', () => {
  render(
    <Table disabled>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
          <td>Row 1, Cell 3</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
          <td>Row 2, Cell 3</td>
        </tr>
      </tbody>
    </Table>
  );
  const tableElement = screen.getByRole('table');
  expect(tableElement).toHaveStyle('opacity: 0.5');
});
