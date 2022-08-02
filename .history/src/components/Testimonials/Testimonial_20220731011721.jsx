import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "पुरे लखनऊ में हमें इनकी डीजे सर्विस सबसे अच्छी लगी । बहुत ही टाइमली सारा काम मैनेज हुआ यहाँ से । ",
    },
    {
      img: profilePic2,
      review:
        "साउंड क्वालिटी बहुत ही अच्छी है, सुनने में बहुत अच्छा और मीठा साउंड हैं,और डिस्क जॉकी गान बजाने वाले का बहुत अच्छा और हेल्पफुल नेचर है। ",
    },
    {
      img: profilePic3,
      review:
        "Awesome mike and live setup here.Really loved the live band and Orchestra performance we booked through SM DJ. ",
    },
    {
      img: profilePic4,
      review:
        "थैंक यू , सम डीजे  हमारी शादी को और भी यादगार बनाने के लिए। आपका बहुत बहुत धन्यवाद । ",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Hear from our </span>
        <span>Valued </span>
        <span>Clients</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
