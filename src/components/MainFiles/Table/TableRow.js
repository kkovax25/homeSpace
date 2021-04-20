import React from 'react';
import Doc from '../../Svg/FileTypes/Doc';
import Excel from '../../Svg/FileTypes/Excel';
import Ppt from '../../Svg/FileTypes/Ppt';
import File from '../../Svg/FileTypes/File';
const TableRow = ({ type }) => {
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
    <div className='table__row'>
      <div className='table__cell table__cell--body'>
        <div className='table__cell--icon'>{renderIcon(type)}</div>
        <p className='table__row--title'>My Document</p>
      </div>
      <div className='table__cell table__cell--body'>
        <p className='table__row--title'>3 hours ago</p>
      </div>
      <div className='table__cell table__cell--body'>
        <p className='table__row--title'>531 KB</p>
      </div>
      <div className='table__cell table__cell--body'>
        <p className='table__row--title'>Krisztián</p>
      </div>
    </div>
  );
};

export default TableRow;
