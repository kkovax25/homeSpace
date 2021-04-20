import React from 'react';

const HomeShare = ({ height, width, fill }) => {
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
      <title>Artboard 73</title>
      <path d='M65,60.39l-15-10-15,10V81H65ZM59,75H53V68H47v7H41V63.61l9-6,9,6Z'></path>
      <path d='M67.64,31.09a18.92,18.92,0,0,0-35.28,0A15,15,0,0,0,26.57,59l6.17-4.11A9,9,0,0,1,34,37h2.89l.58-2.25a12.93,12.93,0,0,1,25.06,0L63.11,37H66a9,9,0,0,1,1.26,17.9L73.43,59a15,15,0,0,0-5.79-27.93Z'></path>
    </svg>
  );
};

export default HomeShare;
