import { Link } from "react-router-dom";

const Cards = ({ data,title }) => {
  console.log(data);
  
  return (
    <div className="flex flex-wrap w-full px-[5%] bg-[#1f1e24]">
      {data.map((c, i) => (
        <Link className="relative w-[25vh] mr-[5%] mb-[5%]" key={i}>
            <img className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-[40vh] object-cover" 
            src={`https://image.tmdb.org/t/p/original/${
         c.poster_path ||  c.backdrop_path || c.profile_path
        }`}
         alt="" />
         <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">

          {c.name || c.title || c.original_name || c.original_title}
         </h1>

{c.vote_average && (<div className= "absolute right-[-10%] bottom-[35%] text-white font-semibold text-xl rounded-full w-[5vh] h-[5vh] flex justify-center items-center bg-yellow-600">
         {/* {(c.known_for[0].vote_average * 10).toFixed()} */}
         {(c.vote_average * 10).toFixed()} <sup>% </sup>
         </div> )}
         
        </Link>
      ))}
    </div>
  );
};

export default Cards;
