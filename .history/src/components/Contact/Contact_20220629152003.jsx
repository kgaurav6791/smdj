import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  return (
    <div
      className="contact-form"
      id="contact"
      method="post"
      onSubmit="submitform"
    >
      {/* left side copy and paste from work section */}
      <div className="w-left" style={{ flex: "1" }}>
        <div
          className="awesome"
          style={{
            display: "flex",

            justifyContent: "center",
          }}
        >
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
      <div className="c-right" style={{ flex: "1" }}>
        <div className="awesome">
          <span style={{}}>Contact Us</span>
          <form
            data-netlify="true"
            name="contact"
            method="POST"
            style={{ marginTop: "1rem" }}
            // onSubmit="submit"
          >
            {/* for netlify  */}
            <input type="hidden" name="form-name" value="contact" />

            <input
              type="text"
              name="name"
              className="user"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="user"
              placeholder="Email"
            />
            <textarea name="message" className="user" placeholder="Message" />
            <input
              type="submit"
              value="Send"
              className="button"
              style={{ display: "flex", width: "fit-content" }}
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