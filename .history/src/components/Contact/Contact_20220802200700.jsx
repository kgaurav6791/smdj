import React, { useContext } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // const form = useRef();
  //done setdone will require ajax ,instead default netlify setup is used
  // const [done, setDone] = useState(false);

  return (
    <div className="contact-form" id="contact" method="post">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div
          className="awesome"
          style={{
            display: "flex",

            justifyContent: "center",
          }}
        >
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Find Us</span>

          <div className="mapouter">
            {window.outerWidth <= 768 && (
              <div className="gmap_canvas_mobile">
                <iframe
                  title="SM DJ Mobile Map"
                  width="500"
                  height="500"
                  id="gmap_canvas_mobile"
                  src="https://maps.google.com/maps?q=sm%20dj%20night&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
              </div>
            )}
            {window.outerWidth > 768 && (
              <div className="gmap_canvas">
                <iframe
                  title="SM DJ Default Map"
                  width="500"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=sm%20dj%20night&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
              </div>
            )}
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
          <span style={{}} id="contactus" name="submitcontactslider">
            Contact Us
          </span>
          <form
            data-netlify="true"
            name="contact"
            method="POST"
            style={{ marginTop: "1rem" }}
          >
            {/* for netlify  */}
            <input type="hidden" name="form-name" value="contact" />

            <input
              type="text"
              name="name"
              className="user"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              className="user"
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="contactno"
              className="user"
              pattern="[0-9]{10}"
              placeholder="Mobile No"
              required
            />
            <textarea name="message" className="user" placeholder="Message" />
            <input
              type="submit"
              value="Send"
              className="button"
              style={{ display: "flex", width: "fit-content" }}
            />
            {/* <span>{done && "Thanks for Contacting me"}</span> */}
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
