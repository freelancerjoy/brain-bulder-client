import React from "react";
import Slider from "../Slider/Slider";
import ImageGalery from "../ImageGalery/ImageGalery";

import Category from "../Categoty/Category";
import useTitle from "../../../Hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div className="">
      <div className="">
        <Slider></Slider>
        <ImageGalery></ImageGalery>
        <Category></Category>
      </div>
    </div>
  );
};

export default Home;
