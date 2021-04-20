import React, { useState } from 'react';
import RoomSelector from './RoomSelector';
import './Selectors.scss';
const floors = [
  {
    name: 'Floor 1',
    selectedValue: 'floor1',
    id: 1,
  },
  {
    name: 'Floor 2',
    selectedValue: 'floor2',
    id: 2,
  },
  {
    name: 'Floor 3',
    selectedValue: 'floor3',
    id: 3,
  },
];
const FloorSelector = () => {
  const [selected, setSelected] = useState('floor1');
  return (
    <div className='selectors'>
      <div className='floorSelector'>
        <div className='floorSelector__header'>
          <p className='floorSelector__title'>Floors</p>
        </div>
        <div className='floors'>
          {floors.map((floor) => (
            <div
              className={`floor cursor ${
                selected === floor.selectedValue && 'floor--active'
              }`}
              key={floor.id}
              onClick={() => setSelected(floor.selectedValue)}
            >
              <p className='floor--title'>{floor.name}</p>
            </div>
          ))}
        </div>
      </div>
      <RoomSelector selectedFloor={selected} />
    </div>
  );
};

export default FloorSelector;
