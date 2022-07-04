import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./PhotoGallery.css";
import ImageGallery from "react-image-gallery";

const PhotoGallery = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="photogallery" id="photogallery">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Events</span>
      <span>Photo gallery</span>

      <ImageGallery items={images} />
    </div>
  );
};
export default PhotoGallery;
