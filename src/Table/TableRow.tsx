// src/components/Table/TableRow.tsx
import React from 'react';

interface TableRowProps {
  children: React.ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <tr>{children}</tr>;
};

// Set the displayName property
TableRow.displayName = 'TableRow';

export default TableRow;
