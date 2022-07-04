import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Find Us</span>

          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                title="gmap"
                width="100%"
                height="400"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=sm%20digital%20dj%20lucknow&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>

              <br />
              <a href="https://www.embedgooglemap.net"></a>
            </div>
          </div>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <div className="awesome">
          <span>Contact Us</span>
          <form ref={form} onSubmit={sendEmail} data-netlify="true">
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="Email"
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              style={{ marginTop: "1rem" }}
            />
            <input
              type="submit"
              value="Send"
              className="button"
              style={{ display: "flex" }}
            />
            <span>{done && "Thanks for Contacting me"}</span>
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
