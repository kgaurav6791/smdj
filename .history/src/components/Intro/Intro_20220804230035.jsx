import React, { useContext } from "react";
import "./Intro.css";
// import Vector1 from "../../img/Vector1.webp";
// import Vector2 from "../../img/Vector2.webp";
// import boy from "../../img/boy12.webp";
import combined from "../../img/combined.webp";
import glassesimoji from "../../img/glassesimoji3.webp";
import thumbup from "../../img/thumbup3.webp";
import crown from "../../img/crown4.webp";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/facebook.webp";
import LinkedIn from "../../img/whatsapp.webp";
import Instagram from "../../img/instagram.webp";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };
  const disctransition = { duration: 15, repeat: Infinity };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>SM DJ NIGHT</span>
          <span>& All Kind Of Sound Services</span>
          <span>
            <p>
              We are Lucknow's most requested DJ. With over 800 shows in a 12 yr
              career! You want an experienced DJ, then book US! We have a
              library of 10,000+ songs of genres like Bollywood, Commercial
              House, EDM, Hip-bounce, International, Punjabi and Rock!!
            </p>
            <p>
              Our rates all depend on the types of add-ons you select as well as
              length of time you desire. We make it a requirement to MEET with
              all our clients making sure that you get an exact and accurate
              quote, not an estimate.
            </p>
          </span>
        </div>
        <Link to="submitcontactslider" smooth={true} spy={true}>
          <button
            className="button i-button"
            style={{ padding: 0, textDecoration: "bold", fontSize: "15px" }}
          >
            Contact Details
          </button>
        </Link>
        {/* social icons */}

        <div className="i-icons">
          <span className="share">Share Us:</span>
          <a
            className="share"
            href="https://www.facebook.com/sharer.php?u=https://smdjlucknow.in/"
          >
            <img
              src={Github}
              title="Share on Facebook"
              alt="facebook sharing link"
            />
          </a>
          <a
            className="share"
            href="https://wa.me/?text=Best%20DJ%20and%20sound%20services%20in%20Lucknow%21BOOK%20NOW%21%21%21%21https%3A%2F%2Fsmdjlucknow.in%2F%0A%0A"
          >
            <img
              src={LinkedIn}
              title="Share on Whatsapp"
              alt="whatsapp sharing link"
            />
          </a>

          <img
            src={Instagram}
            title="Share on Instagram"
            alt="instagram sharing link"
          />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        {/* <img src={Vector1} alt="" />
        <img src={Vector2} alt="" /> */}
        <img src={combined} alt="" />
        {/* <img src={boy} alt="" /> */}
        {/* disc animation */}
        <motion.img
          // initial={{ left: "-36%" }}
          // whileInView={{ left: "-16%" }}
          transition={disctransition}
          src={glassesimoji}
          animate={{ rotate: [0, 360, 0] }}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "55%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Book" text2="Now" type="booknow" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "16%", top: "15rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best DJ " text2="in Lucknow" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
