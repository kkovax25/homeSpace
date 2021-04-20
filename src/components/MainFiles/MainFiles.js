import React from 'react';
import './MainFiles.scss';
import TabbleHead from './Table/TabbleHead';
import TableRow from './Table/TableRow';
const tableHead = [
  {
    name: 'Name',
    id: 1,
  },
  {
    name: 'Last modified',
    id: 2,
  },
  {
    name: 'Size',
    id: 3,
  },
  {
    name: 'Uploader',
    id: 4,
  },
];
const MainFiles = () => {
  return (
    <div>
      <div className='table'>
        <TabbleHead list={tableHead} />
        <TableRow type='excel' />
        <TableRow type='word' />
        <TableRow type='ppt' />
        <TableRow type='other' />
      </div>
    </div>
  );
};

export default MainFiles;
