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

  const timers = {
    hours: (date.getHours() % 12) * 30 + date.getMinutes() * 0.5,
    minutes: date.getMinutes() * 6,
    seconds: date.getSeconds() * 6,
  };

  return (
    <div className="clock">
      <div className="dial"></div>
      {times.map((time, index) => (
        <div key={index} className={`time-${time}`}>
          {time}
        </div>
      ))}
      {Object.keys(timers).map((timer, index) => (
        <div
          key={index}
          className={timer}
          style={{ transform: `rotate(${timers[timer]}deg)` }}
        />
      ))}
    </div>
  );
}

export default Clock;
