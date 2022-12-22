import { useState } from "react";
import { ListItem } from "./ListItem";

export function Main() {
  const [list, setList] = useState([]);

  // 10 - 30 random number
  const getRandomNumber = () => {
    return Math.floor(Math.random() * (30 - 10) + 10);
  };

  const createItem = () => {
    const timerStartValue = getRandomNumber();
    return {
      uID: Math.random() * timerStartValue,
      timerStartValue,
    };
  };

  const handleAddItem = () => {
    const item = createItem();
    setList((prev) => [...prev, item]);
  };

  const removeItem = (id) => {
    setList((prev) => prev.filter((i) => i.uID !== id));
  };

  return (
    <div>
      <button
        className="bg-gray-900 text-green-600 text-2xl p-2 rounded-xl"
        onClick={handleAddItem}
      >
        Add list item
      </button>
      <ul>
        {list.map((item, index) => (
          <ListItem
            key={item.uID}
            index={index}
            item={item}
            removeItem={removeItem}
          />
        ))}
      </ul>
    </div>
  );
}
