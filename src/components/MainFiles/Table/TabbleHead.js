import React from 'react';

const TabbleHead = ({ list }) => {
  return (
    <div className='table__header'>
      {list.map((title) => (
        <div key={title.id} className='table__cell'>
          <p className='table__header--title'>{title.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TabbleHead;
