import React from "react";
import "./FoodMenus.css";
import images from "../../constants/images";
import MenuCard from "../menu-card/MenuCard";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function FoodMenus() {
  return (
    <div className="app__foodmenus">
      <div className="app__foodmenus__header">
        <h1>Our food menus</h1>
        <p>
          Indulge in a gastronomic adventure at our restaurant, where each dish
          is a harmonious blend of flavors and textures. From savory starters to
          decadent desserts, our culinary creations are sure to tantalize your
          taste buds and leave you craving for more. Bon appétit!
        </p>
      </div>

      <div className="app__foodmenus__swipper">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          // slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <MenuCard
              image={images.Motton}
              title="Motton biryani recipe"
              price="8.00"
            ></MenuCard>
          </SwiperSlide>
          <SwiperSlide>
            <MenuCard
              image={images.Chicken}
              title="Chicken roast recipe"
              price="6.30"
            ></MenuCard>
          </SwiperSlide>
          <SwiperSlide>
            <MenuCard
              image={images.Pasta}
              title="Great Paste"
              price="6.55"
            ></MenuCard>
          </SwiperSlide>
          <SwiperSlide>
            <MenuCard
              image={images.GrilledChickenSalad}
              title="Grilled Chicken Salad"
              price="4.75"
            ></MenuCard>
          </SwiperSlide>
          <SwiperSlide>
            <MenuCard
              image={images.Motton}
              title="Motton biryani recipe"
              price="8.00"
            ></MenuCard>
          </SwiperSlide>
          <SwiperSlide>
            <MenuCard
              image={images.Chicken}
              title="Chicken roast recipe"
              price="6.30"
            ></MenuCard>
          </SwiperSlide>
          <SwiperSlide>
            <MenuCard
              image={images.Pasta}
              title="Great Paste"
              price="6.55"
            ></MenuCard>
          </SwiperSlide>
          <SwiperSlide>
            <MenuCard
              image={images.GrilledChickenSalad}
              title="Grilled Chicken Salad"
              price="4.75"
            ></MenuCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
