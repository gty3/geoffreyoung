"use client"
// import React, { useRef, useState } from "react"
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
}

export default function Reviews() {
  return (
    <div className="flex justify-center ">
    < div className="max-w-6xl ">
      <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        // loop={true}
        modules={[Pagination]}
        // className="mySwiper"
      >
        {reviewsArray.map((review) => {
          return (
            <SwiperSlide className="rounded-lg">
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
      <div className="h-48 border-2 rounded-lg shadow-md">
        <div className="flex justify-between">
        <div className="px-3 py-2">{review.name}</div>
        <div className="px-3 py-2 end-0"><Image width={20} height={20} src={GoogleLogo} alt="Google Logo"/> </div>
        
        </div>
        <div>{review.reviewText}</div>
      </div>
      
    </div>
  )
}

const reviewsArray: Review[] = [
  {
    name: "Taylah Fanshaw",
    reviewText: `The boys and Jeff at the bike shop are absolute legends and saved me from the perils of flat tires and my own lack of bike knowledge on two occasions!!!!!
    Thanks to them I am now back into the cycle of things 🚴🚴`,
    date: "June 2023",
    // image: ""
  },
  {
    name: "ANTONIA VERMEIJ MIDDLETON",
    reviewText: `My bike needed maintenance and I took it to the shop. Juan and Jeff help me out checking the bike and fixing every detail that my bike needed. Now it is working like new. Very happy with the professional work that they did`,
    date: "May 2023",
  },
  {
    name: "Camila Valenzuela",
    reviewText: `Great bike shop! Thank you Jeff and Juan for your help during our visit to the shop :) Highly recommend if your looking for a bike shop`,
    date: "April 2023",
  },
  {
    name: "Steve Crombie",
    reviewText: `Colorado Geoff has always been super helpful every time I’ve come in store. Whether renting bikes for friends, buying parts or fixing up the stupid things I do to my bike.`,
    date: "April 2023",
  },
  {
    name: "Anna Lawrence",
    reviewText: "Went by here to get the seat adjusted on my used bike. Super simple task but Jeff was happy to help! Glad to have this shop close by in town.",
    date: "April 2023",
  },
  {
    name: "Hay Sampson",
    reviewText: "JEFF IS THE ABSOLUTE BEST I LOVE HIM GO HERE THEY ARE SO FRIENDLY!!",
    date: "April 2023",
  },
  {
    name: "Morgan Johnson",
    reviewText: "Geoff was a great mechanic. Thank you!!",
    date: "April 2023",
  },
  {
    name: "Gisela de León",
    reviewText: "Best bike shop in Byron. Ask for Geoff, he is the guy, super friendly and professional, always willing to help out.",
    date: "March 2023",
  },
  {
    name: "microx7WR",
    reviewText: "Jeff is a great great guy, he helped me heaps! All around very happy, would recommend everybody - best store in town!",
    date: "March 2023",
  },
  {
    name: "Joshua Wotton",
    reviewText: `Awesome shop! Super helpful staff - shout out to Jeff for looking after me! 5⭐️⭐️⭐️⭐️⭐️`,
    date: "March 2023",
  },
  {
    name: "Mar Romero Ribalta",
    reviewText: `The first time I visited this place and bought my current electric bike there, it was not really the experience I expected, the guy who sold it to me was 0 empathetic, I could realised he didn't feel like working, he seemed annoyed by my questions all the time and he explained practically nothing to me regarding the operation of the electric bicycle that I was buying... he was really unfriendly and 0 professional.

    With the passage of time, the brake on my bicycle has started to stop working correctly, I did not want to visit this site again because I would not have to come across it again, but since it is something as important as the brake on my bike, I did not I had no choice but to go.  Last Monday I decided to visit this place one more time crossing my fingers because the guy who sold me my bike wasn't there.
    
    To my surprise I ran into a completely friendly guy, who explained to me very well what was happening with the brake on my bicycle, he gave me an estimate of what it would cost to change both brakes, he adjusted one of them without any extra cost, he paid attention to all the details and as if that were not enough, he sprayed both brakes with a special fluid to see if the condition of my brakes improved.  It was a deal of 10 and I realised that he is a great professional and the most important thing: that he knows how to deal with clients properly, thank you very much Jeff, for your help, your time and your professionalism.`,
    date: "March 2023",
  },
  {
    name: "Paul Ruscher",
    reviewText: `Sooooo Nice !!!
    Great job
    Great team
    Great Jeff`,
    date: "March 2023",
  },
  {
    name: "Merumo",
    reviewText: `This's a great shop!
    Thank you for helping me Jeff! :)`,
    date: "March 2023",
  },
  {
    name: "Chira Caggiani",
    reviewText: `Excelent staff. I went to Freedom Machine asking for help, without being a client, since my bike lock got stuck and Jeff solve my problem right away. I’ll definitely be back:)`,
    date: "March 2023",
  },
  {
    name: "Manuela lesmes diaz",
    reviewText: "Perfect service, I get my bike fixed, the staff is really nice, thanks Jeff for the service! 🤙🏽 …",
    date: "March 2023",
  },
  {
    name: "Sofia Mandarini",
    reviewText: `Very good attention and kindness, Joffrey helped me with the brake on my bike that was broken, I fixed it in just a few minutes, he was very kind. I definitely recommend it 👌 👍🏻 😉 …`,
    date: "January 2023",
  },
  {
    name: "Matilda Raupach",
    reviewText: `Geoff was a great mechanic - majorly helped me out when I needed to unlock my bike. Thank you!!!`,
    date: "January 2023",
  },
]
