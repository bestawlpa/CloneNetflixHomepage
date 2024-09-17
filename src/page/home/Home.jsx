import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReplayIcon from "@mui/icons-material/Replay";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Tvshow from "../../component/Tvshow";
import Movie from "../../component/Movie";

const Home = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState([]);
  const [tvShow, setTvShow] = useState([]);
  const [movie, setMovie] = useState([]);
  const [clicked, setClicked] = useState(false);

  const [currentIndexItem, setCurrentIndexItem] = useState(0);
  const [currentIndexTvShow, setCurrentIndexTvShow] = useState(0);
  const [currentIndexMovie, setCurrentIndexMovie] = useState(0);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      navigate("/login"); // ถ้ายังไม่ได้ล็อกอิน ไปที่หน้า Login
    }
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/netflix.json");

        if (response.ok) {
          const data = await response.json();
          const tvShowsList = data.filter((item) => item.type === "series");
          const movieList = data.filter((item) => item.type === "movies");

          setItem(data);
          setTvShow(tvShowsList);
          setMovie(movieList);
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {
    setClicked(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // ลบสถานะล็อกอินจาก localStorage
    navigate("/login"); // นำทางไปยังหน้า Login
  };

  // btn-item //
  const handleNextItem = () => {
    if (currentIndexItem < item.length - 4) {
      setCurrentIndexItem((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousItem = () => {
    if (currentIndexItem > 0) {
      setCurrentIndexItem((prevIndex) => prevIndex - 1);
    }
  };
  // -- //

  // btn-tvShow //
  const handleNextTvShow = () => {
    if (currentIndexTvShow < tvShow.length - 4) {
      setCurrentIndexTvShow((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousTvShow = () => {
    if (currentIndexTvShow > 0) {
      setCurrentIndexTvShow((prevIndex) => prevIndex - 1);
    }
  };
  // -- //

  // btn-tvShow //
  const handleNextMovie = () => {
    if (currentIndexMovie < tvShow.length - 4) {
      setCurrentIndexMovie((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousMovie = () => {
    if (currentIndexMovie > 0) {
      setCurrentIndexMovie((prevIndex) => prevIndex - 1);
    }
  };
  // -- //

  return (
    <div className="  w-screen h-screen  bg-opacity-90 text-red-600">
      <div className=" w-full h-[920px] " id="home-page">
        <div className=" w-full h-[920px] flex flex-col justify-between">
          <div className=" flex w-full items-center justify-between h-[100px] bg-[#181818] bg-opacity-85 px-20 ">
            <div className=" h-full w-[250px] flex items-center">
              <img
                src="./logo-netflix.png"
                alt="logo"
                className=" w-[200px] h-[50px]"
              />
            </div>

            <div className=" font-extrabold text-xl w-[600px] flex justify-around text-[#FFFFFF]">
              <button>
                <div>Home</div>
              </button>
              <button>
                <div>TVshows</div>
              </button>
              <button>
                <div>Movies</div>
              </button>
              <button>
                <div>New & Popular</div>
              </button>
              <button>
                <div>MyList</div>
              </button>
            </div>

            <div className=" w-[40%]"></div>

            <div className=" flex justify-between items-center w-[120px] h-[50px] text-white font-extrabold">
              <div>
                <button>
                  <SearchOutlinedIcon />
                </button>
              </div>
              <div>
                <button>
                  <NotificationsOutlinedIcon />
                </button>
              </div>
              <button onClick={handleLogout}>
                <div>
                  <LogoutOutlinedIcon />
                </div>
              </button>
            </div>
          </div>

          <div className=" h-[40%] w-full text-white flex flex-col pl-20">
            <div className=" w-[500px] h-[180px] flex flex-col justify-between mb-6">
              <h1 className=" font-black text-7xl">Interstellar</h1>
              <p className=" font-semibold text-xl">
                A former astronaut turned farmer leads a mission through a
                wormhole to find a habitable planet, facing challenges that
                could decide humanity's future.
              </p>
            </div>
            <div className=" flex justify-between ">
              <div className=" w-[350px] flex justify-between">
                <button>
                  <div className=" w-[150px] h-[50px] bg-[#FFFFFF] rounded-lg text-black flex justify-center items-center font-extrabold text-2xl">
                    <PlayArrowRoundedIcon />
                    <span className=" ml-2">Play</span>
                  </div>
                </button>
                <button>
                  <div className=" w-[180px] h-[50px] bg-[#4D4D4E] rounded-lg text-white flex justify-center items-center font-extrabold text-2xl">
                    <InfoOutlinedIcon />
                    <span className=" ml-2">More info</span>
                  </div>
                </button>
              </div>

              <div className=" flex w-[130px] h-[40px] items-center bg-[#37322F] bg-opacity-50">
                <div className=" w-[60px] text-center border-solid border-r-2 border-[#DCDCDC]">
                  <ReplayIcon />
                </div>
                <div className=" w-[60px] text-center">13+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#141414] w-full  flex justify-center pt-10 text-white">
        <div className=" w-[2080px] flex flex-col">
          <div>
            <h1 className=" text-2xl font-bold px-20">
              Your Next Watch{" "}
              <span className=" text-sm font-light text-cyan-300">
                <button onClick={handleClick}>Explore All</button>
              </span>
            </h1>
            <div className=" flex justify-center">
              {/* ปุ่มย้อนกลับ */}
              <button
                onClick={handlePreviousItem}
                disabled={currentIndexItem === 0}
                className=" p-2 rounded-lg text-transparent hover:text-white"
              >
                <ArrowBackIosOutlinedIcon />
              </button>

              {/* ภาพยนตร์ในแถวเดียว */}
              <div className="grid grid-cols-4 gap-4 overflow-hidden p-4">
                {item.slice(currentIndexItem, currentIndexItem + 4).map((e) => (
                  <div key={e.id} className="flex-none">
                    <img
                      src={e.poster}
                      alt={e.title}
                      className="w-[320px] h-[200px] object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* ปุ่มถัดไป */}
              <button
                onClick={handleNextItem}
                disabled={currentIndexItem >= item.length - 4}
                className=" p-2 rounded-lg text-transparent hover:text-white"
              >
                <ArrowForwardIosOutlinedIcon />
              </button>
            </div>
          </div>
          {/* <div className=" mt-6">
            <h1 className=" text-2xl font-bold px-20">
              US TV Shows{" "}
              <span className=" text-sm font-light text-cyan-300">
                <button onClick={handleClick}>Explore All</button>
              </span>
            </h1>
            <div className=" flex justify-center">
              {/* ปุ่มย้อนกลับ */}
          {/* <button
                onClick={handlePreviousTvShow}
                disabled={currentIndexTvShow === 0}
                className=" p-2 rounded-lg text-transparent hover:text-white"
              >
                <ArrowBackIosOutlinedIcon />
              </button> */}
          {/* ภาพยนตร์ในแถวเดียว */}
          {/* <div className="grid grid-cols-4 gap-4 overflow-hidden p-4">
                {tvShow
                  .slice(currentIndexTvShow, currentIndexTvShow + 4)
                  .map((e) => (
                    <div key={e.id} className="flex-none">
                      <img
                        src={e.poster}
                        alt={e.title}
                        className="w-[320px] h-[200px] object-contain"
                      />
                    </div>
                  ))}
              </div> */}
          {/* ปุ่มถัดไป */}
          {/* <button
                onClick={handleNextTvShow}
                disabled={currentIndexTvShow >= item.length - 4}
                className=" p-2 rounded-lg text-transparent hover:text-white"
              >
                <ArrowForwardIosOutlinedIcon />
              </button>
            </div>
          </div> */}

          <Tvshow
            tvShow={tvShow}
            currentIndexTvShow={currentIndexTvShow}
            handlePreviousTvShow={handlePreviousTvShow}
            handleNextTvShow={handleNextTvShow}
            handleClick={handleClick}
          />

          <Movie
            movie={movie}
            currentIndexMovie={currentIndexMovie}
            handlePreviousMovie={handlePreviousMovie}
            handleNextMovie={handleNextMovie}
            handleClick={handleClick}
          />
        </div>
      </div>

      <div className="relative">
        {clicked && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setClicked(false)}
            ></div>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[720px] bg-[#141414] bg-opacity-80 z-50 overflow-auto">
              <button
                onClick={() => setClicked(false)}
                className="absolute top-2 right-2 text-white text-2xl"
              >
                ×
              </button>
              <div className="grid grid-cols-4 gap-4 p-4">
                {item.map((e) => (
                  <div key={e.id}>
                    <img
                      src={e.poster}
                      alt=""
                      className="w-[320px] h-[200px] object-fill"
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
