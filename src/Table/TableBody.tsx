// src/components/Table/TableBody.tsx
import React from 'react';

interface TableBodyProps {
  children: React.ReactNode;
}

const TableBody: React.FC<TableBodyProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

// Set the displayName property
TableBody.displayName = 'TableBody';

export default TableBody;
