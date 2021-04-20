import React from 'react';

const Cooling = ({ height, width, fill }) => {
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
      <title>Artboard 45</title>
      <polygon points='69.24 47 76.12 40.12 71.88 35.88 60.76 47 53 47 53 39.24 64.12 28.12 59.88 23.88 53 30.76 53 18 47 18 47 30.76 40.12 23.88 35.88 28.12 47 39.24 47 47 39.24 47 28.12 35.88 23.88 40.12 30.76 47 18 47 18 53 30.76 53 23.88 59.88 28.12 64.12 39.24 53 47 53 47 60.76 35.88 71.88 40.12 76.12 47 69.24 47 82 53 82 53 69.24 59.88 76.12 64.12 71.88 53 60.76 53 53 60.76 53 71.88 64.12 76.12 59.88 69.24 53 82 53 82 47 69.24 47'></polygon>
    </svg>
  );
};

export default Cooling;
