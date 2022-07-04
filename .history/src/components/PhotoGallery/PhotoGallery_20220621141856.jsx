import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./PhotoGallery.css";

const PhotoGallery = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="photogallery" id="photogallery">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Photo gallery</span>
    </div>
  );
};
export default PhotoGallery;
