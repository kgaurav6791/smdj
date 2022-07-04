import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Portfolio.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import vid1 from "../../vid/SMDJ-VIDEO (1).jpg";
import vid2 from "../../vid/SMDJ-VIDEO (2).jpg";
import vid3 from "../../vid/SMDJ-VIDEO (3).jpg";
import vid4 from "../../vid/SMDJ-VIDEO (4).jpg";
import vid5 from "../../vid/SMDJ-VIDEO (5).jpg";
import vid6 from "../../vid/SMDJ-VIDEO (6).jpg";
import vid7 from "../../vid/SMDJ-VIDEO (7).jpg";
import vid8 from "../../vid/SMDJ-VIDEO (8).jpg";
import vid9 from "../../vid/SMDJ-VIDEO (9).jpg";
import vid10 from "../../vid/SMDJ-VIDEO (10).jpg";
import vid11 from "../../vid/SMDJ-VIDEO (11).jpg";
import vid12 from "../../vid/SMDJ-VIDEO (12).jpg";
import vid13 from "../../vid/SMDJ-VIDEO (13).jpg";
import vid14 from "../../vid/SMDJ-VIDEO (14).jpg";
import vid15 from "../../vid/SMDJ-VIDEO (15).jpg";
import vid16 from "../../vid/SMDJ-VIDEO (16).jpg";
import vid17 from "../../vid/SMDJ-VIDEO (17).jpg";
import vid18 from "../../vid/SMDJ-VIDEO (18).jpg";
import vid19 from "../../vid/SMDJ-VIDEO (19).jpg";
import vid20 from "../../vid/SMDJ-VIDEO (20).jpg";
import vid21 from "../../vid/SMDJ-VIDEO (21).jpg";
import vid22 from "../../vid/SMDJ-VIDEO (22).jpg";
import vid23 from "../../vid/SMDJ-VIDEO (23).jpg";
import vid24 from "../../vid/SMDJ-VIDEO (24).jpg";
import vid25 from "../../vid/SMDJ-VIDEO (25).jpg";
import vid26 from "../../vid/SMDJ-VIDEO (26).jpg";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const videos = [
    {
      original: vid1,
      thumbnail: vid1,
    },
    {
      original: vid2,
      thumbnail: vid2,
    },
    {
      thumbnail: vid3,
      original: vid3,
    },
    {
      thumbnail: vid4,
      original: vid4,
    },
    {
      thumbnail: vid5,
      original: vid5,
    },
    {
      thumbnail: vid6,
      original: vid6,
    },
    {
      original: vid7,
      thumbnail: vid7,
    },
    {
      original: vid8,
      thumbnail: vid8,
    },
    {
      thumbnail: vid9,
      original: vid9,
    },
    {
      thumbnail: vid10,
      original: vid10,
    },
    {
      thumbnail: vid11,
      original: vid11,
    },
    {
      thumbnail: vid12,
      original: vid12,
    },
    {
      original: vid13,
      thumbnail: vid13,
    },
    {
      original: vid14,
      thumbnail: vid14,
    },
    {
      thumbnail: vid15,
      original: vid15,
    },
    {
      thumbnail: vid16,
      original: vid16,
    },
    {
      thumbnail: vid17,
      original: vid17,
    },
    {
      thumbnail: vid18,
      original: vid18,
    },
    {
      original: vid19,
      thumbnail: vid19,
    },
    {
      original: vid20,
      thumbnail: vid20,
    },
    {
      thumbnail: vid21,
      original: vid21,
    },
    {
      thumbnail: vid22,
      original: vid22,
    },
    {
      thumbnail: vid23,
      original: vid23,
    },
    {
      thumbnail: vid24,
      original: vid24,
    },
    {
      thumbnail: vid25,
      original: vid25,
    },
    {
      thumbnail: vid26,
      original: vid26,
    },
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
export default Portfolio;
