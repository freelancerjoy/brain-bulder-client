import React from "react";
import Gallery from "react-photo-gallery";

const ImageGalery = () => {
  return (
    <div className="py-16 w-11/12 mx-auto">
      <div className="mb-10 pl-4 border-l-4  border-green-600">
        <h1 className="font-bold text-3xl text-green-600">
          Welcome Our Gallery
        </h1>
        <p className="lg:max-w-sm">
          Take a visual journey through the incredible moments and experiences
          we've captured.{" "}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5 ">
        <div className="col-span-2 bg-slate-100 rounded-lg p-5 shadow-md">
          <img
            src="https://www.n2y.com/wp-content/uploads/n2y-manips-full-kit.png"
            alt=""
          />
        </div>
        <div className="  bg-slate-100 rounded-lg p-5 shadow-md">
          <img
            className="h-56"
            src="https://img.lakeshorelearning.com/is/image/OCProduction/kt18417?wid=800&fmt=jpeg&qlt=85,1&pscan=auto&op_sharpen=0&resMode=sharp2&op_usm=1,0.65,6,0"
            alt=""
          />
        </div>
        <div className="row-span-1">
          <img
            src="https://m.media-amazon.com/images/I/8143wgce78L._AC_SX679_.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGalery;
