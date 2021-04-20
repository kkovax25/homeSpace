import React from 'react';

const Power = ({ height, width, fill }) => {
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
      <title>Artboard 55</title>
      <path d='M50,80A10,10,0,0,0,60,70V66H74V60A24,24,0,0,0,53,36.19V26H71V20H29v6H47V36.19A24,24,0,0,0,26,60v6H40v4A10,10,0,0,0,50,80Zm4-10a4,4,0,0,1-8,0V66h8ZM50,42A18,18,0,0,1,68,60H32A18,18,0,0,1,50,42Z'></path>
    </svg>
  );
};

export default Power;
