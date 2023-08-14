import React from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <div className="py-6 px-5 h-fit bg-rose-400">
      <div className="flex justify-between items-center">
        <Logo />
        <button
          className="py-2 px-3 text-lg bg-teal-300 rounded border self-center"
          onClick={() => {
            console.log("Log Out");
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
