import React from 'react';

const SmokeDetector = ({ height, width, fill }) => {
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
      <title>Artboard 6</title>
      <path d='M27,37a9,9,0,0,0,9,9H64a9,9,0,0,0,9-9V26h8V20H19v6h8ZM67,26V37a3,3,0,0,1-3,3H36a3,3,0,0,1-3-3V26Z'></path>
      <path d='M27,77c0-3.95,1.48-5.79,3.34-8.13C32.42,66.28,35,63.05,35,57V54H29v3c0,3.95-1.48,5.79-3.34,8.13C23.58,67.72,21,70.95,21,77v3h6Z'></path>
      <path d='M48.34,68.87C50.42,66.28,53,63.05,53,57V54H47v3c0,3.95-1.48,5.79-3.34,8.13C41.58,67.72,39,70.95,39,77v3h6V77C45,73.05,46.48,71.21,48.34,68.87Z'></path>
      <path d='M66.34,68.87C68.42,66.28,71,63.05,71,57V54H65v3c0,3.95-1.48,5.79-3.34,8.13C59.58,67.72,57,70.95,57,77v3h6V77C63,73.05,64.48,71.21,66.34,68.87Z'></path>
    </svg>
  );
};

export default SmokeDetector;
