import React from 'react';

const RouterIcon = ({ height, width, fill }) => {
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
      <title>Artboard 13</title>
      <circle cx='64' cy='62' r='3'></circle>
      <path d='M31,80H69A11,11,0,0,0,80,69V55A11,11,0,0,0,69,44V28H63V44H53V20H47V44H37V28H31V44A11,11,0,0,0,20,55V69A11,11,0,0,0,31,80ZM26,55a5,5,0,0,1,5-5H69a5,5,0,0,1,5,5V69a5,5,0,0,1-5,5H31a5,5,0,0,1-5-5Z'></path>
      <rect x='34' y='59' width='20' height='6'></rect>
    </svg>
  );
};

export default RouterIcon;
