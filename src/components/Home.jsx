import React, { useEffect, useState } from "react";
import { SideNav } from "./templates/SideNav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";
import Loading from "./Loading";
const Home = () => {
  document.title = "HomePage";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setCategory] = useState("all");

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  // console.log(wallpaper);

  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
    getTrending();
  }, [category]);
  // console.log(trending);

  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />

        <div className=" p-5 flex justify-between ">
          <h1 className="text-3xl text-zinc-400 font-semibold">Trending</h1>
          <Dropdown title="Filter"
           options={["tv", "movie", "all"]}
           func = {(e) => setCategory(e.target.value)}
           />
        </div>

        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
   <Loading />
  );
};

export default Home;
