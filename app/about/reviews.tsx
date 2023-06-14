"use client"
import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"

interface Review {
  name: string
  reviewText: string
}

export default function Reviews() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviewsArray.map((review) => {
          return (
            <SwiperSlide className="w-40 h-40 bg-gray-200">
              <Slide review={review} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

const Slide = ({ review }: { review: Review }) => {
  return (
    <div>
      <div className="h-48 border-2 rounded-lg shadow-md w-96">
        {review.name}
      </div>
      <div>{review.reviewText}</div>
    </div>
  )
}

const reviewsArray: Review[] = [
  {
    name: "John Doe",
    reviewText: "",
  },
  {
    name: "John Doe",
    reviewText: "",
  },
  {
    name: "John Doe",
    reviewText: "",
  },
  {
    name: "John Doe",
    reviewText: "",
  },
  {
    name: "John Doe",
    reviewText: "",
  },
]
