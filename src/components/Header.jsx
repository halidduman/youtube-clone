import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";

import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-5">
      <Link to={"/"}>
        <img
          className="w-[185px] p-4 hidden sm:block "
          src="/youtube-logo-large.svg"
          alt="logo"
        />
        <img
          className="w-[85px] p-1 block sm:hidden "
          src="/youtube-logo-small.svg"
          alt="logo"
        />
      </Link>

      <form className="group flex border border-gray-400 rounded-[20px] overflow-hidden">
        {" "}
        <input
          className="group-hover:border-blue-500  bg-[#0f0f0f] border px-5 py-2 outline-none rounded-l-[20px] focus:border-blue-300"
          type="text"
          placeholder="Ara..."
        />
        <button className="border-l px-4 bg-zinc-800 text-2xl">
          <CiSearch />
        </button>
      </form>

      <div className="flex gap-3 text-2xl">
        <FaBell className="cursor-pointer hover:text-gray-400 duration-75" />
        <IoMdVideocam className="cursor-pointer hover:text-gray-400 duration-75" />
        <MdVideoLibrary className="cursor-pointer hover:text-gray-400 duration-75" />
      </div>
    </header>
  );
};

export default Header;
