import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";
import Loading from "./Loading";

const Popular = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
document.title = "Movie | Popular "+category.toUpperCase();
  const getPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      console.log(data);

      if (data.results.length > 0) {
        setpopular((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
      //   setpopular(data.results);
      //   console.log(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      getPopular();
    } else {
      setpage(1);
      setpopular([]);
      getPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="  w-screen h-screen ">
      <div className="px-[5%] w-full  flex items-center justify-between ">
        <h1 className=" text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer"
          ></i>
          Popular 
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["tv", "movie"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={getPopular}
        hasMore={hasMore}
        loader={<h1>loadin g....</h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
