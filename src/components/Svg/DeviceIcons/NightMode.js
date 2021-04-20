import React from 'react';

const NightMode = ({ height, width, fill }) => {
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
      <title>Artboard 95</title>
      <path d='M42.92,57.63a13.44,13.44,0,0,1-6.88-2,6,6,0,0,0-8.62,7.38A26.72,26.72,0,1,0,62.06,28.42,6,6,0,0,0,54.68,37a13.45,13.45,0,0,1,2,6.88A13.72,13.72,0,0,1,42.92,57.63ZM62.63,43.92A19.49,19.49,0,0,0,59.85,34,20.72,20.72,0,1,1,33,60.85a19.49,19.49,0,0,0,9.92,2.78A19.73,19.73,0,0,0,62.63,43.92Z'></path>
      <path d='M21.3,44.3A3,3,0,0,0,24,46H43V40H30.24l12.1-15.13A3,3,0,0,0,40,20H21v6H33.76L21.66,41.13A3,3,0,0,0,21.3,44.3Z'></path>
    </svg>
  );
};

export default NightMode;
