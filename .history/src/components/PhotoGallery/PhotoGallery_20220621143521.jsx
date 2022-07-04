import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./PhotoGallery.css";
import ImageGallery from "react-image-gallery";

const PhotoGallery = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
    },
  ];
  return (
    <div className="photogallery" id="photogallery">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Events</span>
      <span>Photo gallery</span>

     
    </div>
     <ImageGallery items={images} />
  );
};
export default PhotoGallery;
