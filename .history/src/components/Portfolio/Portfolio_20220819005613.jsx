import React, { useContext, useRef, useState, useEffect } from "react";
import { themeContext } from "../../Context";

import ImageGallery from "react-image-gallery";
import ReactImageVideoLightbox from "react-image-video-lightbox";

import "react-image-gallery/styles/css/image-gallery.css";
import "./Portfolio.css";
import vidthumb1 from "../../vid/mobilesized/SMDJ-VIDEO (1).webp";
import vidthumb2 from "../../vid/mobilesized/SMDJ-VIDEO (2).webp";
import vidthumb3 from "../../vid/mobilesized/SMDJ-VIDEO (3).webp";
import vidthumb4 from "../../vid/mobilesized/SMDJ-VIDEO (4).webp";
import vidthumb5 from "../../vid/mobilesized/SMDJ-VIDEO (5).webp";
import vidthumb6 from "../../vid/mobilesized/SMDJ-VIDEO (6).webp";
import vidthumb7 from "../../vid/mobilesized/SMDJ-VIDEO (7).webp";
import vidthumb8 from "../../vid/mobilesized/SMDJ-VIDEO (8).webp";
import vidthumb9 from "../../vid/mobilesized/SMDJ-VIDEO (9).webp";
import vidthumb10 from "../../vid/mobilesized/SMDJ-VIDEO(10).webp";

