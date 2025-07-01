import React from "react";
import { slides } from "../../data/slides"; // brings array from slides.js
import HeroSlide from "./HeroSlide";

// React components provided by the Swiper library ------------------------------------
// Think of <Swiper> as the outer “track” and each <SwiperSlide> as a “rail car”
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // feature-modules that plug into Swiper to give you arrows and autoplay behavior
// -------------------------------------------------------------------------------------
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./HeroCarousel.css";

export default function HeroCarousel() {
  // declares a JavaScript function named HeroCarousel
  return (
    // Inside the function you return JSX that describes the UI tree
    <Swiper
      // modules={[Navigation, Autoplay]}: injects those behaviors into this instance.
      // loop: when it reaches the last slide, it jumps back to the first.
      // autoplay={{ delay: 5000 }}: advance every 5 seconds.
      // className="hero-carousel": hooks up your CSS rules.
      modules={[Navigation, Autoplay]}
      navigation={false} /* hide arrows if you want */
      pagination={false}
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="hero-carousel"
    >
      {slides.map(
        (
          slide // loops over the data array
        ) => (
          <SwiperSlide key={slide.slug}>
            <HeroSlide slide={slide} />
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}

// Swiper is a third-party library for touch-/mouse-driven sliders.
// The React bindings expose two components:
// <Swiper>: the container that manages slide state, modules, and events.
// <SwiperSlide>: a slot for each individual slide.
