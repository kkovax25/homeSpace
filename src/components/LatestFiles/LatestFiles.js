import React, { useState, useEffect } from 'react';
import QuickAccessBox from '../QuickAccessBox/QuickAccessBox';
import Chevron from '../Svg/Chevron';

import './LatestFiles.scss';
const LatestFiles = () => {
  const [showQA, setShowQA] = useState();
  const handleQA = () => {
    setShowQA(!showQA);
    localStorage.setItem('qaState', !showQA);
  };
  useEffect(() => {
    const data = localStorage.getItem('qaState');
    if (data) {
      setShowQA(JSON.parse(data));
    }
  }, []);

  return (
    <div
      className={
        showQA === true ? 'latestFiles' : 'latestFiles latestFiles--hidden'
      }
    >
      <div className='latestFiles__header'>
        <p className='latestFiles__title'>Latest files</p>
        <div
          className={`chevron chevron--${
            showQA === true ? 'up' : 'down'
          } cursor`}
          onClick={handleQA}
        >
          <Chevron height='34' width='34' color='#f8f8ff' />
        </div>
      </div>
      <div
        className={
          showQA === true ? 'quickAccess' : 'quickAccess quickAccess--hidden'
        }
      >
        {showQA === true ? (
          <>
            <QuickAccessBox type='word' />
            <QuickAccessBox type='excel' />
            <QuickAccessBox type='ppt' />
            <QuickAccessBox type='other' />
            <QuickAccessBox type='ppt' />
            <QuickAccessBox type='excel' />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default LatestFiles;
