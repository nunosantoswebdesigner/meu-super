import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import Wrapper from "@/components/Wrapper";
import MainTitle from "@/components/MainTitle";
import Image from "next/image";
const Marcas = () => {
  return (
    <>
    <Wrapper>
      <MainTitle title={'Marcas'} subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'}/>
    </Wrapper>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576:  {slidesPerView: 1.5 },
          768:  {slidesPerView: 2.5 },
          991:  {slidesPerView: 3.5 },
          1200: {slidesPerView: 4.5 },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image width={225} height={225} src={'/marcas/marca-1.jpeg'} alt={'name here'}/>
          <div className="text-center mt-5 font-bold">Continente</div>
        </SwiperSlide>
        <SwiperSlide>
          <Image width={225} height={225} src={'/marcas/marca-2.jpeg'} alt={'name here'}/>
          <div className="text-center mt-5 font-bold">Continente Equilíbrio</div>
        </SwiperSlide>
        <SwiperSlide>
          <Image width={225} height={225} src={'/marcas/marca-3.jpeg'} alt={'name here'}/>
          <div className="text-center mt-5 font-bold">Continente Bio</div>
        </SwiperSlide>
        <SwiperSlide>
          <Image width={225} height={225} src={'/marcas/marca-4.jpeg'} alt={'name here'}/>
          <div className="text-center mt-5 font-bold">Continente Eco</div>
        </SwiperSlide>
        <SwiperSlide>
          <Image width={225} height={225} src={'/marcas/marca-5.jpeg'} alt={'name here'}/>
          <div className="text-center mt-5 font-bold">Continente Seleção</div>
        </SwiperSlide>
        <SwiperSlide>
          <Image width={225} height={225} src={'/marcas/marca-6.jpeg'} alt={'name here'}/>
          <div className="text-center mt-5 font-bold">Continente do Bebé</div>
        </SwiperSlide>
       
      </Swiper>
      </>
  );
};

export default Marcas;
