import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>
          Whatever the Celebration,
        </span>
        <span>We got you covered.</span>
        <span>
          Whether it's a wedding, birthday party, family or class reunion,
          anniversary party, corporate event, holiday party, fund raiser, prom,
          or school dance, we are Lucknow's most trusted DJ service. If you are
          looking for a quality DJ with almost 12 years of professional
          experience, you've come to the right place.
        </span>
        <a href={Resume} download>
          <button className="button s-button" style={{ marginTop: "2rem" }}>
            View Gallery
          </button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Weddings"}
            detail={
              "Be it your most special day,or an anniversary,we will make it more special."
            }
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Birthdays"}
            detail={
              "Book to make yours or a loved ones  birthday the day they will never forget.And neither will anyone else."
            }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Parties"}
            detail={
              "Let us bring that extra 'Zing' to your party,trust us we know how to make you groove to your own rhythm."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
