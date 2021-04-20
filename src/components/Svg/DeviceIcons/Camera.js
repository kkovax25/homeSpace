import React from 'react';

const Camera = ({ height, width, fill, customClass }) => {
  return (
    <svg
      className={`customSvg ${customClass && 'camera'}`}
      height={`${height}px`}
      width={`${width}px`}
      fill={`${fill}`}
      xmlns='http://www.w3.org/2000/svg'
      data-name='Layer 1'
      viewBox='0 0 100 100'
      x='0px'
      y='0px'
    >
      <title>Artboard 81</title>
      <circle cx='38' cy='37' r='3'></circle>
      <path d='M70.66,27l0-.1A6,6,0,0,0,65,19H31A10,10,0,0,0,21,29V45A10,10,0,0,0,31,55h9v8.83A4.17,4.17,0,0,1,35.83,68H25V61H19V81h6V74H35.83A10.18,10.18,0,0,0,46,63.83V55H57a6,6,0,0,0,5.69-4.1l.63-1.9H81V27H70.66ZM31,49a4,4,0,0,1-4-4V29a4,4,0,0,1,4-4H65L57,49Zm44-6H65.32l3.33-10H75Z'></path>
    </svg>
  );
};

export default Camera;
