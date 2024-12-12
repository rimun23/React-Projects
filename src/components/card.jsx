import React from "react";
function Card({ img1, img2, description }) {
  return (
    <div class="card">
      <img class="cover" src={img1} alt="" />
      <img class="character" src={img2} alt="" />
      <p>{description}</p>
    </div>
  );
}
export default Card;
