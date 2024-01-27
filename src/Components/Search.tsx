import React from "react";
import { useState } from "react";
import hat from "./../assets/Images/hat.png";
import { IoSearch } from "react-icons/io5";
function Search({ selectedTag }) {
  const tags = [
    {
      id: 1,
      name: "Все",
    },
    {
      id: 2,
      name: "Круто",
    },
    {
      id: 3,
      name: "Тот",
    },
    {
      id: 4,
      name: "Лашпед",
    },
    {
      id: 5,
      name: "НА2ре",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex justify-center mt-8 flex-col  md:px-[150px]">
      <img src={hat} className="rounded-2xl " />
      <div className="bg-white shadow-lg p-3 rounded-lg mt-[-45px] mx-[25%] border-red-600 border-4 flex item-center">
        <IoSearch className="text-[20px] mt-[2px] text-gray-400" />

        <input
          type="text"
          placeholder="Search"
          className="outline-none ml-2 w-full"
        ></input>
      </div>
      <div className="flex gap-10 justify-center mt-5">
        {tags.map((item, index) => (
          <ul
            key={item.id}
            onClick={() => {
              setActiveIndex(index);
              selectedTag(item.name);
            }}
            className={`${
              index == activeIndex ? "bg-red-500 text-white" : null
            } p-1 pb-2 rounded-sm md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] border-red-500 transition-all duration-100 ease-in-out`}
          >
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Search;
