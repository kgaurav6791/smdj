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
      <div className="w-left" style={{ flex: "0 0 60%" }}>
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
              {console.log("does it work")}
              {
                //WHEN INSIDE JSX START A NEW ARROW FUNCTION IF YOU WANT TO DO ANY COMPLICATED MULTILINE JAVASCRIPT
                const appp = () => {
                  console.log("does it not work");
                  if (window.outerWidth <= 768) {
                    document.querySelector(".gmap_canvas").style.width =
                      "420px";
                    console.log("does it nnnnnnnnnwork");
                  } else {
                  }
                }
              }
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=sm%20dj%20night&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right" style={{ flex: "0 0 40%" }}>
        <div className="awesome">
          <span style={{}} id="contactus">
            Contact Us
          </span>
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
            <input
              type="tel"
              name="contactno"
              className="user"
              pattern="[0-9]{10}"
              placeholder="Mobile No"
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
