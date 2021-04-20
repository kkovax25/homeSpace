import React from 'react';

const AddHome = ({ height, width, fill }) => {
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
      <title>Artboard 64</title>
      <path d='M78.32,43.33,51.16,22H48.84L33,34.44V23H27V39.15l-5.32,4.18A7,7,0,0,0,19,48.84V78h6V48.84a1,1,0,0,1,.38-.79L50,28.72,74.62,48.05a1,1,0,0,1,.38.79V78h6V48.84A7,7,0,0,0,78.32,43.33Z'></path>
      <polygon points='47 46 47 56 37 56 37 62 47 62 47 72 53 72 53 62 63 62 63 56 53 56 53 46 47 46'></polygon>
    </svg>
  );
};

export default AddHome;
