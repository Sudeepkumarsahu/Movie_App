import React, { useEffect, useState } from "react";
import { SideNav } from "./templates/SideNav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";

const Home = () => {
  document.title = "HomePage";
  const [wallpaper, setwallpaper] = useState(null);
  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
let randomdata = data.results[(Math.random()*data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  // console.log(wallpaper);
  
  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
  },[]);
  return wallpaper ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full ">
        <Topnav />
        <Header data={wallpaper}/>
      </div>
    </>
  ): <h1>Loading</h1>
};

export default Home;
