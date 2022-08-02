import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">SM DJ Night</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              {/* MAKE SURE EACH DIV HAS A NAME .THAT WILL BE USED IN Link to="name" for react-scroll */}
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="popup" spy={true} offset={-100} smooth={true}>
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="photogallery" spy={true} smooth={true}>
                Photo Gallery
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Video Gallery
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contactus" spy={true} smooth={true}>
          <button className="button n-button">Enquiry</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
