import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { themeContext } from "../../Context";
import "./PhotoGallery.css";
import ImageGallery from "react-image-gallery";
import img1 from "../../img/SMDJ1.webp";
import img2 from "../../img/SMDJ2.webp";
import img3 from "../../img/SMDJ3.webp";
import img4 from "../../img/SMDJ4.webp";

import img6 from "../../img/SMDJ6.webp";
import img7 from "../../img/SMDJ7.webp";
import img8 from "../../img/SMDJ8.webp";
import img9 from "../../img/SMDJ9.webp";
import img10 from "../../img/SMDJ10.webp";
import img11 from "../../img/SMDJ11.webp";
import img12 from "../../img/SMDJ12.webp";

import mobimg1 from "../../mobilesized/img/SMDJ1.webp";
import mobimg2 from "../../mobilesized/img/SMDJ2.webp";
import mobimg3 from "../../mobilesized/img/SMDJ3.webp";
import mobimg4 from "../../mobilesized/img/SMDJ4.webp";

import mobimg6 from "../../mobilesized/img/SMDJ6.webp";
import mobimg7 from "../../mobilesized/img/SMDJ7.webp";
import mobimg8 from "../../mobilesized/img/SMDJ8.webp";
import mobimg9 from "../../mobilesized/img/SMDJ9.webp";
import mobimg10 from "../../mobilesized/img/SMDJ10.webp";
import mobimg11 from "../../mobilesized/img/SMDJ11.webp";
import mobimg12 from "../../mobilesized/img/SMDJ12.webp";

import thumbimg2 from "../../img/SMDJ2-thumbnail.webp";
import thumbimg1 from "../../img/SMDJ1-thumbnail.webp";
import thumbimg3 from "../../img/SMDJ3-thumbnail.webp";
import thumbimg4 from "../../img/SMDJ4-thumbnail.webp";
import thumbimg6 from "../../img/SMDJ6-thumbnail.webp";
import thumbimg7 from "../../img/SMDJ7-thumbnail.webp";
import thumbimg8 from "../../img/SMDJ8-thumbnail.webp";
import thumbimg9 from "../../img/SMDJ9-thumbnail.webp";
import thumbimg10 from "../../img/SMDJ10-thumbnail.webp";
import thumbimg11 from "../../img/SMDJ11-thumbnail.webp";
import thumbimg12 from "../../img/SMDJ12-thumbnail.webp";

