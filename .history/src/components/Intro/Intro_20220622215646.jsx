import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy4.png";
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
            We are this area's most requested DJ. With over 1850 shows in a 21
            yr career! You want an experienced DJ, then book US! We have a
            875,000+ song library!!We lead you through each and every activity
            of your wedding! NOW PROVIDING PHOTOBOOTH SERVICES!! our rates all
            depend on the types of add-ons you select as well as length of time
            you desire. we make it a requirement to MEET with all our clients
            making sure that you get an exact snd accurate quote. not an
            estimate. we are your acting wedding coordinator, wedding director,
            entertainer, and emcee.DJs since 2000! most experienced in the area,
            and most referred DJs! Give us a call, and book your consultation
            TODAY!! 270-519-9342. Now offering PHOTOBOOTH SERVICES !! Whether
            it's a wedding, birthday party, family or class reunion, anniversary
            party, corporate event, holiday party, fund raiser, prom, or school
            dance, we are the area's most trusted DJ service. If you are looking
            for a quality DJ with almost 15 years of professional experience,
            you've come to the right place. We service all of Western Kentucky
            including Paducah, Benton, Murray, Mayfield, Eddyville, Smithland,
            Cadiz, Hopkinsville, and Madisonville. We also travel to Carbondale,
            Harrisburg, and Marion in Southern Illinois; Sikeston, Poplar Bluff,
            and Cape Girardeau in Southeast Missouri; and Paris, Clarksville,
            and Nashville in Tennessee. We provide music, dance lighting,
            professional emcee services and announcements, uplighting,
            spotlighting, and several other services tailored to fit your event.
            Having an evening wedding outdoors? No problem, we can spotlight the
            bride as she walks down the aisle. Need to change the color of your
            reception venue to coordinate with your wedding colors? No problem,
            we can change the color of any room by providing uplighting. Having
            a school dance or fund raiser? Don't worry, we carry edited, clean
            versions of all the latest hits. It is YOUR event, and we want to
            make your vision a reality. Weddings are our specialty! With almost
            50 weddings performed last year alone, you can rest assured that you
            are in the best hands possible. Let our years of experience and
            professionalism guide you through one of the most important days of
            your life. We handle everything...from announcing your arrival at
            the reception, to keeping the dance floor packed and your guests
            entertained, and everything in between. Let our wedding specialists
            take all the pressure off of you, so you don't have to worry and can
            enjoy such a special occasion. Call, email, or text us today to
            schedule your no cost to you/free bridal consultation. There is no
            pressure to book and no fees required. We simply want to show you
            what we can do to make your wedding reception an event people will
            be talking about for years to come.
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
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
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
