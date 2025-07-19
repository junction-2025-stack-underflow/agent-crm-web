import { CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Loader;
