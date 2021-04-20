import React from 'react';
import { NavLink } from 'react-router-dom';
const links = [
  {
    name: 'My drive',
    link: '/',
  },
  {
    name: 'Home center',
    link: '/homeCenter',
  },
  {
    name: 'Music player',
    link: '/musicPlayer',
  },
  {
    name: 'Applications',
    link: '/applications',
  },
  {
    name: 'Settings',
    link: '/settings',
  },
];
const Nav = ({ link }) => (
  <NavLink
    to={link.link}
    exact={link.link === '/'}
    activeClassName='menuList--active'
  >
    <li>{link.name}</li>
  </NavLink>
);

const SideBar = () => {
  return (
    <div className='sideBar'>
      <div className='sideBar__container'>
        <div className='sideBar__logo'>
          <img src='./img/svg/Logo/logo2.svg' alt='logo' className='logo' />
          <div className='title'>
            <span className='title__main'>home</span>
            <span className='title__sub'>space</span>
          </div>
        </div>
        <div className='sideBar__create'>
          <div className='createBtn'>
            <p className='createBtn__plus'>+</p>
            <p className='createBtn__text'>Add new file</p>
          </div>
        </div>
        <div className='sideBar__menu'>
          <ul className='menuList'>
            {links.map((link) => (
              <Nav key={link.name} link={link} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
