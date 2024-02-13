// src/components/Table/TableHeader.tsx
import React from 'react';

interface TableHeaderProps {
  children: React.ReactNode;
}

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <thead>{children}</thead>;
};

// Set the displayName property
TableHeader.displayName = 'TableHeader';

export default TableHeader;
