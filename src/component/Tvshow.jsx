import React from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Tvshow = (props) => {
  const {
    tvShow, // รายการ TV Shows ที่จะถูก map แสดงผล
    currentIndexTvShow, // ดัชนีปัจจุบันที่ใช้ในการแสดง TV Show
    handlePreviousTvShow, // ฟังก์ชันย้อนกลับ TV Show
    handleNextTvShow, // ฟังก์ชันถัดไป TV Show
    handleClick,
  } = props;
  return (
    <div className=" mt-6">
      <h1 className=" text-2xl font-bold px-20">
        US TV Shows{" "}
        <span className=" text-sm font-light text-cyan-300">
          <button onClick={handleClick}>Explore All</button>
        </span>
      </h1>
      <div className=" flex justify-center">
        {/* ปุ่มย้อนกลับ */}
        <button
          onClick={handlePreviousTvShow}
          disabled={currentIndexTvShow === 0}
          className=" p-2 rounded-lg text-transparent hover:text-white"
        >
          <ArrowBackIosOutlinedIcon />
        </button>

        {/* ภาพยนตร์ในแถวเดียว */}
        <div className="grid grid-cols-4 gap-4 overflow-hidden p-4">
          {tvShow.slice(currentIndexTvShow, currentIndexTvShow + 4).map((e) => (
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
          onClick={handleNextTvShow}
          disabled={currentIndexTvShow >= tvShow.length - 4}
          className=" p-2 rounded-lg text-transparent hover:text-white"
        >
          <ArrowForwardIosOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default Tvshow;
