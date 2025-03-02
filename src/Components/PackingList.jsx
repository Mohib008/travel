import React from "react";

const initialItems = [
  {
    id: 1,
    item: "Shirts",
    packed: false,
  },
  {
    id: 2,
    item: "Pants",
    packed: false,
  },
  {
    id: 3,
    item: "Toothbrush",
    packed: false,
  },
  {
    id: 4,
    item: "Underwear",
    packed: false,
  },
  {
    id: 5,
    item: "Hat",
    packed: false,
  },
  {
    id: 6,
    item: "Shoes",
    packed: false,
  },
  {
    id: 7,
    item: "Jacket",
    packed: false,
  },
  {
    id: 8,
    item: "Phone Charger",
    packed: false,
  },
];

function PackingList({ initialItems }) {
  return (
     <div>
        <h2>Packing List</h2>
        <ul>
          {initialItems.map((item) => (
            <li key={item.id}>
              <input type="checkbox" checked={item.packed} />
              {item.item}
            </li>
          ))}
          </ul>
     </div>
  );
}

export default PackingList;