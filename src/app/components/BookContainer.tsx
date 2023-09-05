'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from './Button';

function BookContainer() {
  const router = useRouter();

  return (
    <section className="
        relative
        mt-[124px]
        flex
        h-[328px]
        w-full
        items-center
        justify-center
        text-white
        sm:mt-[120px]
        sm:h-[272px]
        md:mt-40
        md:h-60
      "
    >
      <Image
        width={2880}
        height={1220}
        src="/assets/booking/hero-bg-desktop@2x.jpg"
        alt="booking-image"
        className="h-full w-full object-cover object-left-top"
      />
      <div className="
          absolute
          flex
          h-auto
          w-full
          items-center
          justify-between
          max-xl:px-6
          max-md:flex-col
          max-md:text-center
          xl:w-[1110px]
        "
      >
        <h3 className="text-[32px] font-bold sm:text-5xl">
          Ready to make a reservation?
        </h3>
        <Button onClick={() => router.push('/reservations')}>
          book a table
        </Button>
      </div>
    </section>
  );
}

export default BookContainer;
