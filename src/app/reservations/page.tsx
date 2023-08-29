import React from 'react';
import Image from 'next/image';
import { Logo, PatternLines } from '../../../public/assets/svgs';
import Rectangle from '../components/Rectangle';

function Reservations() {
  return (
    <main>
      <section className=" relative flex h-[600px] w-full justify-center">
        <section className="relative z-50 h-auto w-[1110px]">
          <Logo className="mb-[153px] mt-16" />

          <section className="flex w-full justify-between">
            <div className="text-white">
              <h1 className="text-7xl">
                Reservations
              </h1>
              <p className="whitespace-pre-line text-body-2">
                {`
                    We can’t wait to host you. If you have any special
                    requirements please feel free to call on the phone
                    number below. We’ll be happy to accommodate you.
              `}
              </p>
            </div>

            <div className="absolute right-0 z-50 h-[545px] w-[540px]">
              <div className="h-full w-full bg-white" />
              <PatternLines className="absolute bottom-[-2.5rem] left-[-5rem] z-[-10]" />
            </div>

          </section>

        </section>
        <Image
          width={2880}
          height={1200}
          alt="booking-image"
          src="/assets/booking/hero-bg-desktop@2x.jpg"
          className="absolute top-0 z-0 h-full w-full object-cover object-left"
        />
      </section>

      <Rectangle className="relative w-[993px] rounded-br-[100px]" />

    </main>
  );
}

export default Reservations;
