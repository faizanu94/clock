import { useState, useEffect } from 'react';
import './style.css';

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timers = {
    'hours': ((date.getHours() % 12) * 30) + (date.getMinutes() * 0.5),
    'minutes': date.getMinutes() * 6,
    'seconds': date.getSeconds() * 6
  };

  return (
    <div className="clock">
      <div className="dial"></div>
      {Object.keys(timers).map((timer, index) => <div key={index} className={timer} style={{ transform: `rotate(${timers[timer]}deg)` }} />)}
    </div>
  );
}

export default Clock;
