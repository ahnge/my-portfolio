import React from "react";
import Card from "./Card";
import { products } from "../data";

const Products = () => {
  return (
    <div className=" w-full dark:bg-black ">
      <div className="w-full min-h-screen flex flex-col px-10 py-11 ">
        <div className="flex-1 flex max-w-4xl mx-auto flex-col justify-center items-center space-y-3 md:flex-[0.3] md:space-y-10">
          <h2 className=" font-bold text-3xl text-center dark:text-white">
            Create & inspire. It's Lama
          </h2>
          <p className=" text-center dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            quibusdam excepturi at pariatur aliquid ipsa reiciendis fugit neque
            labore aut!
          </p>
        </div>
        <div className=" flex-1 mt-10 flex flex-col gap-3.5 items-center sm:flex-row sm:flex-wrap justify-center ">
          {products.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
