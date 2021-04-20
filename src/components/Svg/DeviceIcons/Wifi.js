import React from 'react';

const Wifi = ({ height, width, fill }) => {
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
      <title>Artboard 22</title>
      <path d='M21,28V72a7,7,0,0,0,7,7H72a7,7,0,0,0,7-7V66A45.05,45.05,0,0,0,34,21H28A7,7,0,0,0,21,28Zm7,45a1,1,0,0,1-1-1V59h3A11,11,0,0,1,41,70v3Zm19,0V70A17,17,0,0,0,30,53H27V43h5A25,25,0,0,1,57,68v5Zm26-7v6a1,1,0,0,1-1,1H63V68A31,31,0,0,0,32,37H27V28a1,1,0,0,1,1-1h6A39,39,0,0,1,73,66Z'></path>
    </svg>
  );
};

export default Wifi;
