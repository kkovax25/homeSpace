import React from 'react';

const PowerCable = ({ height, width, fill }) => {
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
      <title>Artboard 33</title>
      <path d='M65,46V63a12,12,0,0,1-24,0V56.74A19,19,0,0,0,57,38V34a3,3,0,0,0-3-3H49V19H43V31H33V19H27V31H22a3,3,0,0,0-3,3v4A19,19,0,0,0,35,56.74V63a18,18,0,0,0,36,0V46a7,7,0,0,1,7-7h3V33H78A13,13,0,0,0,65,46ZM25,38V37H51v1a13,13,0,0,1-26,0Z'></path>
    </svg>
  );
};

export default PowerCable;
