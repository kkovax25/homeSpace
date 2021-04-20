import React from 'react';
import SideBar from '../SideBar/SideBar';
import TopBar from '../TopBar/TopBar';
const Navigation = ({ children }) => {
  return (
    <>
      <SideBar />
      <div style={{ width: '100%' }}>
        <TopBar />
        {children}
      </div>
    </>
  );
};

export default Navigation;
