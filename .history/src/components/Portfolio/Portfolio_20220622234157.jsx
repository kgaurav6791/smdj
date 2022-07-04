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
