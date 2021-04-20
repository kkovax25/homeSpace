import React from 'react';

const SmartHome = ({ height, width, fill }) => {
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
      <title>Artboard 20</title>
      <path d='M48,79v3H81V44.92a9,9,0,0,0-3.44-7.08L55.33,20.38a8.61,8.61,0,0,0-10.67,0L22.44,37.84A9,9,0,0,0,19,44.92V53h3A26,26,0,0,1,48,79ZM26.15,42.56,48.37,25.09a2.63,2.63,0,0,1,3.26,0L73.85,42.56A3,3,0,0,1,75,44.92V76H53.85A32,32,0,0,0,25,47.15V44.92A3,3,0,0,1,26.15,42.56Z'></path>
      <path d='M34,79v3h6V79A18,18,0,0,0,22,61H19v6h3A12,12,0,0,1,34,79Z'></path>
      <circle cx='22' cy='79' r='3'></circle>
    </svg>
  );
};

export default SmartHome;
