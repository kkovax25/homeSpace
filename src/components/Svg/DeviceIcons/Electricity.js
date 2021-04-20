import React from 'react';

const Electricity = ({ height, width, fill }) => {
  return (
    <svg
      className='customSvg'
      height={`${height}px`}
      width={`${width}px`}
      fill={`${fill}`}
      xmlns='http://www.w3.org/2000/svg'
      data-name='Layer 1'
      viewBox='0 0 100 100'
      x='0px'
      y='0px'
    >
      <title>Artboard 42</title>
      <path d='M42.73,79.55a6,6,0,0,0,7.13-2L70.78,48.63A6,6,0,0,0,66,39H59l4.49-10.67A6,6,0,0,0,58,20H37a6,6,0,0,0-6,5.36l-3,28A6,6,0,0,0,34,60h7l-2,13.11A6,6,0,0,0,42.73,79.55ZM34,54l3-28H58L50,45H66L45,74l3-20Z'></path>
    </svg>
  );
};

export default Electricity;
