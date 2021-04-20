import React from 'react';

const Thermostat = ({ height, width, fill }) => {
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
      <title>Artboard 10</title>
      <path d='M36,78A14,14,0,0,0,46,54.25V32a10,10,0,0,0-20,0V54.25A14,14,0,0,0,36,78ZM32,57.11V32a4,4,0,0,1,8,0V57.11a8,8,0,1,1-8,0Z'></path>
      <circle cx='61' cy='33' r='3'></circle>
      <circle cx='75' cy='33' r='3'></circle>
      <circle cx='61' cy='48' r='3'></circle>
      <circle cx='75' cy='48' r='3'></circle>
      <circle cx='61' cy='63' r='3'></circle>
      <circle cx='75' cy='63' r='3'></circle>
    </svg>
  );
};

export default Thermostat;
