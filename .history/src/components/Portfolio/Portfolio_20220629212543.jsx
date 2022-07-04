import React, { useContext, useRef, useState, useEffect } from "react";
import { themeContext } from "../../Context";
import "./Portfolio.css";

import ImageGallery from "react-image-gallery";
import ReactImageVideoLightbox from "react-image-video-lightbox";

import "react-image-gallery/styles/css/image-gallery.css";

// import vid1 from "../../vid/SMDJ-VIDEO (1).mp4";
// import vid2 from "../../vid/SMDJ-VIDEO (2).mp4";
// import vid3 from "../../vid/SMDJ-VIDEO (3).mp4";
// import vid4 from "../../vid/SMDJ-VIDEO (4).mp4";
// import vid5 from "../../vid/SMDJ-VIDEO (5).mp4";
// import vid6 from "../../vid/SMDJ-VIDEO (6).mp4";
// import vid7 from "../../vid/SMDJ-VIDEO (7).mp4";
// import vid8 from "../../vid/SMDJ-VIDEO (8).mp4";
// import vid9 from "../../vid/SMDJ-VIDEO (9).mp4";
// import vid11 from "../../vid/SMDJ-VIDEO (11).mp4";
// import vid12 from "../../vid/SMDJ-VIDEO (12).mp4";
// import vid13 from "../../vid/SMDJ-VIDEO (13).mp4";
// import vid14 from "../../vid/SMDJ-VIDEO (14).mp4";
// import vid15 from "../../vid/SMDJ-VIDEO (15).mp4";
// import vid16 from "../../vid/SMDJ-VIDEO (16).mp4";
// import vid17 from "../../vid/SMDJ-VIDEO (17).mp4";
// import vid18 from "../../vid/SMDJ-VIDEO (18).mp4";
// import vid19 from "../../vid/SMDJ-VIDEO (19).mp4";
// import vid20 from "../../vid/SMDJ-VIDEO (20).mp4";
// import vid21 from "../../vid/SMDJ-VIDEO (21).mp4";
// import vid22 from "../../vid/SMDJ-VIDEO (22).mp4";
// import vid23 from "../../vid/SMDJ-VIDEO (23).mp4";
// import vid24 from "../../vid/SMDJ-VIDEO (24).mp4";
// import vid25 from "../../vid/SMDJ-VIDEO (25).mp4";
// import vid26 from "../../vid/SMDJ-VIDEO (26).mp4";

import vidthumb1 from "../../vid/SMDJ-VIDEO (1).jpeg";
import vidthumb2 from "../../vid/SMDJ-VIDEO (2).jpeg";
import vidthumb3 from "../../vid/SMDJ-VIDEO (3).jpeg";
import vidthumb4 from "../../vid/SMDJ-VIDEO (4).jpeg";
import vidthumb5 from "../../vid/SMDJ-VIDEO (5).jpeg";
import vidthumb6 from "../../vid/SMDJ-VIDEO (6).jpeg";
import vidthumb7 from "../../vid/SMDJ-VIDEO (7).jpeg";
import vidthumb8 from "../../vid/SMDJ-VIDEO (8).jpeg";
import vidthumb9 from "../../vid/SMDJ-VIDEO (9).jpeg";
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
    //  console.log(refImg.current.getCurrentIndex());
  }, [trackVideoDisplay]);
  const darkMode = theme.state.darkMode;
  const renderCustomControls = () => {};
  const callbackCloseFunction = () => {
    const vidDiv = (document.querySelector(".full-video>div").style.display =
      "none");
    const vidDiv2 = (document.querySelector(".full-video>div").innerHTML = "");
    //  console.log(vidDiv, vidDiv2);
    //so we don't have to click twice to repaly if we close the player
    setTrackVideoDisplay(!trackVideoDisplay);
  };
  const videos = [
    {
      original: vidthumb1,
    },
    {
      original: vidthumb2,
    },
    {
      original: vidthumb3,
    },
    {
      original: vidthumb4,
    },
    {
      original: vidthumb5,
    },
    {
      original: vidthumb6,
    },
    {
      original: vidthumb7,
    },
    {
      original: vidthumb8,
    },
    {
      original: vidthumb9,
    },

    {
      original: vidthumb11,
    },
    {
      original: vidthumb12,
    },
    {
      original: vidthumb13,
    },
    {
      original: vidthumb14,
    },
    {
      original: vidthumb15,
    },
    {
      original: vidthumb16,
    },
    {
      original: vidthumb17,
    },
    {
      original: vidthumb18,
    },
    {
      original: vidthumb19,
    },
    {
      original: vidthumb20,
    },
    {
      original: vidthumb21,
    },
    {
      original: vidthumb22,
    },
    {
      original: vidthumb23,
    },
    {
      original: vidthumb24,
    },
    {
      original: vidthumb25,
    },
    {
      original: vidthumb26,
    },
  ];
  return (
    <>
      <div className="portfolio" id="portfolio">
        <div
          className="blurpo"
          style={{ background: "rgb(238 210 255)", overflow: "hidden" }}
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
            overflow: "hidden",
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
            overflow: "hidden",
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
            overflow: "hidden",
          }}
        ></div>
        <div
          className="blurpo2"
          style={{
            overflow: "hidden",
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
        additionalClass="Imclass"
        onScreenChange={(boolscreen) => {
          console.log(boolscreen);

          // var bool = boolscreen;
          if (bool === true) {
            // eslint-disable-next-line
            async function locktolandscape() {
              //   await document.body.requestFullscreen();
              // eslint-disable-next-line
              // await screen.orientation.lock("landscape");
              document.querySelector(".Imclass").style.display = "flex";
              document.querySelector(".Imclass").style.alignItems = "center";
            }
            locktolandscape();
          } else if (bool === false) {
            //   // eslint-disable-next-line
            // screen.orientation.unlock();
          }
        }}
        onClick={() => {
          // setTrackClickOnMainImage(!trackClickOnMainImage);
          // const titleDiv = document.querySelector(
          //   "button.image-gallery-fullscreen-button"
          // );
          // console.log(titleDiv);
          // console.log(e);
          // setTrackVideoDisplay(!trackVideoDisplay);
          // //this._imageGallery.getCurrentIndex();
          //   titleDiv.click();
        }}
        onPlay={(i) => {
          console.log(trackVideoDisplay);
          setTrackVideoDisplay(!trackVideoDisplay);
          console.log(trackVideoDisplay);
          refImg.current.pause();
        }}
      />
      <div className="full-video">
        {trackVideoDisplay && (
          <ReactImageVideoLightbox
            data={[
              {
                url: "https://www.youtube.com/embed/3JH7kguwuxo",
                type: "video",
                title: "SM Sound Services 1",
              },
              {
                url: "https://www.youtube.com/embed/CaJQWqFB724",
                type: "video",
                title: "SM Sound Services 2",
              },
              {
                url: "https://www.youtube.com/embed/2JN7Ga3186E",
                type: "video",
                title: "SM Sound Services 3",
              },
              {
                url: "https://www.youtube.com/embed/B9Qz71RDPMU",
                type: "video",
                title: "SM Sound Services 4",
              },
              {
                url: "https://www.youtube.com/embed/VQPXVaagTQA",
                type: "video",
                title: "SM Sound Services 5",
              },
            ]}
            startIndex={refImg.current.getCurrentIndex()}
            onCloseCallback={callbackCloseFunction}
            //      onNavigationCallback={(currentIndex) =>
            //     console.log(`Current index: ${currentIndex}`)
            //    }
          />
        )}
      </div>
    </>
  );
};
export default Portfolio;
