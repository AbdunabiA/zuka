import s from './header.module.scss'
import logo from 'assets/icons/logo.svg'
import phone from 'assets/icons/phone.svg'
import humburger from 'assets/icons/dots.svg'
import bannerDress from 'assets/images/bannerDress.png'
import arrowLeft from 'assets/icons/arrowLeft.svg'
import arrowRight from 'assets/icons/arrowRight.svg'
import dress from 'assets/icons/dress.svg'
import poeple from 'assets/icons/people.svg'
import graph from 'assets/icons/diagram.svg'
import workers from 'assets/icons/workers.svg'
import { useRef, useState } from 'react'
import { useSwiper } from "swiper/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Header = () => {
  const [active, setActive] = useState(false)
  const sliderRef = useRef(null);
  return (
    <header>
      <div className={s.blue_bg}>
        <div className="container">
          <nav className={s.nav}>
            <div>
              <div className={s.logo}>
                <img src={logo} alt="logo" />
              </div>
              <ul className={s.ul}>
                <li>
                  <a href="#">Biz haqimizda</a>
                </li>
                <li>
                  <a href="#">Katalog</a>
                </li>
                <li>
                  <a href="#">Bog’lanish</a>
                </li>
              </ul>
            </div>

            <div>
              <div className={s.languages}>
                <p>O'zb</p>
                <p>|</p>
                <p>Ру</p>
              </div>
              <div className={s.phone_number}>
                <img src={phone} alt="phone" />
                <a href="tel:+998 90 906 23 25">+998 90 906 23 25</a>
              </div>
            </div>

            <div className={s.humburger} onClick={() => setActive(true)}>
              <img src={humburger} alt="" />
            </div>

            <div
              className={`${s.phone_nav} ${active ? s.active : ""}`}
              id="cover"
              onClick={(e) => {
                if (e.target.id === "cover") {
                  setActive(false);
                }
              }}
            >
              <div>
                <ul>
                  <li onClick={() => setActive(false)}>X</li>
                  <li>
                    <a href="#">Biz haqimizda</a>
                  </li>
                  <li>
                    <a href="#">Katalog</a>
                  </li>
                  <li>
                    <a href="#">Bog’lanish</a>
                  </li>
                  <li className={s.phone_languages}>
                    <p>O'zb</p>
                    <p>|</p>
                    <p>Ру</p>
                  </li>
                  <li className="">
                    <a href="tel:+998 90 906 23 25">+998 90 906 23 25</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className={s.banner}>
          <div className={s.slider}>
            <div
              onClick={() => {
                if (!sliderRef.current) return;
                sliderRef.current.swiper.slidePrev();
              }}
              className={s.arrow_left}
            >
              <img src={arrowLeft} alt="img" />
            </div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              // navigation
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              ref={sliderRef}
            >
              <SwiperSlide>
                <div className={s.swiper_slide}>
                  <div className={s.red}>
                    <h2>Maktab kiyimlari uchun katta chegirma!</h2>
                    <p>Shoshiling, ro‘yhatdan o‘ting</p>
                    <button>Bog‘lanish</button>
                  </div>
                  <div className={s.yellow}>
                    <div>
                      <img src={bannerDress} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={s.swiper_slide}>
                  <div className={s.red}>
                    <h2>Maktab kiyimlari uchun katta chegirma!</h2>
                    <p>Shoshiling, ro‘yhatdan o‘ting</p>
                    <button>Bog‘lanish</button>
                  </div>
                  <div className={s.yellow}>
                    <div>
                      <img src={bannerDress} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={s.swiper_slide}>
                  <div className={s.red}>
                    <h2>Maktab kiyimlari uchun katta chegirma!</h2>
                    <p>Shoshiling, ro‘yhatdan o‘ting</p>
                    <button>Bog‘lanish</button>
                  </div>
                  <div className={s.yellow}>
                    <div>
                      <img src={bannerDress} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div
              onClick={() => {
                if (!sliderRef.current) return;
                sliderRef.current.swiper.slideNext();
              }}
              className={s.arrow_right}
            >
              <img src={arrowRight} alt="" />
            </div>
          </div>
        </div>

        <div className={s.phone_button}>
          <button>Bog‘lanish</button>
        </div>

        <div className={s.statistics}>
          {/* <div> */}
            <div className={s.stat}>
              <div>
                <img src={dress} alt="img" />
              </div>
              <div>
                <h4>+50</h4>
                <p>mahsulotlar</p>
              </div>
            </div>
            <div className={s.stat}>
              <div>
                <img src={poeple} alt="" />
              </div>
              <div>
                <h4>+60</h4>
                <p>mijozlar</p>
              </div>
            </div>
          {/* </div> */}

          {/* <div> */}
            <div className={s.stat}>
              <div>
                <img src={graph} alt="" />
              </div>
              <div>
                <h4>+2 yil</h4>
                <p>Tajriba</p>
              </div>
            </div>
            <div className={s.stat}>
              <div>
                <img src={workers} alt="" />
              </div>
              <div>
                <h4>+30</h4>
                <p>ishchilar</p>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header