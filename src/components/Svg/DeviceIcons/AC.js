import React from 'react';

const AC = ({ height, width, fill }) => {
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
      <title>Artboard 5</title>
      <path d='M31,56H69A11,11,0,0,0,80,45V31A11,11,0,0,0,69,20H31A11,11,0,0,0,20,31V45A11,11,0,0,0,31,56ZM26,31a5,5,0,0,1,5-5H69a5,5,0,0,1,5,5V45a5,5,0,0,1-5,5H31a5,5,0,0,1-5-5Z'></path>
      <path d='M39,69V63H33v6a5,5,0,0,1-5,5H25v6h3A11,11,0,0,0,39,69Z'></path>
      <rect x='47' y='63' width='6' height='17'></rect>
      <path d='M61,63v6A11,11,0,0,0,72,80h3V74H72a5,5,0,0,1-5-5V63Z'></path>
      <circle cx='36' cy='38' r='3'></circle>
      <circle cx='48' cy='38' r='3'></circle>
    </svg>
  );
};

export default AC;
