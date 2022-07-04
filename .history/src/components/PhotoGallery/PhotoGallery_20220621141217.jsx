import React from "react";
import "./PhotoGallery.css";
const PhotoGallery = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Photo gallery</span>
    </div>
  );
};
export default PhotoGallery;
