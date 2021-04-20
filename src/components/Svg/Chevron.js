import React from 'react';

const Chevron = ({ height, width, color }) => {
  return (
    <svg
      height={`${height}px`}
      width={`${width}px`}
      fill={`${color}`}
      viewBox='0 0 24 24'
      x='0px'
      y='0px'
    >
      <title>chevron-down</title>
      <path d='M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,12,15Z'></path>
    </svg>
  );
};

export default Chevron;
