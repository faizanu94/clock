import { useState, useEffect, useMemo } from "react";
import "./style.css";

function Clock() {
  const [_, setWatch] = useState(new Date());
  const times = useMemo(() => [12, 3, 6, 9], []);

  useEffect(() => {
    const interval = setInterval(() => setWatch((watch) => watch + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const date = new Date();

  const timers = [{
    key: 'hours',
    value: (date.getHours() % 12) * 30 + date.getMinutes() * 0.5
  }, {
    key: 'minutes',
    value: date.getMinutes() * 6
  }, {
    key: 'seconds',
    value: date.getSeconds() * 6
  }];

  return (
    <div className="clock">
      <div className="dial"></div>
      {times.map((time, index) => (
        <div key={index} className={`time-${time}`}>
          {time}
        </div>
      ))}
      {timers.map((timer, index) => (
        <div key={index} className={timer.key} style={{ transform: `rotate(${timer.value}deg) ` }} />
      ))}
    </div>
  );
}

export default Clock;
