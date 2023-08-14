import React from "react";
import { MdCall, MdEmail } from "react-icons/md";
import { FaTwitter, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Copyright from "./Copyright";

const Footer: React.FC = () => {
  return (
    <div className="h-fit bg-slate-900 px-2 py-4 text-white">
      <div className="flex justify-center mb-4">
        <p>Designed and Developed by :</p>
        <span>Arun Sharma, Frontend Developer</span>
      </div>

      <div className="flex space-x-10 justify-center mb-4">
        <div className="flex space-x-2 items-center">
          <MdCall size={"24px"} />
          <p className="leading-none">8209883415</p>
        </div>

        <div className="flex space-x-2 items-center">
          <MdEmail size={"24px"} />
          <p className="leading-none">arun2life4084@gmail.com</p>
        </div>

        <div className="flex space-x-3">
          <a href="https://www.twitter.com/arun2life4084">
            <FaTwitter size={"24px"} />
          </a>
          <a href="https://www.facebook.com/arunsharma4084">
            <FaFacebook size={"24px"} />
          </a>
          <a href="https://github.com/arunsharma4084">
            <FaGithub size={"24px"} />
          </a>
          <a href="https://www.linkedin.com/in/arunsharma4084">
            <FaLinkedinIn size={"24px"} />
          </a>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
