import React, { useState, useEffect } from 'react';
const Time = ( {app} ) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timeData = JSON.parse(localStorage.getItem('timeData'));
    if (timeData) {
      setHours(timeData.hours);
      setMinutes(timeData.minutes);
      setSeconds(timeData.seconds);
    }
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

  }, []);
  useEffect(() => {
    const timeData = {
      hours,
      minutes,
      seconds,
    };
    localStorage.setItem('timeData', JSON.stringify(timeData));
  }, [hours, minutes, seconds]);
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  const displayHours = Math.floor(totalSeconds / 3600);
  const displayMinutes = Math.floor((totalSeconds % 3600) / 60);
  const displaySeconds = totalSeconds % 60;
  return (
    <div className={`${app} p-[10px] m-[20px] rounded-lg shadow-lg w-[300px] `}>
      <div>
        <h1>وقت الاستخدام : </h1>
      </div>
      <div>
        {displayHours} ساعة {displayMinutes} دقيقة {displaySeconds} ثانية
      </div>
    </div>
  );
};

export default Time;
