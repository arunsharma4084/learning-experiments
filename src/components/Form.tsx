import React from "react";

const Form: React.FC = () => {
  return (
    <div className="w-[350px] rounded-2xl border bg-white selection:bg-rose-500 selection:text-white">
      <div className="relative h-36 rounded-t-2xl bg-rose-500">
        <svg
          className="absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="p-5 pt-1">
        <h1 className="text-center text-2xl font-semibold text-gray-900">
          Have a question or want to work together?
        </h1>
        <form action="" id="form" className="w-full space-y-6">
          <div className="relative mt-6 flex flex-col space-y-1">
            <input
              id="email"
              type="email"
              autoFocus
              placeholder="Email Address"
              className="peer h-10 w-full rounded border-2 border-gray-300 p-2 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
            />
            <label
              htmlFor="email"
              className="absolute -top-6 left-0 px-[9px] text-sm leading-none text-gray-700 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-700">
              Email Address
            </label>
          </div>

          <div className="relative flex flex-col space-y-1">
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="peer h-10 w-full rounded border-2 border-gray-300 p-2 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
            />
            <label
              htmlFor="name"
              className="absolute -top-6 left-0 px-[9px] text-sm leading-none text-gray-700 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-700">
              Name
            </label>
          </div>

          <div className="relative flex flex-col space-y-1">
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              className="peer h-10 w-full rounded border-2 border-gray-300 p-2 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
            />
            <label
              htmlFor="subject"
              className="absolute -top-6 left-0 px-[9px] text-sm leading-none text-gray-700 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-700">
              Subject
            </label>
          </div>

          <div className="relative flex flex-col space-y-1">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="peer h-32 w-full rounded border-2 border-gray-300 p-2 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"></textarea>
            <label
              htmlFor="subject"
              className="absolute -top-6 left-0 px-[9px] text-sm leading-none text-gray-700 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-700">
              Message
            </label>
          </div>

          <input
            type="sumbit"
            defaultValue="Send Message"
            className="block w-full cursor-pointer rounded bg-rose-500 px-4 py-2 text-center font-semibold text-white hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-opacity-80 focus:ring-offset-2"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
