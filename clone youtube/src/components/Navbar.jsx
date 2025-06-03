import React from "react";
import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoMic } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import logo from "../../public/logo.png";
import profile from "../../public/profile.jpg";
function Navbar() {
  return (
    <div className="flex items-center  justify-between px-6 py-3 ">
      <div className="flex items-center space-x-4 ">
        <FiMenu className="text-xl cursor-pointer hover:bg-gray-200 duration-200" />
        <img src={logo} alt="" className="w-28 cursor-pointer hover:bg-gray-200 duration-200" />
      </div>

      <div className=" flex w-[35%] items-center">
        <div className=" w-[100%] px-4 py-3 border border-gray-400 rounded-l-full ">
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
        <button className="px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full ">
          <CiSearch size={"32px"} />
        </button>
        <IoMic
          size={"48px"}
          className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>

      <div className=" flex items-center space-x-5">
        <RiVideoAddLine className="text-2xl hover:bg-gray-200 duration-200" />
        <AiOutlineBell className=" text-2xl hover:bg-gray-200 duration-200" />
        <img src={profile} className="w-8 rounded-full " />
      </div>
    </div>
  );
}

export default Navbar;
