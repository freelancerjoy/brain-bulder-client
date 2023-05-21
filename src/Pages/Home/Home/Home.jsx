import React, { useEffect } from "react";
import Slider from "../Slider/Slider";
import ImageGalery from "../ImageGalery/ImageGalery";
import Category from "../Categoty/Category";
import useTitle from "../../../Hooks/useTitle";
import Newsletter from "../Newsletter/Newsletter";
import Reciew from "../Review/Reciew";

const Home = () => {
  useTitle("Home");

  return (
    <div className="">
      <div className="">
        <Slider></Slider>
        <ImageGalery></ImageGalery>
        <Category></Category>
        <Reciew></Reciew>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;
