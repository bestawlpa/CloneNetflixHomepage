import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("passwordtest");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn) {
      navigate("/"); // ถ้ามีการล็อกอินแล้ว ให้ไปที่หน้าแรก
    }
  }, [navigate]);

  const validEmail = "test@gmail.com";
  const validPassword = "passwordtest";

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === validEmail && password === validPassword) {
      localStorage.setItem("isLoggedIn", "true"); // เก็บสถานะล็อกอินใน localStorage
      setError("");
      navigate("/"); // นำทางไปยังหน้า Home
    } else {
      setError("Email หรือ Password ไม่ถูกต้อง");
    }
  };

  return (
    <div
      id="login-page"
      className=" w-screen h-screen text-red-600 flex flex-col items-center justify-between bg-black"
    >
      <div className=" w-full max-w-[1198px] h-[100px] mt-10 ml-5">
        <img
          src="./logo-netflix.png"
          alt="logo"
          className=" w-[150px] h-[40px]"
        />
      </div>
      <div className=" w-full max-w-[1080px]  h-full  flex flex-col items-center mt-6">
        <form action="">
          <div className=" flex flex-col items-center w-[450px] h-[550px] bg-neutral-950 bg-opacity-75 rounded-lg">
            <div className=" w-full my-10 ml-20 ">
              <h1 className=" text-4xl text-[#FFFFFF]">Singn In</h1>
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" w-[300px] mb-6 p-4 bg-neutral-950 bg-opacity-75 text-white text-lg rounded-md ring-2 ring-[#5E5E5E] focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" w-[300px] mb-6 p-4 bg-neutral-950 bg-opacity-75 text-white text-lg rounded-md ring-2 ring-[#5E5E5E] focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button onClick={handleLogin}>
              <div className=" w-[300px] p-3 bg-[#E50914] rounded-lg text-[#FFFFFF] text-xl font-extrabold">
                Sign In
              </div>
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
