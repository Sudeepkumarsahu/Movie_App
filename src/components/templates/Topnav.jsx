import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";
const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setsearches] = useState([]);
  // console.log(query);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      // console.log(data);
      setsearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] relative flex items-center mx-auto">
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
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
          className=" text-3xl text-zinc-400 ri-close-line right-0"
        ></i>
      )}

      <div
        className="
      z-[100] absolute  w-[50%] max-h-[50vh] bg-zinc-200  top-[90%] left-[5%] top-[100%] overflow-auto rounded "
      >
        {searches.map((s, i) => (
          <Link
            key={i}
            className="font-semibold hover:text-zinc-950 hover:bg-zinc-300 duration-300 text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 
        border-zinc-100 
        "
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {s.name ||
                s.title ||
                s.original_language ||
                s.original_name ||
                s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
