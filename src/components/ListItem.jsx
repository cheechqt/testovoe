import { useEffect, useState } from "react";

export function ListItem({ item, index, removeItem }) {
  const [timerValue, setTimerValue] = useState(item.timerStartValue);

  useEffect(() => {
    const timer = setTimeout(() => setTimerValue((v) => v - 1), 1000);

    if (timerValue < 0) {
      removeItem(item.uID);
    }

    return () => clearTimeout(timer);
  });

  return (
    <li className="text-3xl">
      {index + 1} {timerValue}
    </li>
  );
}
