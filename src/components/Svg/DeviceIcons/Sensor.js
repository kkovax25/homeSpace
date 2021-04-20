import React from 'react';

const Sensor = ({ height, width, fill }) => {
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
      <title>Artboard 32</title>
      <path d='M50,59a13,13,0,0,1-9.94-4.63l-4.59,3.86a19,19,0,0,0,29,0l-4.59-3.86A13,13,0,0,1,50,59Z'></path>
      <path d='M68.35,42.79A18.26,18.26,0,0,0,69,38a19,19,0,0,0-38,0,18.26,18.26,0,0,0,.65,4.79l.6,2.21H67.75ZM63,39H37q0-.5,0-1a13,13,0,0,1,26,0Q63,38.5,63,39Z'></path>
      <path d='M27.83,64.67l-4.59,3.86a34.94,34.94,0,0,0,53.51,0l-4.59-3.86a28.95,28.95,0,0,1-44.34,0Z'></path>
    </svg>
  );
};

export default Sensor;
