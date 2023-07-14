"use client"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import GoogleLogo from "/public/about/googleLogo.png"
import Image from "next/image"
interface Review {
  name: string
  reviewText: string
  date: string
  image: string
}

export default function Reviews() {

  // const [matches, setMatches] = useState(
    const matches = typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches
  // )

  // useEffect(() => {
  //   typeof window !== "undefined" && window
  //   .matchMedia("(min-width: 768px)")
  //   .addEventListener('change', e => setMatches( e.matches ));
  // }, []);


  return (
    <div className="flex justify-center mt-10 sm:mt-20">
      <div className="max-w-sm px-2 sm:max-w-6xl md:max-w-7xl">
        <Swiper
          slidesPerView={!matches ? 1.2 : 3.5}
          spaceBetween={!matches ? 10 : 20}
          effect="fade"
          // loop={true}
          // modules={[Pagination]}
          // className="mySwiper"
        >
          {reviewsArray.map((review, i) => {
            return (
              <SwiperSlide key={i}  className="rounded-lg">
                <Slide review={review} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

const Slide = ({ review }: { review: Review }) => {
  return (
    <div>
      <div className="h-64 px-3 py-2 bg-white border-2 rounded-lg shadow-md sm:h-60">
        <div className="flex justify-between">
          <div className="flex flex-row">
            <div className="pt-1">
              <Image
                src={review.image}
                height={32}
                width={32}
                alt={`${review.name}'s photo`}
              />
            </div>
            <div className="px-2">
              <div>{review.name}</div>
              <div className="text-xs">{review.date}</div>
            </div>
          </div>
          <div className="">
            <Image width={20} height={20} src={GoogleLogo} alt="Google Logo" />{" "}
          </div>
        </div>
        <Image className="my-2" src="/about/5stars.svg" height={20} width={100} alt="5 starts" />
        <div className="mt-3">{review.reviewText}</div>
      </div>
    </div>
  )
}

const reviewsArray: Review[] = [

  {
    name: "Steve Crombie",
    reviewText: `Colorado Geoff has always been super helpful every time.`,
    date: "April 2023",
    image: "/about/reviews/steve.png",
  },
  {
    name: "Hay Sampson",
    reviewText:
      "JEFF IS THE ABSOLUTE BEST I LOVE HIM HE IS SO FRIENDLY!!",
    date: "April 2023",
    image: "/about/reviews/hay.png",
  },
  {
    name: "Morgan Johnson",
    reviewText: "Geoff was great. Thank you!!",
    date: "April 2023",
    image: "/about/reviews/morgan.png",
  },
  {
    name: "microx7WR",
    reviewText:
      "Jeff is a great great guy, he helped me heaps! All around very happy, would recommend!",
    date: "March 2023",
    image: "/about/reviews/micro.png",
  },
  {
    name: "Joshua Wotton",
    reviewText: `Awesome! Super helpful - thanks for looking after me! 5⭐️⭐️⭐️⭐️⭐️`,
    date: "March 2023",
    image: "/about/reviews/joshua.png",
  },
  {
    name: "Paul Ruscher",
    reviewText: `Sooooo Nice !!!
    Great job`,
    date: "March 2023",
    image: "/about/reviews/paul.png",
  },
  {
    name: "Merumo",
    reviewText: `Thank you for helping me! :)`,
    date: "March 2023",
    image: "/about/reviews/merumo.png",
  },
  {
    name: "Chiara Caggiani",
    reviewText: `Jeff solved my problem right away. I’ll definitely be back:)`,
    date: "March 2023",
    image: "/about/reviews/chiara.png",
  },
  {
    name: "Manuela lesmes diaz",
    reviewText:
      "Perfect service, thanks Jeff! 🤙🏽 …",
    date: "March 2023",
    image: "/about/reviews/manuela.png",
  },
  {
    name: "Sofia Mandarini",
    reviewText: `Very good attention and kindness. I definitely recommend 👌 👍🏻 😉 …`,
    date: "January 2023",
    image: "/about/reviews/sofia.png",
  },
  {
    name: "Matilda Raupach",
    reviewText: `Geoff was great - majorly helped me out. Thank you!!!`,
    date: "January 2023",
    image: "/about/reviews/matilda.png",
  },
]
