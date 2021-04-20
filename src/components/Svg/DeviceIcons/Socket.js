import React from 'react';

const Socket = ({ height, width, fill }) => {
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
      <title>Artboard 98</title>
      <rect x='37' y='41' width='6' height='8'></rect>
      <rect x='57' y='41' width='6' height='8'></rect>
      <path d='M65.91,23.43,65.2,23H34.8l-.71.43a30.94,30.94,0,0,0,0,53.14l.71.43H65.2l.71-.43a30.94,30.94,0,0,0,0-53.14ZM63.51,71h-27a24.94,24.94,0,0,1,0-42h27a24.94,24.94,0,0,1,0,42Z'></path>
      <path d='M50,54a6,6,0,0,0-6,6v4H56V60A6,6,0,0,0,50,54Z'></path>
    </svg>
  );
};

export default Socket;
