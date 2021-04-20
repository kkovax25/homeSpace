import React from 'react';
import DeviceItem from './DeviceItem';
import './Devices.scss';
const DeviceList = ({ devicesToRender }) => {
  return (
    <div className='deviceList'>
      <div className='deviceList__header'>
        <p className='deviceList__title'>Devices</p>
      </div>
      {!devicesToRender ? (
        <p className='deviceList__empty'>
          No devices detected in the room, add more in the settings.
        </p>
      ) : (
        <div className='deviceList__listContainer'>
          {/* {devicesToRender.map((device) => (
          <DeviceItem type={device.type} title={device.title} />
        ))} */}
          <DeviceItem type='Electricity' title='Garage electricity' />
          <DeviceItem type='Power' title='Garage main lamp' />
          <DeviceItem type='AddHome' title='Addhome' />
          <DeviceItem type='Camera' title='Camera' />
          <DeviceItem type='Cooling' title='Cooling' />
          <DeviceItem type='Devices' title='Devices' />
          <DeviceItem type='DoorLock' title='DoorLock' />
          <DeviceItem type='HomeShare' title='HomeShare' />
          <DeviceItem type='Key' title='Key' />
          <DeviceItem type='NightMode' title='NightMode' />
          <DeviceItem type='PowerCable' title='PowerCable' />
          <DeviceItem type='RouterIcon' title='RouterIcon' />
          <DeviceItem type='Sensor' title='Sensor' />
          <DeviceItem type='SmartHome' title='SmartHome' />
          <DeviceItem type='SmokeDetector' title='SmokeDetector' />
          <DeviceItem type='Socket' title='Socket' />
          <DeviceItem type='Surveillance' title='Surveillance' />
          <DeviceItem type='Thermostat' title='Thermostat' />
          <DeviceItem type='Ventilation' title='Ventilation' />
          <DeviceItem type='Wifi' title='Wifi' />
        </div>
      )}
    </div>
  );
};

export default DeviceList;
