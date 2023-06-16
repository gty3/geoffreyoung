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

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);


  return (
    <div className="flex justify-center mt-10 sm:mt-20">
      <div className="max-w-sm px-2 sm:max-w-6xl md:max-w-7xl">
        <Swiper
          slidesPerView={matches ? 3.5 : 1.2}
          spaceBetween={matches ? 20 : 10}
          // loop={true}
          modules={[Pagination]}
          // className="mySwiper"
        >
          {reviewsArray.map((review, i) => {
            return (
              <SwiperSlide key={i} className="rounded-lg">
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
    name: "Taylah Fanshaw",
    reviewText: `The boys and Jeff at the bike shop are absolute legends and saved me from the perils of flat tires and my own lack of bike knowledge on two occasions!!!!!
    Thanks to them I am now back into the cycle of things 🚴🚴`,
    date: "June 2023",
    image: "/about/reviews/taylah.png",
  },
  {
    name: "ANTONIA VERMEIJ MIDDLETON",
    reviewText: `My bike needed maintenance and I took it to the shop. Juan and Jeff help me out checking the bike and fixing every detail that my bike needed. Now it is working like new. Very happy with the professional work that they did`,
    date: "May 2023",
    image: "/about/reviews/antonia.png",
  },
  {
    name: "Camila Valenzuela",
    reviewText: `Great bike shop! Thank you Jeff and Juan for your help during our visit to the shop :) Highly recommend if your looking for a bike shop`,
    date: "April 2023",
    image: "/about/reviews/camila.png",
  },
  {
    name: "Steve Crombie",
    reviewText: `Colorado Geoff has always been super helpful every time I’ve come in store. Whether renting bikes for friends, buying parts or fixing up the stupid things I do to my bike.`,
    date: "April 2023",
    image: "/about/reviews/steve.png",
  },
  {
    name: "Anna Lawrence",
    reviewText:
      "Went by here to get the seat adjusted on my used bike. Super simple task but Jeff was happy to help! Glad to have this shop close by in town.",
    date: "April 2023",
    image: "/about/reviews/anna.png",
  },
  {
    name: "Hay Sampson",
    reviewText:
      "JEFF IS THE ABSOLUTE BEST I LOVE HIM GO HERE THEY ARE SO FRIENDLY!!",
    date: "April 2023",
    image: "/about/reviews/hay.png",
  },
  {
    name: "Morgan Johnson",
    reviewText: "Geoff was a great mechanic. Thank you!!",
    date: "April 2023",
    image: "/about/reviews/morgan.png",
  },
  {
    name: "Gisela de León",
    reviewText:
      "Best bike shop in Byron. Ask for Geoff, he is the guy, super friendly and professional, always willing to help out.",
    date: "March 2023",
    image: "/about/reviews/gisela.png",
  },
  {
    name: "microx7WR",
    reviewText:
      "Jeff is a great great guy, he helped me heaps! All around very happy, would recommend everybody - best store in town!",
    date: "March 2023",
    image: "/about/reviews/micro.png",
  },
  {
    name: "Joshua Wotton",
    reviewText: `Awesome shop! Super helpful staff - shout out to Jeff for looking after me! 5⭐️⭐️⭐️⭐️⭐️`,
    date: "March 2023",
    image: "/about/reviews/joshua.png",
  },
  {
    name: "Mar Romero Ribalta",
    reviewText: `The first time I visited this place and bought my current electric bike there, it was not really the experience I expected, the guy who sold it to me was 0 empathetic, I could realised he didn't feel like working, he seemed annoyed by my questions all the time and he explained practically nothing to me regarding the operation of the electric bicycle that I was buying... he was really unfriendly and 0 professional.

    With the passage of time, the brake on my bicycle has started to stop working correctly, I did not want to visit this site again because I would not have to come across it again, but since it is something as important as the brake on my bike, I did not I had no choice but to go.  Last Monday I decided to visit this place one more time crossing my fingers because the guy who sold me my bike wasn't there.
    
    To my surprise I ran into a completely friendly guy, who explained to me very well what was happening with the brake on my bicycle, he gave me an estimate of what it would cost to change both brakes, he adjusted one of them without any extra cost, he paid attention to all the details and as if that were not enough, he sprayed both brakes with a special fluid to see if the condition of my brakes improved.  It was a deal of 10 and I realised that he is a great professional and the most important thing: that he knows how to deal with clients properly, thank you very much Jeff, for your help, your time and your professionalism.`,
    date: "March 2023",
    image: "/about/reviews/mar.png",
  },
  {
    name: "Paul Ruscher",
    reviewText: `Sooooo Nice !!!
    Great job
    Great team
    Great Jeff`,
    date: "March 2023",
    image: "/about/reviews/paul.png",
  },
  {
    name: "Merumo",
    reviewText: `This's a great shop!
    Thank you for helping me Jeff! :)`,
    date: "March 2023",
    image: "/about/reviews/merumo.png",
  },
  {
    name: "Chiara Caggiani",
    reviewText: `Excelent staff. I went to Freedom Machine asking for help, without being a client, since my bike lock got stuck and Jeff solve my problem right away. I’ll definitely be back:)`,
    date: "March 2023",
    image: "/about/reviews/chiara.png",
  },
  {
    name: "Manuela lesmes diaz",
    reviewText:
      "Perfect service, I get my bike fixed, the staff is really nice, thanks Jeff for the service! 🤙🏽 …",
    date: "March 2023",
    image: "/about/reviews/manuela.png",
  },
  {
    name: "Sofia Mandarini",
    reviewText: `Very good attention and kindness, Joffrey helped me with the brake on my bike that was broken, I fixed it in just a few minutes, he was very kind. I definitely recommend it 👌 👍🏻 😉 …`,
    date: "January 2023",
    image: "/about/reviews/sofia.png",
  },
  {
    name: "Matilda Raupach",
    reviewText: `Geoff was a great mechanic - majorly helped me out when I needed to unlock my bike. Thank you!!!`,
    date: "January 2023",
    image: "/about/reviews/matilda.png",
  },
]
