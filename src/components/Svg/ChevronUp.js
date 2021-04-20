import React from 'react';

const ChevronUp = ({ height, width, color }) => {
  return (
    <svg
      height={`${height}px`}
      width={`${width}px`}
      fill={`${color}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      x='0px'
      y='0px'
    >
      <title>chevron-up</title>
      <path d='M16,15a1,1,0,0,1-.71-.29L12,11.41,8.71,14.71a1,1,0,0,1-1.41-1.41l4-4a1,1,0,0,1,1.41,0l4,4A1,1,0,0,1,16,15Z'></path>
    </svg>
  );
};

export default ChevronUp;
