import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%]">
      <i class="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] mx-10 text-zinc-200   p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          class="text-3xl text-zinc-400 ri-close-line"
        ></i>
      )}

      <div
        className="
       absolute  w-[50%] max-h-[50vh] bg-zinc-200  top-[90%] overflow-auto rounded "
      >
        {/* <Link
          className="font-semibold hover:text-zinc-950 hover:bg-zinc-300 duration-300 text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 
        border-zinc-100 
        "
        >
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link> */}
  
      </div>
    </div>
  );
};

export default Topnav; 