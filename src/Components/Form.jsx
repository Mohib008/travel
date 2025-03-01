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

function Form() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-600">
      {initialItems.map((item) => (
        <li>
          <span>
            {item.id} {item.item}
          </span>
        </li>
      ))}
    </div>
  );
}

export default Form;
