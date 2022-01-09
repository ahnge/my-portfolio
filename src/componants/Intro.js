import React from "react";
import { useGlobalcontext } from "../context";
import Me from "../img/profile1.jpg";
import { Mouse } from "./icons";

const Intro = () => {
  const { aboutRef } = useGlobalcontext();

  const handleMouse = () => {
    aboutRef.current.scrollIntoView();
  };

  return (
    <div className=" flex h-screen flex-col-reverse sm:flex-row relative dark:bg-black dark:text-white z-10">
      <div className=" flex-1 flex items-center">
        <div className=" p-12 h-full space-y-5 sm:h-1/2">
          <h2 className=" text-3xl font-light z-10">Hello, My name is</h2>
          <h2 className=" text-6xl font-semibold">Nayzaw</h2>
          <div className=" h-12 overflow-hidden">
            <div className=" h-full animate-move">
              <div className=" h-12 text-3xl font-bold text-purple-500 flex items-center">
                Web Developer
              </div>
              <div className=" h-12 text-3xl font-bold text-purple-500 flex items-center">
                UI/UX Designer
              </div>
            </div>
          </div>
          <p>
            I develop services for customers of all sizes, specializing in
            creating stylish, modern websites, web services and online stores.
          </p>
          <div onClick={() => handleMouse()}>
            <Mouse />
          </div>
        </div>
      </div>
      <div className=" flex-1 flex items-center justify-center">
        <div className=" w-3/6 max-w-sm h-auto z-10 sm:w-5/6">
          <img
            src={Me}
            alt="profile picture"
            className=" w-full rounded-full shadow-xl shadow-purple-700"
          />
        </div>
        <div className=" cbg absolute bg-purple-500 w-11/12 h-3/6 top-0 right-0 -z-10 sm:w-7/12 sm:h-full"></div>
      </div>
    </div>
  );
};

export default Intro;
