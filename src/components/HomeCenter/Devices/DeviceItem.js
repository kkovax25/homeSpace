import React, { useState } from 'react';
import CustomSwitch from '../../layout/CustomSwitch';
import AC from '../../Svg/DeviceIcons/AC';
import AddHome from '../../Svg/DeviceIcons/AddHome';
import Camera from '../../Svg/DeviceIcons/Camera';
import Cooling from '../../Svg/DeviceIcons/Cooling';
import Devices from '../../Svg/DeviceIcons/Devices';
import DoorLock from '../../Svg/DeviceIcons/DoorLock';
import Electricity from '../../Svg/DeviceIcons/Electricity';
import HomeShare from '../../Svg/DeviceIcons/HomeShare';
import Key from '../../Svg/DeviceIcons/Key';
import NightMode from '../../Svg/DeviceIcons/NightMode';
import Power from '../../Svg/DeviceIcons/Power';
import PowerCable from '../../Svg/DeviceIcons/PowerCable';
import RouterIcon from '../../Svg/DeviceIcons/RouterIcon';
import Sensor from '../../Svg/DeviceIcons/Sensor';
import SmartHome from '../../Svg/DeviceIcons/SmartHome';
import SmokeDetector from '../../Svg/DeviceIcons/SmokeDetector';
import Socket from '../../Svg/DeviceIcons/Socket';
import Surveillance from '../../Svg/DeviceIcons/Surveillance';
import Thermostat from '../../Svg/DeviceIcons/Thermostat';
import Ventilation from '../../Svg/DeviceIcons/Ventilation';
import Wifi from '../../Svg/DeviceIcons/Wifi';

const DeviceItem = ({ type, title = 'Garden front door' }) => {
  const renderIcon = () => {
    switch (type.toLowerCase()) {
      case 'ac':
        return <AC fill={open === true ? '#f8f8ff' : '#a1abb1'} height={45} />;
      case 'addhome':
        return (
          <AddHome fill={open === true ? '#f8f8ff' : '#a1abb1'} height={45} />
        );
      case 'camera':
        return (
          <Camera
            fill={open === true ? '#f8f8ff' : '#a1abb1'}
            customClass={open && true}
            height={45}
          />
        );
      case 'cooling':
        return (
          <Cooling fill={open === true ? '#c2e0f9' : '#a1abb1'} height={45} />
        );
      case 'devices':
        return (
          <Devices fill={open === true ? '#f8f8ff' : '#a1abb1'} height={45} />
        );
      case 'doorlock':
        return (
          <DoorLock fill={open === true ? '#f8f8ff' : '#a1abb1'} height={45} />
        );
      case 'electricity':
        return (
          <Electricity
            fill={open === true ? '#fffd8d' : '#a1abb1'}
            height={45}
          />
        );
      case 'homeshare':
        return (
          <HomeShare fill={open === true ? '#f8f8ff' : '#a1abb1'} height={45} />
        );
      case 'key':
        return <Key fill={open === true ? '#f8f8ff' : '#a1abb1'} height={45} />;
      case 'nightmode':
        return (
          <NightMode fill={open === true ? '#f8f8ff' : '#a1abb1'} height={45} />
        );
      case 'power':
        return (
          <Power fill={open === true ? '#fffd8d' : '#a1abb1'} height={45} />
        );
      case 'powercable':
        return (
          <PowerCable
            fill={open === true ? '#f8f8ff' : '#a1abb1'}
            height={45}
          />
        );
      case 'routericon':
        return (
          <RouterIcon
            fill={open === true ? '#f8f8ff' : '#a1abb1'}
            height={45}
          />
        );
      case 'sensor':
        return (
          <Sensor fill={open === true ? '#f8f8ff' : '#a1abb1'} height={45} />
        );
      case 'smarthome':
        return (
          <SmartHome fill={open === true ? '#f8f8ff' : '#a1abb1'} height={45} />
        );
      case 'smokedetector':
        return (
          <SmokeDetector
            fill={open === true ? '#f8f8ff' : '#a1abb1'}
            height={45}
          />
        );
      case 'socket':
        return (
          <Socket fill={open === true ? '#f8f8ff' : '#a1abb1'} height={45} />
        );
      case 'surveillance':
        return (
          <Surveillance
            fill={open === true ? '#f8f8ff' : '#a1abb1'}
            height={45}
          />
        );
      case 'thermostat':
        return (
          <Thermostat
            fill={open === true ? '#f9423a' : '#a1abb1'}
            height={45}
          />
        );
      case 'ventilation':
        return (
          <Ventilation
            fill={open === true ? '#f8f8ff' : '#a1abb1'}
            height={45}
          />
        );
      case 'wifi':
        return (
          <Wifi fill={open === true ? '#f8f8ff' : '#a1abb1'} height={45} />
        );
      default:
        return (
          <SmartHome fill={open === true ? '#f8f8ff' : '#a1abb1'} height={45} />
        );
    }
  };

  const [open, setOpen] = useState(true);
  return (
    <div className='deviceItem'>
      <div className='deviceItem__inner'>
        <div className='deviceItem__header'>
          {renderIcon(type)}
          <div>
            <div
              className={`deviceItem__status ${
                open === false ? 'deviceItem__status--off' : ''
              }`}
            >
              {open === false ? 'Off' : 'On'}
            </div>
          </div>
        </div>
        <div
          className={`deviceItem__name ${
            open === false ? 'deviceItem__status--off' : ''
          }`}
        >
          {title}
        </div>
        <div className='deviceItem__switch'>
          <CustomSwitch value={open} onChange={() => setOpen(!open)} />
        </div>
      </div>
    </div>
  );
};

export default DeviceItem;
