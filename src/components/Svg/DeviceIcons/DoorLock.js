import React from 'react';

const DoorLock = ({ height, width, fill }) => {
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
      <title>Artboard 30</title>
      <path d='M50,81A31,31,0,0,0,77.56,35.83a9.49,9.49,0,0,1-5.21,3A25,25,0,1,1,61.18,27.65a9.49,9.49,0,0,1,3-5.21A31,31,0,1,0,50,81Z'></path>
      <path d='M53,65V55.54a10,10,0,1,0-6,0V65ZM50,42a4,4,0,1,1-4,4A4,4,0,0,1,50,42Z'></path>
      <circle cx='70.5' cy='29.5' r='3.5'></circle>
    </svg>
  );
};

export default DoorLock;
