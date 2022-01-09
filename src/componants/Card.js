import React from "react";

const Card = ({ item }) => {
  console.log(item.img);
  return (
    <div className="w-full max-w-xs bg-slate-300 rounded-t-md overflow-hidden p-1">
      <div className="flex py-1 px-3 space-x-2">
        <p className=" w-2 h-2 rounded-full bg-white "></p>
        <p className=" w-2 h-2 rounded-full bg-white "></p>
        <p className=" w-2 h-2 rounded-full bg-white "></p>
      </div>
      <div className="w-full bg-white h-52 rounded-sm overflow-hidden">
        <img
          src={item.img}
          alt="aa"
          className=" w-full duration-[8s] hover:-translate-y-full "
        />
      </div>
    </div>
  );
};

export default Card;
