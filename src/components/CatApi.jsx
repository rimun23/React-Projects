import React, { useState } from "react";
import axios from "axios";
function CatApi() {
  const [catImage, setCatImage] = useState("");
  const fetchCatImage = async () => {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      setCatImage(response.data[0].url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cat">
      <h1>Museum with cutie cats😻</h1>
      <button onClick={fetchCatImage}>change a picture</button>

      {{ catImage } && (
        <img
          src={catImage}
          alt="Random cat😺"
          style={{ width: "300px", height: "350px" }}
        />
      )}
    </div>
  );
}

export default CatApi;
