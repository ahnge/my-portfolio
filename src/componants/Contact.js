import React, { useRef } from "react";
import { Mail, Phone, Location } from "./icons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zdn3c94",
        "template_lw6rkdi",
        form.current,
        "user_zIbunxZGcBQz2wseVyVBd"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className=" h-screen w-full bg-neutral-100 dark:bg-zinc-900">
      <div className=" w-full h-full flex flex-col px-5 md:flex-row">
        <div className=" flex-[.7] space-y-4 pt-20 md:pt-40 md:space-y-8 md:pl-3 dark:text-white">
          <h3 className=" font-bold text-2xl text-center md:text-5xl leading-7">
            Let's discuss your project
          </h3>
          <div className=" font-normal md:text-xl">
            <Phone /> +95 9756318225
          </div>
          <div className=" font-normal md:text-xl">
            <Mail /> ahnge226@gmail.com
          </div>
          <div className=" flex items-center min-w-max md:text-xl">
            <Location />{" "}
            <p>
              Shwenyaung, Taunggyi,
              <br /> SouthernShan state, Myanmar
            </p>
          </div>
        </div>
        <div className="flex-1 md:pt-40 md:pl-3">
          <h5 className=" mb-4 max-w-md mx-auto text-center md:text-2xl md:text-left dark:text-white">
            <span className=" font-bold">What's your story?</span> Get in
            touch.Always available for freelancin if the right project comes
            alon me.
          </h5>
          <form
            className=" space-y-4 flex flex-col items-center md:items-start max-w-md mx-auto pb-5"
            onSubmit={(e) => handleSubmit(e)}
            ref={form}
          >
            <input
              type="text"
              placeholder="name"
              className=" focus:outline-none px-5 py-1 rounded-md block border-b-4 w-full border-purple-400"
              name="user_name"
            />
            <input
              type="text"
              placeholder="subject"
              className=" focus:outline-none px-5 py-1 rounded-md block border-b-4 w-full border-purple-400"
              name="user_subject"
            />
            <input
              type="email"
              placeholder="email"
              className=" focus:outline-none px-5 py-1 rounded-md block border-b-4 w-full border-purple-400"
              name="user_email"
            />
            <textarea
              cols="30"
              rows="5"
              placeholder="abc"
              className=" focus:outline-none px-5 py-1 rounded-md block border-b-4 w-full border-purple-400"
              name="message"
            ></textarea>
            <button
              type="submit"
              className=" px-5 py-1 bg-purple-500 rounded-xl text-white font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
