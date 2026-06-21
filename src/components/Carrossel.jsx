import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import banner1 from "../assets/banner1.png"
import banner2 from "../assets/banner2.png"
import banner3 from "../assets/banner3.png"

export default function Carrossel() {

  const banners = [
    banner1,
    banner2,
    banner3,
    banner1,
    banner2,
    banner3,
  ]

  return (
    <div className="mt-6 w-full relative z-0">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}

        navigation

        pagination={{
          clickable: true,
        }}

        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}

        loop={true}

        centeredSlides={true}

        slidesPerView={1.15}

        slidesPerGroup={1}

        spaceBetween={20}

        className="w-full z-0"
      >

        {banners.map((banner, index) => (

          <SwiperSlide key={index}>

            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="w-full h-[500px] object-cover rounded-3xl"
            />

          </SwiperSlide>

        ))}

      </Swiper>

    </div>
  )
}