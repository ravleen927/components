// src/components/Table/Table.tsx
import React from 'react';

interface TableProps {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return <table>{children}</table>;
};

Table.displayName = 'Table'; // Set the displayName property

export default Table;
