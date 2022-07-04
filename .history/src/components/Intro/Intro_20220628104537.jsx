import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy3.png";
import glassesimoji from "../../img/glassesimoji3.png";
import thumbup from "../../img/thumbup3.png";
import crown from "../../img/crown4.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Welcome to</span>
          <span>SM Digital DJ</span>
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
            <p>
              Whether it's a wedding, birthday party, family or class reunion,
              anniversary party, corporate event, holiday party, fund raiser,
              prom, or school dance, we are Lucknow's most trusted DJ service.
              If you are looking for a quality DJ with almost 12 years of
              professional experience, you've come to the right place.
            </p>
            <p>
              We service all of Western Kentucky including Paducah, Benton,
              Murray, Mayfield, Eddyville, Smithland, Cadiz, Hopkinsville, and
              Madisonville. We also travel to Carbondale, Harrisburg, and Marion
              in Southern Illinois; Sikeston, Poplar Bluff, and Cape Girardeau
              in Southeast Missouri; and Paris, Clarksville, and Nashville in
              Tennessee.
            </p>
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-16%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Book" text2="Now" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
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
