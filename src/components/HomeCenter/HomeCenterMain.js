import React from 'react';
import Selector from './Selector/Selector';
import DeviceList from './Devices/DeviceList';
const HomeCenterMain = () => {
  return (
    <div>
      <Selector />
      <DeviceList devicesToRender />
    </div>
  );
};

export default HomeCenterMain;
