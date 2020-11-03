import React from "react";
import Slider from "../slider/Slider";
import Blog from "../blog/Blog";
import "./Home.css";
const Home = () => {
  return (
    <div className="content-box">
      <Slider />
      <div className="container">
        <Blog />
      </div>
    </div>
  );
};

export default Home;
