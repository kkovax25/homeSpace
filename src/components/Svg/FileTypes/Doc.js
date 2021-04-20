import React from 'react';

const Doc = ({ height, width, fill }) => {
  return (
    <svg
      height={`${height}px`}
      width={`${width}px`}
      fill={`#${fill}`}
      xmlns='http://www.w3.org/2000/svg'
      data-name='Layer 1'
      viewBox='0 0 100 100'
      x='0px'
      y='0px'
    >
      <title>14</title>
      <g data-name='Group'>
        <path
          data-name='Compound Path'
          d='M59.73,7.1A4,4,0,0,0,57,6H25.65a12,12,0,0,0-12,12V82a12,12,0,0,0,12,12h48.7a12,12,0,0,0,12-12V34a4,4,0,0,0-1.25-2.9ZM61,19.3,72.32,30.05H61ZM74.35,86H25.65a4,4,0,0,1-4-4V18a4,4,0,0,1,4-4H53V31.05a7,7,0,0,0,7,7H78.35V82A4,4,0,0,1,74.35,86Z'
        ></path>
        <path
          data-name='Path'
          d='M68.77,71.15H31a4,4,0,0,0,0,8H68.77a4,4,0,0,0,0-8Z'
        ></path>
        <path
          data-name='Path'
          d='M68.77,58.18H31a4,4,0,0,0,0,8H68.77a4,4,0,0,0,0-8Z'
        ></path>
        <path
          data-name='Path'
          d='M68.77,43H31a4,4,0,0,0,0,8H68.77a4,4,0,0,0,0-8Z'
        ></path>
        <path
          data-name='Path'
          d='M31,37H45a4,4,0,1,0,0-8H31a4,4,0,0,0,0,8Z'
        ></path>
      </g>
    </svg>
  );
};

export default Doc;
