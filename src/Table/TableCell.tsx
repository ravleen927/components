// src/components/Table/TableCell.tsx
import React from 'react';

interface TableCellProps {
  children: React.ReactNode;
}

const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return <td>{children}</td>;
};

// Set the displayName property
TableCell.displayName = 'TableCell';

export default TableCell;
