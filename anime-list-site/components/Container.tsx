import React from 'react';

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="container">{children}</div>;
};