//import fullscreen from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const PhotoGallery = () => {
  const refImg = useRef(null);
  const [track, setTrack] = useState(true);

  const renderCustomControls = () => {};
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const images = [
    {
      original: img1,
      thumbnail: thumbimg1,
      originalHeight: "980",
      originalWidth: "1260",
      thumbnailHeight: "72",
      thumbnailWidth: "96",
      originalAlt: "SM DJ LUCKNOW IMAGE",
      thumbnailAlt: "SM DJ LUCKNOW IMAGE",
      loading: "eager",
    },
    {
      original: img2,
      thumbnail: thumbimg2,
      originalHeight: "980",
      originalWidth: "1260",
      thumbnailHeight: "72",
      thumbnailWidth: "96",
      originalAlt: "SM DJ LUCKNOW IMAGE",
      thumbnailAlt: "SM DJ LUCKNOW IMAGE",
      loading: "lazy",
    },
    {
      original: img3,
      thumbnail: thumbimg3,
      originalHeight: "980",
      originalWidth: "1260",
      thumbnailHeight: "72",
      thumbnailWidth: "96",
      originalAlt: "SM DJ LUCKNOW IMAGE",
      thumbnailAlt: "SM DJ LUCKNOW IMAGE",
      loading: "lazy",
    },
    {
      original: img4,
      thumbnail: thumbimg4,
      originalHeight: "980",
      originalWidth: "1260",
      thumbnailHeight: "72",
      thumbnailWidth: "96",
      originalAlt: "SM DJ LUCKNOW IMAGE",
      thumbnailAlt: "SM DJ LUCKNOW IMAGE",
      loading: "lazy",
    },
    {
      original: img6,
      originalHeight: "980",
      originalWidth: "1260",
      thumbnailHeight: "72",
      thumbnailWidth: "96",
      thumbnail: thumbimg6,
      originalAlt: "SM DJ LUCKNOW IMAGE",
      thumbnailAlt: "SM DJ LUCKNOW IMAGE",
      loading: "lazy",
    },
    {
      original: img7,
      thumbnail: thumbimg7,
      originalHeight: "980",
      originalWidth: "1260",
      thumbnailHeight: "72",
      thumbnailWidth: "96",
      originalAlt: "SM DJ LUCKNOW IMAGE",
      thumbnailAlt: "SM DJ LUCKNOW IMAGE",
      loading: "lazy",
    },
    {
      original: img8,
      thumbnail: thumbimg8,
      originalHeight: "980",
      originalWidth: "1260",
      thumbnailHeight: "72",
      thumbnailWidth: "96",
      originalAlt: "SM DJ LUCKNOW IMAGE",
      thumbnailAlt: "SM DJ LUCKNOW IMAGE",
      loading: "lazy",
    },
    {
      original: img9,
      thumbnail: thumbimg9,
      originalHeight: "980",
      originalWidth: "1260",
      thumbnailHeight: "72",
      thumbnailWidth: "96",
      originalAlt: "SM DJ LUCKNOW IMAGE",
      thumbnailAlt: "SM DJ LUCKNOW IMAGE",
      loading: "lazy",
    },
    {
      original: img10,
      thumbnail: thumbimg10,
      originalHeight: "980",
      originalWidth: "1260",
      thumbnailHeight: "72",
      thumbnailWidth: "96",
      originalAlt: "SM DJ LUCKNOW IMAGE",
      thumbnailAlt: "SM DJ LUCKNOW IMAGE",
      loading: "lazy",
    },
    {
      original: img11,
      thumbnail: thumbimg11,
      originalHeight: "980",
      originalWidth: "1260",
      thumbnailHeight: "72",
      thumbnailWidth: "96",
      originalAlt: "SM DJ LUCKNOW IMAGE",
      thumbnailAlt: "SM DJ LUCKNOW IMAGE",
      loading: "lazy",
    },
    {
      original: img12,
      thumbnail: thumbimg12,
      originalHeight: "980",
      originalWidth: "1260",
      thumbnailHeight: "72",
      thumbnailWidth: "96",
      originalAlt: "SM DJ LUCKNOW IMAGE",
      thumbnailAlt: "SM DJ LUCKNOW IMAGE",
      loading: "lazy",
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
        lazyLoad={true}
        showPlayButton={false}
        additionalClass="Imclass"
        onScreenChange={(boolscreen) => {
          if (boolscreen === true) {
            // eslint-disable-next-line

            async function locktolandscape() {
              //   await document.body.requestFullscreen();

              // eslint-disable-next-line
              try {
                // eslint-disable-next-line
                await screen.orientation.lock("landscape");
                //ACTUALLY FOR PHONE DEVICES
                // THIS ONLY WORK FOR FIRST SLIDE----->document.querySelector(".image-gallery-image").style.width ="55vw";

                document.querySelector(".image-gallery-slides").style.width =
                  "52vw";
                document.querySelector(
                  ".image-gallery-slides"
                ).style.paddingLeft = "20vw";
              } catch (error) {
                //ONLY FOR USING LANDSCAPE ON CHROME INSPECTION BECAUSE screen.orientation.lock() THROWS AN ERROR WHEN NOT MOBILE DEVICE

                document.querySelector(".image-gallery-slides").style.width =
                  "52vw";
                document.querySelector(
                  ".image-gallery-slides"
                ).style.paddingLeft = "20vw";
              }
            }
            locktolandscape();
          } else if (boolscreen === false) {
            document.querySelector(".image-gallery-image").style.width = "auto";
            document.querySelector(".image-gallery-slides").style.paddingLeft =
              "0vw";
            document.querySelector(".image-gallery-slides").style.width =
              "99vw";
            // eslint-disable-next-line
            screen.orientation.unlock();
          }
        }}
        //     // eslint-disable-next-line
        //     screen.orientation
        //       .lock("landscape-primary")
        //       .then(function () {
        //         console.log("Locked");
        //       })
        //       .catch(function (error) {
        //         console.log(error);
        //       });
        //   } else if (boolscreen === false) {
        //     // eslint-disable-next-line
        //     screen.orientation.unlock();
        //   }
        // }}
        onClick={(e) => {
          setTrack(!track);
          const titleDiv = document.querySelector(
            "button.image-gallery-fullscreen-button"
          );

          //this._imageGallery.getCurrentIndex();
          //   titleDiv.click();
          // eslint-disable-next-line
        }}
        onThumbnailClick={(e, i) => {
          const titleDiv = document.querySelector(
            "button.image-gallery-fullscreen-button"
          );

          // titleDiv.click();
        }}
        renderCustomControls={renderCustomControls}
      ></ImageGallery>
    </>
  );
};

export default PhotoGallery;