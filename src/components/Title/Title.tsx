import React from 'react';

const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <h2
      style={{
        fontSize: '20px',
        fontWeight: 500,
        fontFamily: 'ProductSansM',
      }}
    >
      {children}
    </h2>
  );
};

export default Title;
