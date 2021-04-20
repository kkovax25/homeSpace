import React, { useState, useEffect } from 'react';
import './Selectors.scss';
const rooms = [
  {
    floor: 'floor1',
    rooms: [
      {
        title: 'Garage',
        selectedValue: 'garage',
        id: 1,
      },
      {
        title: 'Packing room',
        selectedValue: 'packingRoom',
        id: 2,
      },
      {
        title: 'Dumpster',
        selectedValue: 'dumpster',
        id: 3,
      },
    ],
  },
  {
    floor: 'floor2',
    rooms: [
      {
        title: 'Bathroom',
        selectedValue: 'bathroom',
        id: 1,
      },
      {
        title: 'Toilett',
        selectedValue: 'toilett',
        id: 2,
      },
      {
        title: 'Storage',
        selectedValue: 'storage',
        id: 3,
      },
    ],
  },
  {
    floor: 'floor3',
    rooms: [
      {
        title: 'Kitchen',
        id: 1,
        selectedValue: 'kitchen',
      },
      {
        title: 'Living room',
        selectedValue: 'livingRoom',
        id: 2,
      },
      {
        title: 'Dining hall',
        selectedValue: 'diningHall',
        id: 3,
      },
      {
        title: 'Bedroom',
        selectedValue: 'bedroom',
        id: 4,
      },
      {
        title: "Tony's room",
        selectedValue: 'tonysRoom',
        id: 5,
      },
    ],
  },
];
const RoomSelector = ({ selectedFloor }) => {
  const [current, setCurrent] = useState(rooms[0].rooms);
  const [selected, setSelected] = useState(rooms[0].rooms[0].selectedValue);
  console.log(selected);
  useEffect(() => {
    setCurrent(rooms.find((floor) => floor.floor === selectedFloor).rooms);
    setSelected(
      rooms.find((floor) => floor.floor === selectedFloor).rooms[0]
        .selectedValue
    );
  }, [selectedFloor]);
  return (
    <div className='roomSelector'>
      <div className='roomSelector__header'>
        <p className='roomSelector__title'>Rooms </p>
      </div>
      <div className='rooms'>
        {current.map((room) => (
          <div
            key={room.id}
            className={`room cursor ${
              selected === room.selectedValue && 'room--active'
            }`}
            onClick={() => setSelected(room.selectedValue)}
          >
            <p className='room--title'>{room.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomSelector;
