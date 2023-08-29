import React from 'react'
import Button from "./Button"
import Image from "next/image"

const BookContainer = () => {
  return (
    <section className="
        mt-[124px]
        sm:mt-[120px]
        md:mt-40
        flex
        justify-center
        items-center
        w-full
        h-[328px]
        sm:h-[272px]
        md:h-60
        relative
        text-white
      "
    >
      <Image 
        width={2880}
        height={1220}
        src="/assets/booking/hero-bg-desktop@2x.jpg"
        alt="booking-image"
        className="w-full h-full object-cover object-left-top"
      />
      <div className="
          max-xl:px-6
          max-md:text-center
          w-full
          xl:w-[1110px]
          h-auto
          items-center
          flex
          max-md:flex-col
          justify-between
          absolute
        "
      >
        <h3 className="text-[32px] font-bold sm:text-5xl">
          Ready to make a reservation?
        </h3>
        <Button>book a table</Button>
      </div>
    </section>
  )
}

export default BookContainer