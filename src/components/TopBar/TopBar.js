import React, { useState, useEffect } from 'react';
import weatehrApi from '../../api/weather';
import Time from './Time';
const TopBar = () => {
  // eslint-disable-next-line
  const [location, setLocation] = useState({
    lat: '',
    long: '',
  });
  const [temp, setTemp] = useState('');
  const getWeather = async () => {
    let result = await weatehrApi.getWeather(location.lat, location.long);
    setTemp(Math.round(result.data.current.temp));
  };
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    } else {
      window.alert('Geolocation is not avaible');
    }
  }, []);
  useEffect(
    () => {
      if (location.lat !== '') {
        getWeather();
      }
    },
    // eslint-disable-next-line
    [location]
  );
  let date = new Date().toLocaleDateString('en-gb', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'long',
  });
  return (
    <div className='topBar'>
      <div className='topBar__innerCont'>
        <div>
          <div className='title'>
            <p className='title--main'>Welcome home,</p>
            <p className='title--sub'>Krisztián</p>
          </div>
          <div className='todaysInfo'>
            <p>
              Today is {date}, <Time />
            </p>
            {!temp ? null : <p>The temperature is currently {temp}°C</p>}
          </div>
        </div>
        <div className='profile'>
          <div className='profile__placeholder'></div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
