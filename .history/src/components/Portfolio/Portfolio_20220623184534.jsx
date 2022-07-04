import React, { useContext, useRef, useState, useEffect } from "react";
import { themeContext } from "../../Context";
import "./Portfolio.css";

import ImageGallery from "react-image-gallery";
import ReactImageVideoLightbox from "react-image-video-lightbox";

import "react-image-gallery/styles/css/image-gallery.css";

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

import vidthumb1 from "../../vid/SMDJ-VIDEO (1).jpeg";
import vidthumb2 from "../../vid/SMDJ-VIDEO (2).jpeg";
import vidthumb3 from "../../vid/SMDJ-VIDEO (3).jpeg";
import vidthumb4 from "../../vid/SMDJ-VIDEO (4).jpeg";
import vidthumb5 from "../../vid/SMDJ-VIDEO (5).jpeg";
import vidthumb6 from "../../vid/SMDJ-VIDEO (6).jpeg";
import vidthumb7 from "../../vid/SMDJ-VIDEO (7).jpeg";
import vidthumb8 from "../../vid/SMDJ-VIDEO (8).jpeg";
import vidthumb9 from "../../vid/SMDJ-VIDEO (9).jpeg";
import vidthumb10 from "../../vid/SMDJ-VIDEO (10).jpeg";
import vidthumb11 from "../../vid/SMDJ-VIDEO (11).jpeg";
import vidthumb12 from "../../vid/SMDJ-VIDEO (12).jpeg";
import vidthumb13 from "../../vid/SMDJ-VIDEO (13).jpeg";
import vidthumb14 from "../../vid/SMDJ-VIDEO (14).jpeg";
import vidthumb15 from "../../vid/SMDJ-VIDEO (15).jpeg";
import vidthumb16 from "../../vid/SMDJ-VIDEO (16).jpeg";
import vidthumb17 from "../../vid/SMDJ-VIDEO (17).jpeg";
import vidthumb18 from "../../vid/SMDJ-VIDEO (18).jpeg";
import vidthumb19 from "../../vid/SMDJ-VIDEO (19).jpeg";
import vidthumb20 from "../../vid/SMDJ-VIDEO (20).jpeg";
import vidthumb21 from "../../vid/SMDJ-VIDEO (21).jpeg";
import vidthumb22 from "../../vid/SMDJ-VIDEO (22).jpeg";
import vidthumb23 from "../../vid/SMDJ-VIDEO (23).jpeg";
import vidthumb24 from "../../vid/SMDJ-VIDEO (24).jpeg";
import vidthumb25 from "../../vid/SMDJ-VIDEO (25).jpeg";
import vidthumb26 from "../../vid/SMDJ-VIDEO (26).jpeg";
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
  const callbackCloseFunction = () => {
    const vidDiv = (document.querySelector(".full-video>div").style.display =
      "none");
    console.log(vidDiv);
  };
  const videos = [
    {
      original: vidthumb1,
    },
    {
      original: vid2,
    },
    {
      original: vid3,
    },
    {
      original: vid4,
    },
    {
      original: vid5,
    },
    {
      original: vid6,
    },
    {
      original: vid7,
    },
    {
      original: vid8,
    },
    {
      original: vid9,
    },
    {
      original: vid10,
    },
    {
      original: vid11,
    },
    {
      original: vid12,
    },
    {
      original: vid13,
    },
    {
      original: vid14,
    },
    {
      original: vid15,
    },
    {
      original: vid16,
    },
    {
      original: vid17,
    },
    {
      original: vid18,
    },
    {
      original: vid19,
    },
    {
      original: vid20,
    },
    {
      original: vid21,
    },
    {
      original: vid22,
    },
    {
      original: vid23,
    },
    {
      original: vid24,
    },
    {
      original: vid25,
    },
    {
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
        }}
      />
      <div className="full-video">
        {trackVideoDisplay && (
          <ReactImageVideoLightbox
            data={[
              {
                url: "https://www.youtube.com/embed/ScMzIvxBSi4",
                type: "video",
                title: "some video",
              },

              {
                url: "https://www.youtube.com/embed/ScMzIvxBSi4",
                type: "video",
                title: "some other video",
              },
            ]}
            startIndex={0}
            onCloseCallback={callbackCloseFunction}
            onNavigationCallback={(currentIndex) =>
              console.log(`Current index: ${currentIndex}`)
            }
          />
        )}
      </div>
    </>
  );
};
export default Portfolio;
