import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
//import Works from "./components/Works/Works";
//import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import { TailSpin } from "react-loader-spinner";
import Portfolio from "./components/Portfolio/Portfolio";
//import Testimonial from "./components/Testimonials/Testimonial";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import React, { useContext } from "react";
import { themeContext } from "./Context";
//FOR TESTING
// const PhotoGallery = React.lazy(() => {
//   return new Promise((resolve) => setTimeout(resolve, 10000)).then(() =>
//     import("./components/PhotoGallery/PhotoGallery")
//   );
// });
const PhotoGallery = React.lazy(() =>
  import("./components/PhotoGallery/PhotoGallery")
);
//const Portfolio = React.lazy(() => import("./components/Portfolio/Portfolio"));
const Testimonial = React.lazy(() =>
  import("./components/Testimonials/Testimonials")
);
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />

      <React.Suspense
        fallback={
          <div
            style={{
              height: "60px",
              display: "flex",

              justifyContent: "center",
            }}
          >
            <TailSpin color="#FCA61F" height={80} width={80} />
          </div>
        }
      >
        <PhotoGallery />
      </React.Suspense>

      <Portfolio />
      {/* portfolio is now video gallery */}
      <React.Suspense
        fallback={
          <div
            style={{
              height: "60px",
              display: "flex",

              justifyContent: "center",
            }}
          >
            <TailSpin color="#FCA61F" height={80} width={80} />
          </div>
        }
      >
        <Testimonial />
      </React.Suspense>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
