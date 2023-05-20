import React from "react";

const Card = (props) => {
  console.log(props.toy);
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img src="" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Toy</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
