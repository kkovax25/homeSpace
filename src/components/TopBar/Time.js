import React, { useEffect, useState } from 'react';
const Time = () => {
  const [time, setTime] = useState({
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    sec: new Date().getSeconds(),
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        sec: new Date().getSeconds(),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const { hour, minute, sec } = time;
  return (
    <span>
      {hour < 10 ? `0${hour}` : hour}:{minute < 10 ? `0${minute}` : minute}:
      {sec < 10 ? `0${sec}` : sec}
    </span>
  );
};

export default Time;
