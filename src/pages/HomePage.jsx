// src/pages/HomePage.jsx
import React, { useState } from "react";

// 1) Swiper core + React components
import { Swiper, SwiperSlide } from "swiper/react";
// 2) Import the Mousewheel module from Swiper’s modules folder
import { Mousewheel } from "swiper/modules";
// 3) Swiper styles
import "swiper/css";
import "swiper/css/mousewheel";

// 4) Your own components
import NavBar from "../components/NavBar/NavBar";
import Sidebar from "../components/Sidebar/Sidebar";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import HeroListOverlay from "../components/HeroListOverlay/HeroListOverlay";
import HomePageSection2 from "../components/HomePageSection2/HomePageSection2";
import HomePageSection3 from "../components/HomePageSection3/HomePageSection3";

import GalleryShowcase from "./GalleryShowcase";

import "./HomePage.css";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* fixed top navbar + drawer */}
      <NavBar onMenuClick={() => setMenuOpen((o) => !o)} />
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* full-page swiper in vertical mode */}
      <div className={menuOpen ? "content-wrapper shifted" : "content-wrapper"}>
        <Swiper
          direction="vertical"
          slidesPerView={1}
          mousewheel={{ releaseOnEdges: true }}
          modules={[Mousewheel]}
          speed={600}
          className="my-swiper"
        >
          <SwiperSlide>
            <div className="home-hero-container">
              <HeroCarousel />
              <HeroListOverlay />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <HomePageSection2 />
          </SwiperSlide>

          <SwiperSlide>
            <HomePageSection3 />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