import vidthumbfullsized1 from "../../vid/SMDJ-VIDEO (1).webp";
import vidthumbfullsized2 from "../../vid/SMDJ-VIDEO (2).webp";
import vidthumbfullsized3 from "../../vid/SMDJ-VIDEO (3).webp";
import vidthumbfullsized4 from "../../vid/SMDJ-VIDEO (4).webp";
import vidthumbfullsized5 from "../../vid/SMDJ-VIDEO (5).webp";
import vidthumbfullsized6 from "../../vid/SMDJ-VIDEO (6).webp";
import vidthumbfullsized7 from "../../vid/SMDJ-VIDEO (7).webp";
import vidthumbfullsized8 from "../../vid/SMDJ-VIDEO (8).webp";
import vidthumbfullsized9 from "../../vid/SMDJ-VIDEO (9).webp";
import vidthumbfullsized10 from "../../vid/SMDJ-VIDEO(10).webp";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const refImg = useRef(null);
  // const refVideo = useRef(null);
  // const [trackClickOnMainImage, setTrackClickOnMainImage] = useState(false);
  const [trackVideoDisplay, setTrackVideoDisplay] = useState(false);

  useEffect(() => {
    //  console.log(refImg.current.getCurrentIndex());
  }, [trackVideoDisplay]);
  const darkMode = theme.state.darkMode;
  const renderCustomControls = () => {};
  const callbackCloseFunction = () => {
    // const vidDiv = (document.querySelector(".full-video>div").style.display =
    //   "none");
    // const vidDiv2 = (document.querySelector(".full-video>div").innerHTML = "");
    //  console.log(vidDiv, vidDiv2);
    //so we don't have to click twice to repaly if we close the player
    setTrackVideoDisplay(!trackVideoDisplay);
  };
  const mobilesizedvideos = [
    {
      original: vidthumb1,
      originalAlt: "LUCKNOW DJ VIDEO",
      //DONOT MAKE LAZY EVEN FOR OPTIMIZATION.IT WILL MESS WITH POSITIONING OF PLAY BUTTON DURING TRANSITION
      loading: "eager",
      originalHeight: "640",
      originalWidth: "480",
    },
    {
      original: vidthumb2,
      originalAlt: "LUCKNOW DJ VIDEO",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "480",
    },
    {
      original: vidthumb3,
      originalAlt: "LUCKNOW DJ VIDEO",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "480",
    },
    {
      original: vidthumb4,
      originalAlt: "BEST DJ IN LUCKNOW",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "480",
    },
    {
      original: vidthumb5,
      originalAlt: "BEST DJ IN LUCKNOW",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "480",
    },

    {
      original: vidthumb6,
      originalAlt: "BEST DJ IN LUCKNOW",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "480",
    },
    {
      original: vidthumb7,
      originalAlt: "BEST DJ IN LUCKNOW",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "480",
    },

    {
      original: vidthumb8,
      originalAlt: "DJ LUCKNOW",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "480",
    },
    {
      original: vidthumb9,
      originalAlt: "DJ IN LUCKNOW",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "480",
    },
    {
      original: vidthumb10,
      originalAlt: "DJ IN LUCKNOW",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "eager",
    },
  ];

  const fullsizedvideos = [
    {
      original: vidthumbfullsized1,
      originalAlt: "DJ IN LUCKNOW",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "480",
    },
    {
      original: vidthumbfullsized2,
      originalAlt: "DJ IN LUCKNOW",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "480",
    },
    {
      original: vidthumbfullsized3,
      originalAlt: "DJ IN LUCKNOW",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "480",
    },
    {
      original: vidthumbfullsized4,
      originalAlt: "LUCKNOW DJ",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "480",
    },
    {
      original: vidthumbfullsized5,
      originalAlt: "LUCKNOW DJ",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "480",
    },

    {
      original: vidthumbfullsized6,
      originalAlt: "LUCKNOW DJ",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "480",
    },
    {
      original: vidthumbfullsized7,
      originalAlt: "LUCKNOW DJ",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "480",
    },

    {
      original: vidthumbfullsized8,
      originalAlt: "BEST DJ IN LUCKNOW",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "480",
    },
    {
      original: vidthumbfullsized9,
      originalAlt: "BEST DJ IN LUCKNOW",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "480",
    },
    {
      original: vidthumbfullsized10,
      originalAlt: "DJ IN LUCKNOW",
      loading: "eager",
      originalHeight: "640",
      originalWidth: "eager",
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

      {window.outerWidth > 480 && (
        <>
          <ImageGallery
            items={fullsizedvideos}
            ref={refImg}
            showPlayButton={true}
            showThumbnails={false}
            showFullscreenButton={false}
            lazyLoad={true}
            renderCustomControls={renderCustomControls}
            additionalClass="Imclass"
            onScreenChange={(bool) => {
              console.log(bool);
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
                    url: "https://www.youtube.com/embed/OfHa26zP6ek",
                    type: "video",
                    title: "SM Sound Services 1",
                  },
                  {
                    url: "https://www.youtube.com/embed/YRWA2yzLWAI",
                    type: "video",
                    title: "SM Sound Services 2",
                  },
                  {
                    url: "https://www.youtube.com/embed/gAPxzzNtAlM",
                    type: "video",
                    title: "SM Sound Services 3",
                  },
                  {
                    url: "https://www.youtube.com/embed/n29zdMKwUEY",
                    type: "video",
                    title: "SM Sound Services 4",
                  },
                  {
                    url: "https://www.youtube.com/embed/SeiSfni_K6o",
                    type: "video",
                    title: "SM Sound Services 5",
                  },
                  {
                    url: "https://www.youtube.com/embed/T-z7fJ9R1Nk",
                    type: "video",
                    title: "SM Sound Services 6",
                  },
                  {
                    url: "https://www.youtube.com/embed/s_Ym1hbwv9M",
                    type: "video",
                    title: "SM Sound Services 7",
                  },
                  {
                    url: "https://www.youtube.com/embed/mRwSP2HljOw",
                    type: "video",
                    title: "SM Sound Services 8",
                  },
                  {
                    url: "https://www.youtube.com/embed/w-7rzw0l2Gk",
                    type: "video",
                    title: "SM Sound Services 9",
                  },
                  {
                    url: "https://www.youtube.com/embed/e_33vfVat7E",
                    type: "video",
                    title: "SM Sound Services 10",
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
      )}

      {window.outerWidth <= 480 && (
        <>
          <ImageGallery
            items={mobilesizedvideos}
            ref={refImg}
            showPlayButton={true}
            showThumbnails={false}
            showFullscreenButton={false}
            lazyLoad={true}
            renderCustomControls={renderCustomControls}
            additionalClass="Imclass"
            onScreenChange={(bool) => {
              console.log(bool);
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
                    url: "https://www.youtube.com/embed/OfHa26zP6ek",
                    type: "video",
                    title: "SM Sound Services 1",
                  },
                  {
                    url: "https://www.youtube.com/embed/YRWA2yzLWAI",
                    type: "video",
                    title: "SM Sound Services 2",
                  },
                  {
                    url: "https://www.youtube.com/embed/gAPxzzNtAlM",
                    type: "video",
                    title: "SM Sound Services 3",
                  },
                  {
                    url: "https://www.youtube.com/embed/n29zdMKwUEY",
                    type: "video",
                    title: "SM Sound Services 4",
                  },
                  {
                    url: "https://www.youtube.com/embed/SeiSfni_K6o",
                    type: "video",
                    title: "SM Sound Services 5",
                  },
                  {
                    url: "https://www.youtube.com/embed/T-z7fJ9R1Nk",
                    type: "video",
                    title: "SM Sound Services 6",
                  },
                  {
                    url: "https://www.youtube.com/embed/s_Ym1hbwv9M",
                    type: "video",
                    title: "SM Sound Services 7",
                  },
                  {
                    url: "https://www.youtube.com/embed/mRwSP2HljOw",
                    type: "video",
                    title: "SM Sound Services 8",
                  },
                  {
                    url: "https://www.youtube.com/embed/w-7rzw0l2Gk",
                    type: "video",
                    title: "SM Sound Services 9",
                  },
                  {
                    url: "https://www.youtube.com/embed/e_33vfVat7E",
                    type: "video",
                    title: "SM Sound Services 10",
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
      )}
    </>
  );
};
export default Portfolio;
