import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./PhotoGallery.css";
import ImageGallery from "react-image-gallery";
//import fullscreen from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const PhotoGallery = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
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
          top: "317rem",
          width: "21rem",
          height: "11rem",
          left: "9rem",
          blur: "79px",
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
