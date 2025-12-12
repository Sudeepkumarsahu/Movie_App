import React from "react";
import { Link } from "react-router-dom";

export const SideNav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl text-white font-bold">
        <i className=" text-[#6556CD] ri-tv-fill mr-2 "></i>
        <span className="text-2xl">movie App</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-3">
          New Feeds
        </h1>
        <Link className="hover:bg-[#6556CD] p-3 hover:text-white duration-300 rounded-lg">
          {" "}
          <i className="ri-fire-fill "></i> Trending
        </Link>
        <Link className="hover:bg-[#6556CD] p-3 hover:text-white duration-300 rounded-lg">
          <i className="ri-bard-fill"></i> Popular
        </Link>
        <Link className="hover:bg-[#6556CD] p-3 hover:text-white duration-300 rounded-lg">
          {" "}
          <i className="ri-movie-fill mr-2"></i>Movies
        </Link>
        <Link className="hover:bg-[#6556CD] p-3 hover:text-white duration-300 rounded-lg">
          <i className="ri-tv-2-fill mr-2"></i>Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD] p-3 hover:text-white duration-300 rounded-lg">
          <i className="ri-team-fill mr-2"></i>People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-3">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] p-3 hover:text-white duration-300 rounded-lg">
          {" "}
          <i className="ri-information-fill"></i> About Movie
        </Link>
        <Link className="hover:bg-[#6556CD] p-3 hover:text-white duration-300 rounded-lg">
          <i className="ri-phone-fill"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
};
