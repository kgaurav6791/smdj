import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { themeContext } from "../../Context";
import "./PhotoGallery.css";
import ImageGallery from "react-image-gallery";
import img1 from "../../img/SMDJ1.webp";
import img2 from "../../img/SMDJ2.webp";
import img3 from "../../img/SMDJ3.webp";
import img4 from "../../img/SMDJ4.webp";
import img5 from "../../img/SMDJ5.webp";
import img6 from "../../img/SMDJ6.webp";
import img7 from "../../img/SMDJ7.webp";
import img8 from "../../img/SMDJ8.webp";
import img9 from "../../img/SMDJ9.webp";
import img10 from "../../img/SMDJ10.webp";
import img11 from "../../img/SMDJ11.webp";
import img12 from "../../img/SMDJ12.webp";

import thumb-img2 from "../../img/SMDJ2-thumbnail.webp";
import thumb-img1 from "../../img/SMDJ1-thumbnail.webp";
import thumb-img3 from "../../img/SMDJ3-thumbnail.webp";
import thumb-img4 from "../../img/SMDJ4-thumbnail.webp";
import thumb-img5 from "../../img/SMDJ5-thumbnail.webp";
import thumb-img6 from "../../img/SMDJ6-thumbnail.webp";
import thumb-img7 from "../../img/SMDJ7-thumbnail.webp";
import thumb-img8 from "../../img/SMDJ8-thumbnail.webp";
import thumb-img9 from "../../img/SMDJ9-thumbnail.webp";
import thumb-img10 from "../../img/SMDJ10-thumbnail.webp";
import thumb-img11 from "../../img/SMDJ11-thumbnail.webp";
import thumb-img12 from "../../img/SMDJ12-thumbnail.webp";

//import fullscreen from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const PhotoGallery = () => {
  const refImg = useRef(null);
  const [track, setTrack] = useState(true);
  useEffect(() => {
    console.log(refImg.current.getCurrentIndex());
  }, [track]);

  const renderCustomControls = () => {};
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const images = [
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img2,
      thumbnail: img2,
    },
    {
      original: img3,
      thumbnail: img3,
    },
    {
      original: img4,
      thumbnail: img5,
    },
    {
      original: img6,
      thumbnail: img6,
    },
    {
      original: img7,
      thumbnail: img7,
    },
    {
      original: img8,
      thumbnail: img8,
    },
    {
      original: img9,
      thumbnail: img9,
    },
    {
      original: img10,
      thumbnail: img10,
    },
    {
      original: img11,
      thumbnail: img11,
    },
    {
      original: img12,
      thumbnail: img12,
    },
  ];
  return (
    <>
      <div className="photogallery" id="photogallery">
        {/* heading */}
        <span style={{ color: darkMode ? "white" : "" }}>Recent Events</span>
        <span>Photo gallery</span>
      </div>
      {/* Cause overflow hidden doesnot work on absolutely positioned blurp,so make
      their parent relative */}
      <div className="justrelative" style={{ position: "relative" }}>
        <div
          className="blurp"
          style={{ background: "rgb(238 210 255)", overflow: "hidden" }}
        ></div>
        <div
          className="blurp"
          style={{
            background: "rgb(193 245 255)",
            top: "227%",
            width: "34rem",
            height: "17rem",
            left: "49rem",
            blur: "67px",
            position: "absolute",
            overflow: "hidden",
          }}
        ></div>
      </div>
      <ImageGallery
        ref={refImg}
        items={images}
        showPlayButton={false}
        onClick={(e) => {
          setTrack(!track);
          const titleDiv = document.querySelector(
            "button.image-gallery-fullscreen-button"
          );
          console.log(titleDiv);
          console.log(e);
          //this._imageGallery.getCurrentIndex();
          //   titleDiv.click();
        }}
        onThumbnailClick={(e, i) => {
          const titleDiv = document.querySelector(
            "button.image-gallery-fullscreen-button"
          );

          console.log(e, i);

          // titleDiv.click();
        }}
        renderCustomControls={renderCustomControls}
      ></ImageGallery>
    </>
  );
};
export default PhotoGallery;
