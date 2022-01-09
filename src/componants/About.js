import React, { useRef, useEffect } from "react";
import { useGlobalcontext } from "../context";
import aboutImg from "../img/lake.JPG";

const About = () => {
  const about = useRef();

  const { setaboutRef } = useGlobalcontext();

  useEffect(() => {
    setaboutRef(about);
    console.log("about ref setted");
  }, []);

  return (
    <div
      className=" w-full h-screen flex justify-center items-center z-10 relative bg-neutral-100 dark:bg-zinc-900 "
      ref={about}
    >
      <div className=" h-full flex flex-col max-w-5xl sm:flex-row ">
        <div className=" flex-1 flex justify-center items-center ">
          <div className=" w-7/12 relative max-w-[200px]">
            <img
              src={aboutImg}
              alt="img"
              className=" w-full h-full object-contain rounded-lg"
            />
            <div className=" w-full h-full absolute top-9 right-9 bg-purple-500 rounded-lg -z-10 "></div>
          </div>
        </div>
        <div className="flex-1 px-10 space-y-3 flex flex-col justify-start pt-20 sm:justify-center sm:pt-0">
          <h2 className="font-bold text-3xl dark:text-white">
            About what I{" "}
            <span className=" animate-bounce inline-block">do</span>{" "}
          </h2>
          <p className=" dark:text-white">
            I develope frontend websites using react. I am an enthusiastic
            learner in programming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
