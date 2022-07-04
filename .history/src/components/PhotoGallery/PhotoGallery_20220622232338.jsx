import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./PhotoGallery.css";
import ImageGallery from "react-image-gallery";
import img1 from "../../img/SMDJ1.jpg";
import img2 from "../../img/SMDJ2.jpg";
import img3 from "../../img/SMDJ3.jpg";
import img4 from "../../img/SMDJ4.jpg";
import img5 from "../../img/SMDJ5.jpg";
import img6 from "../../img/SMDJ6.jpg";
import img7 from "../../img/SMDJ7.jpg";
import img8 from "../../img/SMDJ8.jpg";
import img9 from "../../img/SMDJ9.jpg";
import img10 from "../../img/SMDJ10.jpg";
import img11 from "../../img/SMDJ11.jpg";
import img12 from "../../img/SMDJ12.jpg";

//import fullscreen from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const PhotoGallery = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const images = [
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <>
      <div className="photogallery" id="photogallery">
        {/* heading */}
        <span style={{ color: darkMode ? "white" : "" }}>Recent Events</span>
        <span>Photo gallery</span>
      </div>
      <div className="blurp" style={{ background: "rgb(238 210 255)" }}></div>
      <div
        className="blurp"
        style={{
          background: "rgb(193 245 255)",
          top: "227%",
          width: "34rem",
          height: "17rem",
          left: "49rem",
          blur: "67px",
        }}
      ></div>
      <ImageGallery
        items={images}
        showPlayButton={false}
        onClick={() => {
          const titleDiv = document.querySelector(
            "button.image-gallery-fullscreen-button"
          );
          console.log(titleDiv);
          titleDiv.click();
        }}
      />
    </>
  );
};
export default PhotoGallery;
