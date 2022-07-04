import React, { useContext, useRef, useState, useEffect } from "react";
import { themeContext } from "../../Context";
import "./Portfolio.css";

import ImageGallery from "react-image-gallery";
import ReactPlayer from "react-player";

import "react-image-gallery/styles/css/image-gallery.css";
import img1 from "../../img/SMDJ1.jpg";
import img2 from "../../img/SMDJ2.jpg";
import img3 from "../../img/SMDJ3.jpg";
import img4 from "../../img/SMDJ4.jpg";
import img5 from "../../img/SMDJ5.jpg";
import img6 from "../../img/SMDJ6.jpg";
import img7 from "../../img/SMDJ7.jpg";
import img8 from "../../img/SMDJ8.jpg";
import img9 from "../../img/SMDJ9.jpg";
import vid1 from "../../vid/SMDJ-VIDEO (1).mp4";
import vid2 from "../../vid/SMDJ-VIDEO (2).mp4";
import vid3 from "../../vid/SMDJ-VIDEO (3).mp4";
import vid4 from "../../vid/SMDJ-VIDEO (4).mp4";
import vid5 from "../../vid/SMDJ-VIDEO (5).mp4";
import vid6 from "../../vid/SMDJ-VIDEO (6).mp4";
import vid7 from "../../vid/SMDJ-VIDEO (7).mp4";
import vid8 from "../../vid/SMDJ-VIDEO (8).mp4";
import vid9 from "../../vid/SMDJ-VIDEO (9).mp4";
import vid10 from "../../vid/SMDJ-VIDEO (10).mp4";
import vid11 from "../../vid/SMDJ-VIDEO (11).mp4";
import vid12 from "../../vid/SMDJ-VIDEO (12).mp4";
import vid13 from "../../vid/SMDJ-VIDEO (13).mp4";
import vid14 from "../../vid/SMDJ-VIDEO (14).mp4";
import vid15 from "../../vid/SMDJ-VIDEO (15).mp4";
import vid16 from "../../vid/SMDJ-VIDEO (16).mp4";
import vid17 from "../../vid/SMDJ-VIDEO (17).mp4";
import vid18 from "../../vid/SMDJ-VIDEO (18).mp4";
import vid19 from "../../vid/SMDJ-VIDEO (19).mp4";
import vid20 from "../../vid/SMDJ-VIDEO (20).mp4";
import vid21 from "../../vid/SMDJ-VIDEO (21).mp4";
import vid22 from "../../vid/SMDJ-VIDEO (22).mp4";
import vid23 from "../../vid/SMDJ-VIDEO (23).mp4";
import vid24 from "../../vid/SMDJ-VIDEO (24).mp4";
import vid25 from "../../vid/SMDJ-VIDEO (25).mp4";
import vid26 from "../../vid/SMDJ-VIDEO (26).mp4";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const refImg = useRef(null);
  const refVideo = useRef(null);
  const [trackClickOnMainImage, setTrackClickOnMainImage] = useState(false);
  const [trackVideoDisplay, setTrackVideoDisplay] = useState(false);

  useEffect(() => {
    console.log(refImg.current.getCurrentIndex());
  }, [trackClickOnMainImage, trackVideoDisplay]);
  const darkMode = theme.state.darkMode;
  const renderCustomControls = () => {};
  const videos = [
    {
      original: img1,
    },
    {
      original: img2,
    },
    {
      original: img3,
    },
    {
      original: img4,
    },
    {
      original: img5,
    },
    {
      original: img6,
    },
    {
      original: img7,
    },
    // {
    //   original: vid2,
    //   thumbnail: vid2,
    // },
    // {
    //   thumbnail: vid3,
    //   original: vid3,
    // },
    // {
    //   thumbnail: vid4,
    //   original: vid4,
    // },
    // {
    //   thumbnail: vid5,
    //   original: vid5,
    // },
    // {
    //   thumbnail: vid6,
    //   original: vid6,
    // },
    // {
    //   original: vid7,
    //   thumbnail: vid7,
    // },
    // {
    //   original: vid8,
    //   thumbnail: vid8,
    // },
    // {
    //   thumbnail: vid9,
    //   original: vid9,
    // },
    // {
    //   thumbnail: vid10,
    //   original: vid10,
    // },
    // {
    //   thumbnail: vid11,
    //   original: vid11,
    // },
    // {
    //   thumbnail: vid12,
    //   original: vid12,
    // },
    // {
    //   original: vid13,
    //   thumbnail: vid13,
    // },
    // {
    //   original: vid14,
    //   thumbnail: vid14,
    // },
    // {
    //   thumbnail: vid15,
    //   original: vid15,
    // },
    // {
    //   thumbnail: vid16,
    //   original: vid16,
    // },
    // {
    //   thumbnail: vid17,
    //   original: vid17,
    // },
    // {
    //   thumbnail: vid18,
    //   original: vid18,
    // },
    // {
    //   original: vid19,
    //   thumbnail: vid19,
    // },
    // {
    //   original: vid20,
    //   thumbnail: vid20,
    // },
    // {
    //   thumbnail: vid21,
    //   original: vid21,
    // },
    // {
    //   thumbnail: vid22,
    //   original: vid22,
    // },
    // {
    //   thumbnail: vid23,
    //   original: vid23,
    // },
    // {
    //   thumbnail: vid24,
    //   original: vid24,
    // },
    // {
    //   thumbnail: vid25,
    //   original: vid25,
    // },
    // {
    //   thumbnail: vid26,
    //   original: vid26,
    // },
  ];
  return (
    <>
      <div className="portfolio" id="portfolio">
        <div
          className="blurpo"
          style={{ background: "rgb(238 210 255)" }}
        ></div>
        <div
          className="blurpo"
          style={{
            background: "rgb(193 245 255)",
            top: "350%",
            width: "61rem",
            height: "25rem",
            left: "49%",
            blur: "70px",
          }}
        ></div>
        <div
          className="blurpo2"
          style={{
            background: "rgb(238 210 255)",
            top: "480%",
            width: "61rem",
            height: "28rem",
            left: "49%",
            blur: "70px",
          }}
        ></div>
        <div
          className="blurpo2"
          style={{
            background: "rgb(193 245 255)",
            top: "520%",
            width: "61rem",
            height: "25rem",
            left: "-20%",
            blur: "50px",
          }}
        ></div>
        <div
          className="blurpo2"
          style={{
            background: "rgb(193 245 255)",
            top: "560%",
            width: "61rem",
            height: "18rem",
            left: "-20%",
            blur: "65px",
          }}
        ></div>
        {/* heading */}
        <span style={{ color: darkMode ? "white" : "" }}>Recent Events</span>
        <span>Video gallery</span>
      </div>
      <ImageGallery
        items={videos}
        ref={refImg}
        showPlayButton={true}
        showThumbnails={false}
        renderCustomControls={renderCustomControls}
        onClick={(e) => {
          setTrackClickOnMainImage(!trackClickOnMainImage);
          const titleDiv = document.querySelector(
            "button.image-gallery-fullscreen-button"
          );
          console.log(titleDiv);
          console.log(e);
          setTrackVideoDisplay(!trackVideoDisplay);
          //this._imageGallery.getCurrentIndex();
          //   titleDiv.click();
        }}
        onPlay={(i) => {
          console.log(i);
          setTrackVideoDisplay(!trackVideoDisplay);
          refImg.current.pause();
          console.log(ReactPlayer.canPlay("../../vid/SMDJ-VIDEO (2).mp4"));
        }}
      />
      <div className="full-video">
        {trackVideoDisplay && (
          <ReactPlayer url="../../vid/SMDJ-VIDEO (2).mp4" playing="true" />
        )}
      </div>
    </>
  );
};
export default Portfolio;
