import React from 'react';

const Devices = ({ height, width, fill }) => {
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
      <title>Artboard 23</title>
      <path d='M31,81H43a11,11,0,0,0,2-.19A10.92,10.92,0,0,0,47,81H69A11,11,0,0,0,80,70V30A11,11,0,0,0,69,19H47A11,11,0,0,0,36,30v9H31A11,11,0,0,0,20,50V70A11,11,0,0,0,31,81ZM42,30a5,5,0,0,1,5-5H69a5,5,0,0,1,5,5V70a5,5,0,0,1-5,5H52.79A10.92,10.92,0,0,0,54,70V50A11,11,0,0,0,43,39H42ZM26,50a5,5,0,0,1,5-5H43a5,5,0,0,1,5,5V70a5,5,0,0,1-5,5H31a5,5,0,0,1-5-5Z'></path>
    </svg>
  );
};

export default Devices;
