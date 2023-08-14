import React from "react";

const BackgroundGlow: React.FC = () => {
  return (
    <div className="rounded-md border border-slate-900 bg-black px-8 py-32">
      <div className="grid items-center justify-center gap-8">
        <div className="group relative">
          <div className="absolute -inset-0.5 animate-tilt rounded-md bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <div className="relative flex items-center divide-x divide-gray-600 rounded-md bg-black px-6 py-3.5 leading-none">
            <span className="pr-6 text-gray-100">Arun Sharma</span>
            <span className="pr-6 pl-6 text-gray-100">Frontend</span>
            <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-100">
              Developer &rarr;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundGlow;
