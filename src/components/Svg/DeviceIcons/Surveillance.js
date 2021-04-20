import React from 'react';

const Surveillance = ({ height, width, fill }) => {
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
      <title>Artboard 2</title>
      <path d='M29,35.08a27,27,0,1,0,42,0V27h8V21H21v6h8ZM46,72.61V61a4,4,0,0,1,8,0V72.61a20.57,20.57,0,0,1-8,0Zm14-2.14V61a10,10,0,0,0-20,0v9.46A21,21,0,0,1,33.54,39H66.46A21,21,0,0,1,60,70.46ZM65,27v6H35V27Z'></path>
    </svg>
  );
};

export default Surveillance;
