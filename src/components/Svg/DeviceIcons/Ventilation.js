import React from 'react';

const Ventilation = ({ height, width, fill }) => {
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
      <title>Artboard 4</title>
      <path d='M36,71a16.91,16.91,0,0,0,11-4.06V81h7A17,17,0,0,0,66.94,53H81V46A17,17,0,0,0,53,33.06V19H46A17,17,0,0,0,33.06,47H19v7A17,17,0,0,0,36,71Zm29-7A11,11,0,0,1,54,75H53V53h1A11,11,0,0,1,65,64ZM64,35A11,11,0,0,1,75,46v1H53V46A11,11,0,0,1,64,35ZM35,36A11,11,0,0,1,46,25h1V47H46A11,11,0,0,1,35,36ZM25,53H47v1a11,11,0,0,1-22,0Z'></path>
    </svg>
  );
};

export default Ventilation;
