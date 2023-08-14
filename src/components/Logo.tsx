import React from "react";
import logo from "../assets/vite.svg";

const Logo: React.FC = () => {
  return (
    <div className="flex space-x-2 items-center">
      <img className="w-10 h-10" src={logo} alt="logo" />
      <h2 className="text-3xl font-bold text-gray-100 italic">
        Vite Learning Project
      </h2>
    </div>
  );
};

export default Logo;
