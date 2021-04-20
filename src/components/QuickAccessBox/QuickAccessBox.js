import React from 'react';
import Doc from '../Svg/FileTypes/Doc';
import Excel from '../Svg/FileTypes/Excel';
import Ppt from '../Svg/FileTypes/Ppt';
import File from '../Svg/FileTypes/File';
import './QuickAccessBox.scss';
const QuickAccessBox = ({ type, fileName, time, fileType, fileSize }) => {
  const renderIcon = () => {
    switch (type) {
      case 'word':
        return <Doc fill='2C5898' />;
      case 'excel':
        return <Excel fill='29B446' />;
      case 'ppt':
        return <Ppt fill='FBBB01' />;
      case 'other':
        return <File fill='663AB7' />;
      default:
        break;
    }
  };
  return (
    <div className='docBox'>
      <div className={`docBox__side docBox__side--front docBox--${type}`}>
        <div className='docBoxInnerFront'>
          <div className='docBox__pic'>{renderIcon(type)}</div>
          <div className='docBoxInnerFront__frontDesc'>
            <p className='docBox__cardDesc docBox__cardDesc--title'>
              Document name
            </p>
            <p className='docBox__cardDesc'>2 min ago</p>
          </div>
        </div>
      </div>
      <div className={`docBox__side docBox__side--back docBox--${type}`}>
        <div className='docBoxInnerFront'>
          <div className='docBox__pic'>{renderIcon(type)}</div>
          <div className='docBoxInnerFront__frontDesc'>
            <p className='docBox__cardDesc docBox__cardDesc--back'>
              Type: <span className='docBox__cardDesc--info'>docx</span>
            </p>
            <p className='docBox__cardDesc docBox__cardDesc--back'>
              Size: <span className='docBox__cardDesc--info'>10GB</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAccessBox;
