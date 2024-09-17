import React from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Movie = (props) => {
  const {
    movie,
    currentIndexMovie,
    handleNextMovie,
    handlePreviousMovie,
    handleClick,
  } = props;

  return (
    <div className=" mt-4">
      <h1 className=" text-2xl font-bold px-20">
        US Movies{" "}
        <span className=" text-sm font-light text-cyan-300">
          <button onClick={handleClick}>Explore All</button>
        </span>
      </h1>
      <div className=" flex justify-center">
        <button
          onClick={handlePreviousMovie}
          disabled={currentIndexMovie === 0}
          className=" p-2 rounded-lg text-transparent hover:text-white"
        >
          <ArrowBackIosOutlinedIcon />
        </button>
        <div className="grid grid-cols-4 gap-4 overflow-hidden p-4">
          {movie.slice(currentIndexMovie, currentIndexMovie + 4).map((e) => (
            <div key={e.id} className="flex-none">
              <img
                src={e.poster}
                alt={e.title}
                className="w-[320px] h-[200px] object-contain"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleNextMovie}
          disabled={currentIndexMovie >= movie.length - 4}
          className=" p-2 rounded-lg text-transparent hover:text-white"
        >
          <ArrowForwardIosOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default Movie;
