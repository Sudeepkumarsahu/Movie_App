import React from "react";
import { SideNav } from "./templates/SideNav";
import Topnav from "./templates/Topnav";

const Home = () => {
  document.title = "HomePage";
  return (
    <>
      <SideNav />
      <div className="w-[80%] h-full ">
        <Topnav />
      </div>
    </>
  );
};

export default Home;
